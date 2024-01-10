#!/usr/bin/env python3
# File name   : init
# Description : Control Servos
# Author      : BLONWINER
# Date        : 2023/11/30
import time
import Adafruit_PCA9685

pwm = Adafruit_PCA9685.PCA9685()
pwm.set_pwm_freq(50)

while 1:
	pwm.set_all_pwm(0, 300)
	time.sleep(1)