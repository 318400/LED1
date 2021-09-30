let X = 0
let Y = 0
input.onButtonPressed(Button.A, function () {
    X = 0
    Y += 1
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
basic.forever(function () {
	
})
