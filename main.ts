input.onButtonPressed(Button.A, function () {
    Random_Icon_1 = [images.iconImage(IconNames.Heart), images.iconImage(IconNames.Meh), images.iconImage(IconNames.Asleep), images.iconImage(IconNames.TShirt), images.iconImage(IconNames.Rollerskate), images.iconImage(IconNames.House), images.iconImage(IconNames.Sword), images.iconImage(IconNames.Ghost), images.iconImage(IconNames.EigthNote), images.iconImage(IconNames.Umbrella)]
    Random_Icon_2 = [images.iconImage(IconNames.Heart), images.iconImage(IconNames.Meh), images.iconImage(IconNames.Asleep), images.iconImage(IconNames.TShirt), images.iconImage(IconNames.Rollerskate), images.iconImage(IconNames.House), images.iconImage(IconNames.Sword), images.iconImage(IconNames.Ghost), images.iconImage(IconNames.EigthNote), images.iconImage(IconNames.Umbrella)]
    basic.clearScreen()
    if (Random_Icon_1 == Random_Icon_2) {
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        music.playTone(988, music.beat(BeatFraction.Whole))
        Player_1 += 1
        basic.showString("Player 1 Points:")
        basic.showNumber(Player_1)
    } else {
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showString("Player 1 Points:")
        basic.showNumber(Player_1)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    Coin = randint(1, 10)
    basic.clearScreen()
    if (Coin > 5) {
        basic.showNumber(Coin)
        basic.showIcon(IconNames.Skull)
        basic.showString("Player 1 Starts:")
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else {
        basic.showNumber(Coin)
        basic.showIcon(IconNames.Square)
        basic.showString("Player 2 Starts:")
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    Random_Icon_1 = [images.iconImage(IconNames.Heart), images.iconImage(IconNames.Meh), images.iconImage(IconNames.Asleep), images.iconImage(IconNames.TShirt), images.iconImage(IconNames.Rollerskate), images.iconImage(IconNames.House), images.iconImage(IconNames.Sword), images.iconImage(IconNames.Ghost), images.iconImage(IconNames.EigthNote), images.iconImage(IconNames.Umbrella)]
    Random_Icon_2 = [images.iconImage(IconNames.Heart), images.iconImage(IconNames.Meh), images.iconImage(IconNames.Asleep), images.iconImage(IconNames.TShirt), images.iconImage(IconNames.Rollerskate), images.iconImage(IconNames.House), images.iconImage(IconNames.Sword), images.iconImage(IconNames.Ghost), images.iconImage(IconNames.EigthNote), images.iconImage(IconNames.Umbrella)]
    basic.clearScreen()
    if (Random_Icon_1 == Random_Icon_2) {
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        music.playTone(988, music.beat(BeatFraction.Whole))
        Player_2 += 1
        basic.showString("Player 2 Points:")
        basic.showNumber(Player_2)
    } else {
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showString("Player 2 Points:")
        basic.showNumber(Player_2)
    }
})
let Coin = 0
let Random_Icon_2: Image[] = []
let Random_Icon_1: Image[] = []
let Player_2 = 0
let Player_1 = 0
Player_1 = 0
Player_2 = 0
basic.forever(function () {
    if (Player_1 == 5) {
        basic.showString("Player 1 WON!")
        music.playMelody("A F A E - F B - ", 120)
        basic.clearScreen()
    }
    basic.clearScreen()
    if (Player_2 == 5) {
        basic.showString("Player 2 WON!")
        music.playMelody("A F A E - F B - ", 120)
        basic.clearScreen()
    }
    basic.clearScreen()
})
