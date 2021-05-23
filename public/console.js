/***********************************************************************************************************************
 /*********
 /*********
 /*********      Easter Egg
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********      DO NOT READ THE SOURCE CODE UNTIL YOU'VE PLAYED THE GAME!!!!
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********      Just F12 to play
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********      Please don't look at the code. That's why this big long text block is here
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********
 /*********************************************************************************************************************/

let cmdHistory = []

const start = () => {
    console.log(`You found a secret!`)
    console.log(
        `%cImportant: If you are going to continue, just note: viewing the source of this website is cheating`,
        'color:red;'
    )
    console.log(`Would you like to play a game? [Yes/No]`)
}

const Yes = () => {
    // console.log(`Let's play a game then. Are you ready?`) For the future
    console.log(
        `I like you. Sadly, I haven't came up with a good plot for this game, so it remains unfinished.`
    )
    return console.log(
        `If you've got a good idea for a plot, let me know on Twitter (@TrevorThalacker) `
    )
}

const No = () => {
    console.log(`The only winning move is not to play.`)
}

const RegisterCommands = (command, synonyms, hasSetter = false) => {
    const evaluate = (cmd, args) => {
        cmdHistory.push(cmd)
        return command.apply(this, args)
    }

    synonyms.split(',').forEach((cmd) => {
        if (window.hasOwnProperty(cmd)) {
            return ''
        } else {
            var obj = {
                get: function () {
                    return evaluate(cmd, arguments)
                },
                set: function () {},
            }
            if (hasSetter) {
                obj.set = function () {
                    return console.log(evaluate(cmd, arguments))
                }
            }
            Object.defineProperty(window, cmd, obj)
        }
    })
}

RegisterCommands(Yes, 'Yes,yes,y,Y', true)
RegisterCommands(No, 'No,no,n,N')
start()
