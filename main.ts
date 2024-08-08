basic.forever(function () {
    music.play(music.stringPlayable("C G C G C G C5 E ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
