#!/usr/bin/env/python
# File name   : switch.py
# Author      : BLONWINER
# Date        : 2023/11/30

import RPi.GPIO as GPIO

def switchSetup():
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(13, GPIO.OUT)

def switch(port, status):
    if port == 3:
        if status == 1:
            GPIO.output(13, GPIO.HIGH)
        elif status == 0:
            GPIO.output(13,GPIO.LOW)
        else:
            pass
    else:
        pass
        

def set_all_switch_off():
    switch(3,0)
