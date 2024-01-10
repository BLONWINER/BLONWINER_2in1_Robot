#!/usr/bin/env/python
# File name   : trackingMoudle.py
# Author      : BLONWINER
# Date        : 2023/11/30
import time
import RPi.GPIO as GPIO


line_pin_right = 19
line_pin_right_middle = 5
line_pin_middle = 16
line_pin_left_middle = 6
line_pin_left = 20

def setup():
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(line_pin_right,GPIO.IN)
    GPIO.setup(line_pin_right_middle,GPIO.IN)
    GPIO.setup(line_pin_middle,GPIO.IN)
    GPIO.setup(line_pin_left_middle,GPIO.IN)
    GPIO.setup(line_pin_left,GPIO.IN)
    #motor.setup()


def run():
    status_right = GPIO.input(line_pin_right)
    status_right_middle = GPIO.input(line_pin_right_middle)
    status_middle = GPIO.input(line_pin_middle)
    status_left_middle = GPIO.input(line_pin_left_middle)
    status_left = GPIO.input(line_pin_left)
    print('LF1: %d   LF2: %d   LF3: %d   LF4: %d   LF5: %d\n'%(status_right,status_right_middle,status_middle,status_left_middle,status_left))
    time.sleep(0.2)
if __name__ == '__main__':
    try:
      setup()
      while True:
        run()
    except KeyboardInterrupt:
      pass


