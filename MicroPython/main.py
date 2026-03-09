"""
* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Kyle Matthew
* Created on: Mar 2026
* This program does an RGB LED by using circuits+.
"""

from microbit import *

# assigned variable
red_pin = pin13
green_pin = pin14
blue_pin = pin15

# setup
display.clear()
display.show(Image.HAPPY)

while True:
    # when Button A is pressed it will scroll the text and the RGB light will turn each colors in order
    if button_a.is_pressed():
        # red
        red_pin.write_digital(1)
        green_pin.write_digital(0)
        blue_pin.write_digital(0)
        display.scroll("RED")
        sleep(1000)

        # green
        red_pin.write_digital(0)
        green_pin.write_digital(1)
        blue_pin.write_digital(0)
        display.scroll("GREEN")
        sleep(1000)

        # blue
        red_pin.write_digital(0)
        green_pin.write_digital(0)
        blue_pin.write_digital(1)
        display.scroll("BLUE")
        sleep(1000)

        # magenta
        red_pin.write_digital(1)
        green_pin.write_digital(0)
        blue_pin.write_digital(1)
        display.scroll("MAGENTA")
        sleep(1000)

        # cyan
        red_pin.write_digital(0)
        green_pin.write_digital(1)
        blue_pin.write_digital(1)
        display.scroll("CYAN")
        sleep(1000)

        # white
        red_pin.write_digital(1)
        green_pin.write_digital(1)
        blue_pin.write_digital(1)
        display.scroll("WHITE")
        display.clear()
