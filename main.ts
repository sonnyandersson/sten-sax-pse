input.onButtonPressed(Button.A, function () {
    Poäng_Spelare += 1
    music.playTone(784, music.beat(BeatFraction.Whole))
    basic.showString("Du!")
    basic.showNumber(Poäng_Spelare)
})
function Räkna_ner () {
    basic.showIcon(IconNames.SmallDiamond)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(200)
    basic.showIcon(IconNames.Diamond)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playTone(523, music.beat(BeatFraction.Whole))
}
function Visa_sten_sax_eller_påse () {
    SlumpSiffra = randint(1, 3)
    if (SlumpSiffra == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (SlumpSiffra == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
    Poäng_Microbit = 0
    Poäng_Spelare = 0
    basic.showString("Nytt spel")
})
input.onButtonPressed(Button.B, function () {
    Poäng_Microbit += 1
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("Jag!")
    basic.showNumber(Poäng_Microbit)
})
function Har_någon_vunnit () {
    if (Poäng_Microbit == 5) {
        music.playMelody("E D G F B C5 - C5 ", 120)
        basic.showString("Jag vann!")
        Poäng_Microbit = 0
        Poäng_Spelare = 0
    }
    if (Poäng_Spelare == 5) {
        music.playMelody("E D G F B C5 - C5 ", 120)
        basic.showString("Du vann!")
        Poäng_Microbit = 0
        Poäng_Spelare = 0
    }
}
let Poäng_Microbit = 0
let SlumpSiffra = 0
let Poäng_Spelare = 0
basic.showLeds(`
    # # # # #
    . . . . .
    . # . # .
    . . . . .
    # # # # #
    `)
basic.forever(function () {
    if (input.logoIsPressed()) {
        Räkna_ner()
        Visa_sten_sax_eller_påse()
    }
    Har_någon_vunnit()
})
