function telstap () {
    if (aan_of_uit == 1) {
        stappen += 1
    }
}
input.onButtonPressed(Button.A, function () {
    stappen = 0
})
input.onGesture(Gesture.Shake, function () {
    telstap()
})
input.onButtonPressed(Button.B, function () {
    if (aan_of_uit == 0) {
        aan_of_uit = 1
    } else {
        aan_of_uit = 0
    }
})
let stappen = 0
let aan_of_uit = 0
aan_of_uit = 0
basic.forever(function () {
    basic.showNumber(stappen)
})
