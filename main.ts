input.onButtonPressed(Button.A, function () {
    minibit.setLedColor(0x00FFC0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    for (let index = 0; index < 4; index++) {
        minibit.setLedColor(0xFF0000)
        minibit.goms(mbDirection.Forward, 60, 600)
        basic.pause(100)
        minibit.rotate(mbRobotDirection.Left, 100)
        basic.pause(100)
        minibit.setLedColor(0x0000FF)
    }
    minibit.stop(mbStopMode.Coast)
})
input.onButtonPressed(Button.B, function () {
    minibit.setLedColor(0xFFFF00)
})
basic.showIcon(IconNames.Surprised)
basic.forever(function () {
	
})
