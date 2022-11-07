input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    if (radio2 > 255) {
        radio2 = 255
    } else {
        radio2 += 1
        radio.setGroup(radio2)
        basic.showNumber(radio2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (radio2 < 0) {
        radio2 = 0
    } else {
        radio2 += -1
        radio.setGroup(radio2)
        basic.showNumber(radio2)
    }
})
let radio2 = 0
radio.setGroup(-1)
radio2 = 0
radio.setGroup(radio2)
basic.showNumber(radio2)
basic.forever(function () {
	
})
