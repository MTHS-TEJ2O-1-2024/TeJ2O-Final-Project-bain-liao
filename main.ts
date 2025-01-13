/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Jan 2025
 * This program controls the rubber band launcher servo
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, -15)
    basic.clearScreen()
    basic.showString('Reset')
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 50)
    basic.clearScreen()
    basic.showString('Launch!')
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})