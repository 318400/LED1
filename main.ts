input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(X, Y, 33)
            basic.pause(20)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(Y, X, 132)
            basic.pause(20)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(X, Y, 193)
            basic.pause(20)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(Y, X)
            basic.pause(20)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(X, Y, 206)
            basic.pause(20)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(Y, X, 111)
            basic.pause(50)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(X, Y, 41)
            basic.pause(20)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.unplot(Y, X)
            basic.pause(20)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index2 = 0; index2 < 100; index2++) {
        _2 = 0
        if (_1 >= 4) {
            index = -1
        } else if (_1 <= 0) {
            index = 1
        }
        if (_3 >= 4) {
            _4 = -1
        } else if (_3 <= 0) {
            _4 = 1
        }
        if (_5 >= 4) {
            _6 = -1
        } else if (_5 <= 0) {
            _6 = 1
        }
        _1 += index
        _3 += _4
        _5 += _6
        for (let index2 = 0; index2 < 5; index2++) {
            led.plotBrightness(_5, _2, 20)
            led.plotBrightness(_3, _2, 60)
            led.plot(_1, _2)
            _2 += 1
        }
        basic.pause(100)
    }
})
let index = 0
let _6 = 0
let _5 = 0
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
let X = 0
let Y = 0
_1 = 2
index = 1
_3 = 1
_4 = 1
_5 = 0
_6 = 1
