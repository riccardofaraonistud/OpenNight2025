input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    while (conta != 0) {
        basic.showNumber(conta)
        basic.pause(1000)
        conta += -1
    }
    choice = randint(2, 3)
    radio.sendNumber(choice)
    if (choice == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (choice == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(200000)
})
let choice = 0
let conta = 0
radio.setGroup(1)
conta = 15
