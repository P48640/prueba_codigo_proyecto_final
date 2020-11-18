input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 120)
    Value_1 = randint(0, 2)
    Value_2 = randint(0, 2)
    Array_value_1 = Array_1[Value_1]
    Array_value_2 = Array_2[Value_2]
    basic.clearScreen()
    basic.showString("Card 1:")
    basic.showString("" + (Array_1[Value_1]))
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Card 2:")
    basic.showString("" + (Array_2[Value_2]))
    basic.pause(1000)
    basic.clearScreen()
    if (Array_value_1 == Array_value_2) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        music.playTone(988, music.beat(BeatFraction.Whole))
        Player_1 += 1
        basic.showString("P1 Points:")
        basic.showNumber(Player_1)
    } else {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showString("P1 Points:")
        basic.showNumber(Player_1)
    }
    basic.clearScreen()
    if (Player_1 >= 5) {
        for (let index = 0; index <= 2; index++) {
            basic.showString("Player 1 WON!")
            music.playMelody("A F A E - F B - ", 120)
        }
        basic.clearScreen()
        game.gameOver()
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    Coin = randint(1, 10)
    basic.pause(1000)
    basic.clearScreen()
    while (Coin > 5) {
        basic.showIcon(IconNames.Skull)
        basic.clearScreen()
        basic.showString("Player 1 Starts")
        music.playTone(349, music.beat(BeatFraction.Whole))
        sprite = game.createSprite(1, 1)
        for (let index = 0; index < 50; index++) {
            sprite.move(2)
            sprite.turn(Direction.Right, 90)
            basic.pause(100)
        }
        sprite.delete()
        basic.clearScreen()
        break;
    }
    basic.clearScreen()
    while (Coin <= 5) {
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
        basic.showString("Player 2 Starts")
        music.playTone(587, music.beat(BeatFraction.Whole))
        sprite = game.createSprite(1, 1)
        for (let index = 0; index < 50; index++) {
            sprite.move(2)
            sprite.turn(Direction.Right, 90)
            basic.pause(100)
        }
        sprite.delete()
        basic.clearScreen()
        break;
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 A B G A F G E ", 120)
    Value_1 = randint(0, 6)
    Value_2 = randint(0, 6)
    Array_value_1 = Array_1[Value_1]
    Array_value_2 = Array_2[Value_2]
    basic.clearScreen()
    basic.showString("Letter 1")
    basic.showString("" + (Array_1[Value_1]))
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Card 2:")
    basic.showString("" + (Array_2[Value_2]))
    basic.pause(1000)
    basic.clearScreen()
    if (Array_value_1 == Array_value_2) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        music.playTone(988, music.beat(BeatFraction.Whole))
        Player_2 += 1
        basic.showString("P2 Points:")
        basic.showNumber(Player_2)
    } else {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showString("P2 Points:")
        basic.showNumber(Player_2)
    }
    basic.clearScreen()
    if (Player_2 >= 5) {
        for (let index = 0; index <= 2; index++) {
            basic.showString("Player 2 WON!")
            music.playMelody("A F A E - F B - ", 120)
        }
        basic.clearScreen()
        game.gameOver()
    }
    basic.clearScreen()
})
let sprite: game.LedSprite = null
let Coin = 0
let Array_value_2 = ""
let Array_value_1 = ""
let Value_2 = 0
let Value_1 = 0
let Array_2: string[] = []
let Array_1: string[] = []
let Player_2 = 0
let Player_1 = 0
Player_1 = 0
Player_2 = 0
game.setScore(Player_1)
game.setScore(Player_2)
Array_1 = ["a", "b", "c", "d", "e", "f", "g"]
Array_2 = ["a", "b", "c", "d", "e", "f", "g"]
