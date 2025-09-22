#!/usr/bin/env/python
# File name   : webServer.py
# Production  : BLONWINER 2in1 Robot
# Author      : BLONWINER
# Date        : 2023/11/30
#updated version: Callyn Villanueva (09/22/25)
import time
import threading
import move
import Adafruit_PCA9685
import os
import info
import RPIservo

import functions
import robotLight

import socket

#websocket
import asyncio
import websockets

import json
import app

functionMode = 0
speed_set = 100
rad = 1.0
turnWiggle = 60

scGear = RPIservo.ServoCtrl()
scGear.moveInit()

P_sc = RPIservo.ServoCtrl()
P_sc.start()

T_sc = RPIservo.ServoCtrl()
T_sc.start()

H1_sc = RPIservo.ServoCtrl()
H1_sc.start()

H2_sc = RPIservo.ServoCtrl()
H2_sc.start()

G_sc = RPIservo.ServoCtrl()
G_sc.start()

# modeSelect = 'none'
modeSelect = 'PT'

init_pwm0 = scGear.initPos[0]
init_pwm1 = scGear.initPos[1]
init_pwm2 = scGear.initPos[2]
init_pwm3 = scGear.initPos[3]
init_pwm4 = scGear.initPos[4]

fuc = functions.Functions()
fuc.start()

curpath = os.path.realpath(__file__)
thisPath = "/" + os.path.dirname(curpath)

direction_command = 'no'
turn_command = 'no'

def servoPosInit():
    scGear.initConfig(0,init_pwm0,1)
    P_sc.initConfig(1,init_pwm1,1)
    T_sc.initConfig(2,init_pwm2,1)
    H_sc.initConfig(3,init_pwm3,1)
    G_sc.initConfig(4,init_pwm4,1)


def replace_num(initial,new_num):   #Call this function to replace data in '.txt' file
    global r
    newline=""
    str_num=str(new_num)
    with open(thisPath+"/RPIservo.py","r") as f:
        for line in f.readlines():
            if(line.find(initial) == 0):
                line = initial+"%s" %(str_num+"\n")
            newline += line
    with open(thisPath+"/RPIservo.py","w") as f:
        f.writelines(newline)


def FPV_thread():
    global fpv
    fpv=FPV.FPV()
    fpv.capture_thread(addr[0])


def ap_thread():
    os.system("sudo create_ap wlan0 eth0 BLONWINER 12345678")


def functionSelect(command_input, response):
    global functionMode
    if 'scan' == command_input:
        if modeSelect == 'PT':
            radar_send = fuc.radarScan()
            print(radar_send)
            response['title'] = 'scanResult'
            response['data'] = radar_send
            time.sleep(0.3)

    elif 'findColor' == command_input:
        if modeSelect == 'PT':
            flask_app.modeselect('findColor')

    elif 'motionGet' == command_input:
        flask_app.modeselect('watchDog')

    elif 'stopCV' == command_input:
        flask_app.modeselect('none')

    elif 'police' == command_input:
        RL.police()

    elif 'policeOff' == command_input:
        RL.pause()
        move.motorStop()

    elif 'automatic' == command_input:
        #if modeSelect == 'PT':
        fuc.automatic()
        fuc.automaticProcessing()
        #else:
            #fuc.pause()

    elif 'automaticOff' == command_input:
        fuc.pause()
        move.motorStop()

    elif 'trackLine' == command_input:
        fuc.trackLine()
        fuc.trackLineProcessing()

    elif 'trackLineOff' == command_input:
        fuc.pause()
        move.motorStop()

    elif 'steadyCamera' == command_input:
        fuc.steady(T_sc.lastPos[2])

    elif 'steadyCameraOff' == command_input:
        fuc.pause()
        move.motorStop()


def robotCtrl(command_input, response):
	global direction_command, turn_command
	if 'forward' == command_input:
		direction_command = 'forward'
		move.move(speed_set, 'forward', turn_command)
    
	elif 'backward' == command_input:
		direction_command = 'backward'
		move.move(speed_set, 'backward', turn_command)

	elif 'DS' in command_input:
		direction_command = 'no'
		
		if turn_command == 'no':
			move.move(speed_set, 'no', 'no')
		else:
			move.move(speed_set, 'no', turn_command)


	elif 'left' == command_input:
		turn_command = 'left'
		move.move(speed_set, direction_command, 'left')

	elif 'right' == command_input:
		turn_command = 'right'
		#print('waiting for right...')
		move.move(speed_set, direction_command, 'right')

	elif 'TS' in command_input:
		turn_command = 'no'
		if direction_command == 'no':
			move.move(speed_set, 'no', 'no')
			
		else:
			move.move(speed_set, direction_command, 'no')


	elif 'lookleft' == command_input:
		P_sc.singleServo(14, -1, 3)

	elif 'lookright' == command_input:
		P_sc.singleServo(14, 1, 3)

	elif 'LRstop' in command_input:
		P_sc.stopWiggle()


	elif 'up' == command_input:
		T_sc.singleServo(11, -1, 3)

	elif 'down' == command_input:
		T_sc.singleServo(11, 1, 3)

	elif 'UDstop' in command_input:
		T_sc.stopWiggle()


	elif 'handup' == command_input:
		# H1_sc.singleServo(12, 1, 7)
        
		H2_sc.singleServo(13, -1, 7)

	elif 'handdown' == command_input:
		# H1_sc.singleServo(12, -1, 7)

		H2_sc.singleServo(13, 1, 7)

	elif 'HAstop' in command_input:
		# H1_sc.stopWiggle()
		H2_sc.stopWiggle()

	elif 'armup' == command_input:
		H1_sc.singleServo(12, 1, 7)
        
		# H2_sc.singleServo(13, 1, 7)

	elif 'armdown' == command_input:
		H1_sc.singleServo(12, -1, 7)

		# H2_sc.singleServo(13, -1, 7)

	elif 'Armstop' in command_input:
		H1_sc.stopWiggle()
		# H2_sc.stopWiggle()

	elif 'grab' == command_input:
		G_sc.singleServo(15, 1, 3)

	elif 'loose' == command_input:
		G_sc.singleServo(15, -1, 3)

	elif 'stop' == command_input:
		G_sc.stopWiggle()

	elif 'home' == command_input:
		P_sc.moveServoInit([11])
		T_sc.moveServoInit([14])
		H1_sc.moveServoInit([12])
		H2_sc.moveServoInit([13])
		G_sc.moveServoInit([15])


def configPWM(command_input, response):
    global init_pwm0, init_pwm1, init_pwm2, init_pwm3, init_pwm4
    if 'SiLeft' == command_input:
        init_pwm0 += 1
        scGear.setPWM(0,init_pwm0)
    elif 'SiRight' == command_input:
        init_pwm0 -= 1
        scGear.setPWM(0,-init_pwm0)
    elif 'PWM0MS' == command_input:
        scGear.initConfig(0,init_pwm0,1)
        replace_num('init_pwm0 = ', init_pwm0)

    elif 'PWM1MS' == command_input:
        init_pwm1 = P_sc.lastPos[1]
        P_sc.initConfig(1,P_sc.lastPos[1],1)
        replace_num('init_pwm1 = ', P_sc.lastPos[1])

    elif 'PWM2MS' == command_input:
        init_pwm2 = T_sc.lastPos[2]
        T_sc.initConfig(2,T_sc.lastPos[2],1)
        print('LLLLLS',T_sc.lastPos[2])
        replace_num('init_pwm2 = ', T_sc.lastPos[2])

    elif 'PWM3MS' == command_input:
        init_pwm3 = H_sc.lastPos[3]
        H_sc.initConfig(3,H_sc.lastPos[3],1)
        replace_num('init_pwm3 = ', H_sc.lastPos[3])

    elif 'PWM4MS' == command_input:
        init_pwm4 = G_sc.lastPos[4]
        G_sc.initConfig(4,G_sc.lastPos[4],1)
        replace_num('init_pwm4 = ', G_sc.lastPos[4])

    elif 'PWMINIT' == command_input:
        print(init_pwm1)
        servoPosInit()

    elif 'PWMD' == command_input:
        init_pwm0,init_pwm1,init_pwm2,init_pwm3,init_pwm4=300,300,300,300,300
        scGear.initConfig(0,init_pwm0,1)
        replace_num('init_pwm0 = ', 300)

        P_sc.initConfig(1,300,1)
        replace_num('init_pwm1 = ', 300)

        T_sc.initConfig(2,300,1)
        replace_num('init_pwm2 = ', 300)

        H_sc.initConfig(3,300,1)
        replace_num('init_pwm3 = ', 300)

        G_sc.initConfig(4,300,1)
        replace_num('init_pwm4 = ', 300)
 
def wifi_check():
    try:
        s =socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        s.connect(("1.1.1.1",80))
        ipaddr_check=s.getsockname()[0]
        s.close()
        print(ipaddr_check)

    except:
        ap_threading=threading.Thread(target=ap_thread)   #Define a thread for data receiving
        ap_threading.setDaemon(True)                          #'True' means it is a front thread,it would close when the mainloop() closes
        ap_threading.start()                                  #Thread starts
        RL.setColor(0,16,50)
        time.sleep(1)

        RL.setColor(0,16,100)
        time.sleep(1)

        RL.setColor(0,16,150)
        time.sleep(1)

        RL.setColor(0,16,200)
        time.sleep(1)

        RL.setColor(0,16,255)
        time.sleep(1)

        RL.setColor(35,255,35)


async def check_permit(websocket):
    while True:
        recv_str = await websocket.recv()
        cred_dict = recv_str.split(":")
        if cred_dict[0] == "admin" and cred_dict[1] == "123456":
            response_str = "congratulation, you have connect with server\r\nnow, you can do something else"
            await websocket.send(response_str)
            return True
        else:
            response_str = "sorry, the username or password is wrong, please submit again"
            await websocket.send(response_str)

async def recv_msg(websocket):
    global speed_set, modeSelect
    move.setup()
    direction_command = 'no'
    turn_command = 'no'

    while True: 
        response = {
            'status' : 'ok',
            'title' : '',
            'data' : None
        }

        data = ''
        data = await websocket.recv()
        try:
            data = json.loads(data)
        except Exception as e:
            print('not A JSON')

        if not data:
            continue

        if isinstance(data,str):
            robotCtrl(data, response)

            functionSelect(data, response)

            configPWM(data, response)

            if 'get_info' == data:
                response['title'] = 'get_info'
                response['data'] = [info.get_cpu_tempfunc(), info.get_cpu_use(), info.get_ram_info()]

            if 'wsB' in data:
                try:
                    set_B=data.split()
                    speed_set = int(set_B[1])
                except:
                    pass

            elif 'AR' == data:
                modeSelect = 'AR'
                try:
                    fpv.changeMode('ARM MODE ON')
                except:
                    pass

            elif 'PT' == data:
                modeSelect = 'PT'
                try:
                    fpv.changeMode('PT MODE ON')
                except:
                    pass

            #CVFL
            elif 'CVFL' == data:
                flask_app.modeselect('findlineCV')

            elif 'CVFLColorSet' in data:
                color = int(data.split()[1])
                flask_app.camera.colorSet(color)

            elif 'CVFLL1' in data:
                pos = int(data.split()[1])
                flask_app.camera.linePosSet_1(pos)

            elif 'CVFLL2' in data:
                pos = int(data.split()[1])
                flask_app.camera.linePosSet_2(pos)

            elif 'CVFLSP' in data:
                err = int(data.split()[1])
                flask_app.camera.errorSet(err)

            elif 'defEC' in data:#Z
                fpv.defaultExpCom()

        elif(isinstance(data,dict)):
            if data['title'] == "findColorSet":
                color = data['data']
                flask_app.colorFindSet(color[0],color[1],color[2])

        print(data)
        response = json.dumps(response)
        await websocket.send(response)

async def main_logic(websocket, path):
    await check_permit(websocket)
    await recv_msg(websocket)

if __name__ == '__main__':

    HOST = ''
    PORT = 10223                              #Define port serial 
    BUFSIZ = 1024                             #Define buffer size
    ADDR = (HOST, PORT)

    global flask_app
    flask_app = app.webapp()
    flask_app.startthread()

    try:
        RL=robotLight.RobotLight()
        RL.start()
        RL.breath(70,70,255)
    except ModuleNotFoundError as e:
        print('Use "sudo pip3 install rpi_ws281x" to install WS_281x package\n使用"sudo pip3 install rpi_ws281x"命令来安装rpi_ws281x')
        pass

    import asyncio
import websockets

async def main():
    # Check WiFi once (spawns AP thread if offline)
    try:
        wifi_check()
    except Exception as e:
        print(e)

    # Optional: set LED color to 'starting'
    try:
        RL.setColor(0, 80, 255)
    except Exception:
        pass

    try:
        # Start websocket server and keep running
        async with websockets.serve(main_logic, '0.0.0.0', 8888):
            print('waiting for connection...')
            await asyncio.Event().wait()  # run forever
    except Exception as e:
        print(e)
        try:
            RL.setColor(0, 0, 0)
        except Exception:
            pass
        raise
    finally:
        try:
            move.destroy()
        except Exception:
            pass

if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        pass
