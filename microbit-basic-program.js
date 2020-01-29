basic.forever(function () {

    if (iconHeart == false) {
        basic.showIcon(IconNames.Butterfly)
    } else {

        basic.showIcon(IconNames.Heart)
    }
    input.onButtonPressed(Button.A, function () {
        if (iconHeart == true) {
            iconHeart = false
        } else {
            iconHeart = true
        }

    })
})

let iconHeart: boolean = true


