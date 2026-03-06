/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Mar 2026
 * This program does an RGB LED by using circuits+.
*/


// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when Button A is pressed it will scroll the text and the RGB light will turn each colors in order
input.onButtonPressed(Button.A, function () {
  // red
  pins.digitalWritePin(DigitalPin.P13, 1)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 0)
  basic.showString("RED")
  basic.pause(1000)

  // green
  pins.digitalWritePin(DigitalPin.P13, 0)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 0)
  basic.showString("GREEN")
  basic.pause(1000)

  // blue
  pins.digitalWritePin(DigitalPin.P13, 0)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString("BLUE")
  basic.pause(1000)

  // magenta
  pins.digitalWritePin(DigitalPin.P13, 1)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString("MAGENTA")
  basic.pause(1000)

  // cyan
  pins.digitalWritePin(DigitalPin.P13, 0)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString("CYAN")
  basic.pause(1000)

  // white
  pins.digitalWritePin(DigitalPin.P13, 1)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString("WHITE")
  basic.pause(1000)
})
