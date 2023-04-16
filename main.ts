radio.onReceivedStringDeprecated(function (command) {
    for (let index = 0; index < 5; index++) {
        if (command == "bark") {
            music.playMelody("E B C5 A B G A F ", 120)
        } else if (command == "ask") {
            cuteBot.motors(100, -15)
        }
    }
})
radio.setGroup(255)
basic.showIcon(IconNames.Heart)
