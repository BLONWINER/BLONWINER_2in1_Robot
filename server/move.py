#!/usr/bin/env python3
# File name   : move.py
# Description : Control Motor
# Author      : BLONWINER
# Date        : 2023/11/30


import time
import RPi.GPIO as GPIO

#Motor_MF: GPIO26,GPIO21
#Motor_MB: GPIO18,GPIO27
#Motor_MR: GPIO04,GPIO17

Motor_MF_Pin1 = 26
Motor_MF_Pin2 = 21

Motor_MB_Pin1 = 18
Motor_MB_Pin2 = 27

Motor_MR_Pin1 = 4
Motor_MR_Pin2 = 17

Dir_forward   = 0
Dir_backward  = 1

left_forward  = 0
left_backward = 0

right_forward = 1
right_backward= 1

left_f=0
right_f=1

motorRun=1
motorStop=0

pwm_MR_Pin1 = 0 
pwm_MR_Pin2 = 0
pwm_MF_Pin1 = 0
pwn_MF_Pin2 = 0
pwm_MB_Pin1 = 0
pwm_MB_Pin2 = 0

def motorStopSet():#Motor stops
	GPIO.output(Motor_MF_Pin1, GPIO.HIGH)
	GPIO.output(Motor_MF_Pin2, GPIO.HIGH)
	GPIO.output(Motor_MB_Pin1, GPIO.HIGH)
	GPIO.output(Motor_MB_Pin2, GPIO.HIGH)
	GPIO.output(Motor_MR_Pin1, GPIO.HIGH)
	GPIO.output(Motor_MR_Pin2, GPIO.HIGH)

def motorStop():#Motor stops
	pwm_MB_Pin1.start(100)
	pwm_MB_Pin1.ChangeDutyCycle(100)
	pwm_MB_Pin2.start(100)
	pwm_MB_Pin2.ChangeDutyCycle(100)
	pwm_MF_Pin1.start(100)
	pwm_MF_Pin1.ChangeDutyCycle(100)
	pwm_MF_Pin2.start(100)
	pwm_MF_Pin2.ChangeDutyCycle(100)
	GPIO.output(Motor_MR_Pin1, GPIO.HIGH)
	GPIO.output(Motor_MR_Pin2, GPIO.HIGH)
	#pwm_MR_Pin1.start(100)
	#pwm_MR_Pin1.ChangeDutyCycle(100)
	#pwm_MR_Pin2.start(100)
	#pwm_MR_Pin2.ChangeDutyCycle(100)


def setup():#Motor initialization
	global pwm_MR_Pin1, pwm_MR_Pin2, pwm_MF_Pin1, pwm_MF_Pin2, pwm_MB_Pin1, pwm_MB_Pin2
	GPIO.setwarnings(False)
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(Motor_MR_Pin1, GPIO.OUT)
	GPIO.setup(Motor_MR_Pin2, GPIO.OUT)
	GPIO.setup(Motor_MF_Pin1, GPIO.OUT)
	GPIO.setup(Motor_MF_Pin2, GPIO.OUT)
	GPIO.setup(Motor_MB_Pin1, GPIO.OUT)
	GPIO.setup(Motor_MB_Pin2, GPIO.OUT)
	motorStopSet()
	
	try:
		#pwm_MR_Pin1 = GPIO.PWM(Motor_MR_Pin1, 1000)
		#pwm_MR_Pin2 = GPIO.PWM(Motor_MR_Pin2, 1000)
		pwm_MF_Pin1 = GPIO.PWM(Motor_MF_Pin1, 1000)
		pwm_MF_Pin2 = GPIO.PWM(Motor_MF_Pin2, 1000)
		pwm_MB_Pin1 = GPIO.PWM(Motor_MB_Pin1, 1000)
		pwm_MB_Pin2 = GPIO.PWM(Motor_MB_Pin2, 1000)
	except:
		pass


def motor_MF(status, direction, speed):#Motor MF positive and negative rotation
	GPIO.setup(Motor_MF_Pin1, GPIO.OUT)
	GPIO.setup(Motor_MF_Pin2, GPIO.OUT)
	if status == 0: # stop
		#GPIO.output(Motor_MF_Pin1, GPIO.LOW)
		pwm_MF_Pin1.start(100)
		pwm_MF_Pin1.ChangeDutyCycle(100)
		pwm_MF_Pin2.start(100)
		pwm_MF_Pin2.ChangeDutyCycle(100)
		#GPIO.output(Motor_MF_Pin2, GPIO.LOW)
	else:
		if direction == Dir_forward:
			pwm_MF_Pin1.start(100)
			pwm_MF_Pin1.ChangeDutyCycle(speed)
			pwm_MF_Pin2.start(0)
			pwm_MF_Pin2.ChangeDutyCycle(0)
		elif direction == Dir_backward:
			pwm_MF_Pin1.start(0)
			pwm_MF_Pin1.ChangeDutyCycle(0)
			pwm_MF_Pin2.start(100)
			pwm_MF_Pin2.ChangeDutyCycle(speed)

def motor_MB(status, direction, speed):#Motor MB positive and negative rotation
	
	if status == 0: # stop
		#GPIO.output(Motor_MB_Pin1, GPIO.LOW)
		pwm_MB_Pin1.start(100)
		pwm_MB_Pin1.ChangeDutyCycle(100)
		pwm_MB_Pin2.start(100)
		pwm_MB_Pin2.ChangeDutyCycle(100)
		#GPIO.output(Motor_MB_Pin2, GPIO.LOW)
	else:
		if direction == Dir_forward:
			pwm_MB_Pin1.start(100)
			pwm_MB_Pin1.ChangeDutyCycle(speed)
			pwm_MB_Pin2.start(0)
			pwm_MB_Pin2.ChangeDutyCycle(0)
		elif direction == Dir_backward:
			pwm_MB_Pin1.start(0)
			pwm_MB_Pin1.ChangeDutyCycle(0)
			pwm_MB_Pin2.start(100)
			pwm_MB_Pin2.ChangeDutyCycle(speed)

def motor_MR(status, direction, speed):#Motor MR positive and negative rotation
	GPIO.setup(Motor_MR_Pin1, GPIO.OUT)
	GPIO.setup(Motor_MR_Pin2, GPIO.OUT)
	if status == 0: # stop
		GPIO.output(Motor_MR_Pin1, GPIO.HIGH)
		'''pwm_MR_Pin1.start(100)
		pwm_MR_Pin1.ChangeDutyCycle(100)
		pwm_MR_Pin2.start(100)
		pwm_MR_Pin2.ChangeDutyCycle(100)'''
		GPIO.output(Motor_MR_Pin2, GPIO.HIGH)
	else:
		if direction == 0:
			GPIO.output(Motor_MR_Pin1, GPIO.HIGH)
			GPIO.output(Motor_MR_Pin2, GPIO.LOW)
			'''pwm_MR_Pin1.start(100)
			pwm_MR_Pin1.ChangeDutyCycle(speed)
			pwm_MR_Pin2.start(0)
			pwm_MR_Pin2.ChangeDutyCycle(0)'''
		elif direction == 1:
			GPIO.output(Motor_MR_Pin1, GPIO.LOW)
			GPIO.output(Motor_MR_Pin2, GPIO.HIGH)
			'''pwm_MR_Pin1.start(0)
			pwm_MR_Pin1.ChangeDutyCycle(0)
			pwm_MR_Pin2.start(100)
			pwm_MR_Pin2.ChangeDutyCycle(speed)'''
	






def move(speed, direction, turn):   # 0 < radius <= 1  
	                                            #speed = 100    int(speed*radius)
	
	
	if direction == 'forward':
		if turn == 'right':
			motor_MR(1, 1, speed)#(motorRun, right_forward, speed)
			motor_MF(1, 0, speed)#(motorRun, Dir_forward, speed)
			motor_MB(1, 0, speed)#(motorRun, Dir_forward, speed)
		elif turn == 'left':
			motor_MR(1, 0, speed)#(motorRun, left_forward, speed)
			motor_MF(1, 0, speed)#(motorRun, Dir_forward, speed)
			motor_MB(1, 0, speed)#(motorRun, Dir_forward, speed)
		else:
			motor_MR(0, 2, speed)     #(motorStop, no, speed)
			motor_MF(1, 0, speed)#(motorRun, Dir_forward, speed)
			motor_MB(1, 0, speed)#(motorRun, Dir_forward, speed)
	elif direction == 'backward':
		if turn == 'right':
			motor_MR(1, 1, speed)  #(motorRun, right_backward, speed)
			motor_MF(1, 1, speed)   #(motorRun, Dir_backward, speed)
			motor_MB(1, 1, speed)   #(motorRun, Dir_backward, speed)
		elif turn == 'left':
			motor_MR(1, 0, speed)  #(motorRun, left_backward, speed)
			motor_MF(1, 1, speed)   #(motorRun, Dir_backward, speed) 
			motor_MB(1, 1, speed)   #(motorRun, Dir_backward, speed) 
		else:
			motor_MR(0, 2, speed)             #(motorStop, no, speed) 
			motor_MF(1, 1, speed)   #(motorRun, Dir_backward, speed)
			motor_MB(1, 1, speed)   #(motorRun, Dir_backward, speed)
	elif direction == 'no':
			if turn == 'right':
				
				motor_MR(1, 1, speed)
				motor_MB(0, 2, speed)
				motor_MF(0, 2, speed)
				
			elif turn == 'left':
				
				motor_MR(1, 0, speed)
				motor_MB(0, 2, speed)
				motor_MF(0, 2, speed)
				
			elif turn == 'no':
				motorStop()
				
			else:
				motorStop()
				
	else:
		pass




def destroy():
	motorStop()
	GPIO.cleanup()             # Release resource


if __name__ == '__main__':
	try:
		speed_set = 100
		setup()
		
		move(speed_set, 'forward', 'left')
		time.sleep(1.3)
		#destroy()
		#setup()
		print('waiting for connection111111...')
		#setup()
		move(speed_set, 'no', 'right')
		time.sleep(2.3)
		move(speed_set, 'no', 'left')
		time.sleep(2.3)
		move(speed_set, 'no', 'left')
		time.sleep(1.3)
		#destroy()
		print('waiting for connection222222...')
		#motorStop()
		#print('waiting for 111111111')
		#time.sleep(5.3)
		#print('waiting for 222222')
		#move(speed_set, 'backward', 'no', 1.0)
		#time.sleep(2.3)
		#motorStop()
		#time.sleep(3.3)
		#move(speed_set, 'no', 'left', 1.0)
		#time.sleep(3.3)
		#motorStop()
		destroy()
	except KeyboardInterrupt:
		destroy()

