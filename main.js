'use strict'

/* 
OVERVIEW

*/

// Canvas and context creation

const canvas = document.getElementById("MyCanvas")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight 

/* Image Bank */
const characterSpritesRunningDown = []
characterSpritesRunningDown[0] = new Image()
characterSpritesRunningDown[1] = new Image()
characterSpritesRunningDown[2] = new Image()
characterSpritesRunningDown[3] = new Image()
characterSpritesRunningDown[4] = new Image()
characterSpritesRunningDown[5] = new Image()
characterSpritesRunningDown[0].src = 'Images/runningDown0.png'
characterSpritesRunningDown[1].src = 'Images/runningDown1.png'
characterSpritesRunningDown[2].src = 'Images/runningDown2.png'
characterSpritesRunningDown[3].src = 'Images/runningDown3.png'
characterSpritesRunningDown[4].src = 'Images/runningDown4.png'
characterSpritesRunningDown[5].src = 'Images/runningDown5.png'
const characterSpritesRunningUp = []
characterSpritesRunningUp[0] = new Image()
characterSpritesRunningUp[1] = new Image()
characterSpritesRunningUp[2] = new Image()
characterSpritesRunningUp[3] = new Image()
characterSpritesRunningUp[4] = new Image()
characterSpritesRunningUp[5] = new Image()
characterSpritesRunningUp[0].src = 'Images/runningUp0.png'
characterSpritesRunningUp[1].src = 'Images/runningUp1.png'
characterSpritesRunningUp[2].src = 'Images/runningUp2.png'
characterSpritesRunningUp[3].src = 'Images/runningUp3.png'
characterSpritesRunningUp[4].src = 'Images/runningUp4.png'
characterSpritesRunningUp[5].src = 'Images/runningUp5.png'
const characterSpritesRunningLeft = []
characterSpritesRunningLeft[0] = new Image()
characterSpritesRunningLeft[1] = new Image()
characterSpritesRunningLeft[2] = new Image()
characterSpritesRunningLeft[3] = new Image()
characterSpritesRunningLeft[4] = new Image()
characterSpritesRunningLeft[5] = new Image()
characterSpritesRunningLeft[0].src = 'Images/runningLeft0.png'
characterSpritesRunningLeft[1].src = 'Images/runningLeft1.png'
characterSpritesRunningLeft[2].src = 'Images/runningLeft2.png'
characterSpritesRunningLeft[3].src = 'Images/runningLeft3.png'
characterSpritesRunningLeft[4].src = 'Images/runningLeft4.png'
characterSpritesRunningLeft[5].src = 'Images/runningLeft5.png'
const characterSpritesRunningRight = []
characterSpritesRunningRight[0] = new Image()
characterSpritesRunningRight[1] = new Image()
characterSpritesRunningRight[2] = new Image()
characterSpritesRunningRight[3] = new Image()
characterSpritesRunningRight[4] = new Image()
characterSpritesRunningRight[5] = new Image()
characterSpritesRunningRight[0].src = 'Images/runningRight0.png'
characterSpritesRunningRight[1].src = 'Images/runningRight1.png'
characterSpritesRunningRight[2].src = 'Images/runningRight2.png'
characterSpritesRunningRight[3].src = 'Images/runningRight3.png'
characterSpritesRunningRight[4].src = 'Images/runningRight4.png'
characterSpritesRunningRight[5].src = 'Images/runningRight5.png'
const characterSpritesBaseForm = new Image()
characterSpritesBaseForm.src = 'Images/baseForm.png'

const imgMemojiCrying = new Image()
imgMemojiCrying.src = 'Images/imgMemojiCrying.png'
const imgMemojiAshamed = new Image()
imgMemojiAshamed.src = 'Images/imgMemojiAshamed.png'
const imgMemojiDisappointed = new Image()
imgMemojiDisappointed.src = 'Images/imgMemojiDisappointed.png'
const imgWomanRunning = new Image()
imgWomanRunning.src = 'Images/imgWomanRunning.png'
const imgHourglassDone = new Image()
imgHourglassDone.src = 'Images/imgHourglassDone.png'
const imgHourglassRunning = new Image()
imgHourglassRunning.src = 'Images/imgHourglassRunning.png'
const imgArrowRight = new Image()
imgArrowRight.src = 'Images/imgArrowRight.png'
const imgPartyEmoji = new Image()
imgPartyEmoji.src = 'Images/imgPartyEmoji.png'
const imgPooEmoji = new Image ()
imgPooEmoji.src = 'Images/imgPooEmoji.png'
const imgHidingEmoji = new Image()
imgHidingEmoji.src = 'Images/imgHidingEmoji.png'
const imgCrossedBrain = new Image ()
imgCrossedBrain.src = 'Images/imgCrossedBrain.png'
const imgQuestionCandy = new Image()
imgQuestionCandy.src = 'Images/imgQuestionCandy.png'

const imgWhereToGoMap = new Image ()
imgWhereToGoMap.src = 'Images/whereToGoMap.png'

let imgHeldObject = new Image ()
let imgFutureHeldObject = new Image()
let nameOfFutureHeldObject = 'nothing'
const imgEmptyCircle = new Image()
imgEmptyCircle.src = 'Images/imgEmptyCircle.png'
imgHeldObject = imgEmptyCircle
imgFutureHeldObject = imgEmptyCircle
const imgAnatomicalHeart = new Image ()
imgAnatomicalHeart.src = 'Images/imgAnatomicalHeart.png'
const imgBanana = new Image ()
imgBanana.src = 'Images/imgBanana.png'
const imgBrain = new Image()
imgBrain.src = 'Images/imgBrain.png'
const imgCocktail = new Image()
imgCocktail.src = 'Images/imgCocktail.png'
const imgCandy = new Image()
imgCandy.src = 'Images/imgCandy.png'
const imgRuby = new Image ()
imgRuby.src = 'Images/imgRuby.png'
const imgPushingFingerEmoji = new Image()
imgPushingFingerEmoji.src = 'Images/imgPushingFingerEmoji.png'

let plotImages = []
const imgZombie = new Image()
imgZombie.src = 'Images/imgZombie.png'
const imgSpeechBubble = new Image()
imgSpeechBubble.src = 'Images/imgSpeechBubble.png'
const imgPrayingEmoji = new Image ()
imgPrayingEmoji.src = 'Images/imgPrayingEmoji.png'
const imgNerdEmoji = new Image()
imgNerdEmoji.src = 'Images/imgNerdEmoji.png'
const imgEyeRollEmoji = new Image ()
imgEyeRollEmoji.src = 'Images/imgEyeRollEmoji.png'
const imgGhost = new Image ()
imgGhost.src = 'Images/imgGhost.png'
const imgKissEmoji = new Image()
imgKissEmoji.src = 'Images/imgKissEmoji.png'
const imgTrade = new Image ()
imgTrade.src = 'Images/imgTrade.png'
const imgMonocleEmoji = new Image()
imgMonocleEmoji.src = 'Images/imgMonocleEmoji.png'

const imgTransparent = new Image()
imgTransparent.src = 'Images/imgTransparent.png'

const musicOnButton = new Image()
musicOnButton.src = 'Images/musicOnButton.png'
const musicOffButton = new Image()
musicOffButton.src = 'Images/musicOffButton.png'
let musicButton = new Image()
musicButton = musicOnButton
let MUSIC_BUTTON_STATE = true
function switchMusicButton(){
    MUSIC_BUTTON_STATE = !MUSIC_BUTTON_STATE
    if (MUSIC_BUTTON_STATE === true){
        musicButton = musicOnButton
    }
    else {
        musicButton = musicOffButton
        stopAllMusic()
    }
}


const imgShiningBall1 = new Image()
imgShiningBall1.src = 'Images/shiningBall1.png'
const imgShiningBall2 = new Image()
imgShiningBall2.src = 'Images/shiningBall2.png'
const imgRedBall1 = new Image()
imgRedBall1.src = 'Images/redBall1.png'
const imgRedBall2 = new Image()
imgRedBall2 .src = 'Images/redBall2.png'

const imgCharacterGhost = new Image()
imgCharacterGhost.src = 'Images/characterGhost.png'
const imgCharacterGlasses = new Image()
imgCharacterGlasses.src = 'Images/characterGlasses.png'
const imgCharacterMonocole = new Image()
imgCharacterMonocole.src = 'Images/characterMonocle.png'
const imgCharacterZombie = new Image ()
imgCharacterZombie.src = 'Images/characterZombie.png'

const imgClock = new Image()
imgClock.src = 'Images/imgClock.png'

const map = new Image ()
map.src = 'Images/mainMap.png'

/* Music */
const musicAlarmClock = new Audio()
musicAlarmClock.src = 'Music/alarm-clock-short-6402.mp3'
musicAlarmClock.loop = true
const musicFurElise = new Audio()
musicFurElise.src = 'Music/fur-elise-music-box-70375.mp3'
musicFurElise.loop = true
const musicTicTacClock = new Audio()
musicTicTacClock.src = 'Music/small-clock-fast-tick-tock-48369.mp3'
musicTicTacClock.loop = true
const musicSadViolin = new Audio()
musicSadViolin.src = 'Music/sad-violin-165275.mp3'
musicSadViolin.loop = true
const musicHappyBirthday = new Audio()
musicHappyBirthday.src = 'Music/epic-happy-birthday-196126.mp3'
musicHappyBirthday.loop = true

const soundEffectCoin = new Audio()
soundEffectCoin.src = 'Music/coin-257878.mp3'
soundEffectCoin.loop = false
const soundEffectWrong = new Audio()
soundEffectWrong.src = 'Music/error-4-199275.mp3'
soundEffectWrong.loop = false

let currentMusic1 = ''
let currentMusic2 = ''
let documentInteractionTracker = 0
function stopAllMusic(){
    musicAlarmClock.pause()
    musicFurElise.pause()
    musicTicTacClock.pause() 
    musicSadViolin.pause()
    musicHappyBirthday.pause()
    currentMusic1 = ''
    currentMusic2 = ''
}

/* Event list */

let EVENT_LIST = {
    value: {},
    drawingBoard: {},
    addEvent: function (x, y, f = function(){}, sprite = function (){return imgTransparent}){
        let text = `x${x},y${y}`
        this.value[text] = f
        this.drawingBoard[text] = {}
        this.drawingBoard[text]['x'] = x
        this.drawingBoard[text]['y'] = y
        this.drawingBoard[text]['sprite'] = sprite
    },
    checkEvent: function (targetTileX, targetTileY, playerTileX, playerTileY){
        let text = `x${targetTileX},y${targetTileY}`
        if (this.value[text] === undefined){
            return false
        }
        if (Math.abs(targetTileX - playerTileX) <= 1 && Math.abs(targetTileY - playerTileY) <=1){
            return true
        }
         return false
    },
    removeEvent: function (x,y){
        let text = `x${x},y${y}`
        this.value[text] = undefined
        this.drawingBoard[text] = undefined
    },
    executeEvent: function(x,y){
        if (frameForAnimation.value !== 1){
            return;
        }
        let text = `x${x},y${y}`
        if (this.value[text] === undefined){
            return
        }
        this.value[text]()
    }
}

let f = function(){}

function intiatizeActiveEventList(){
    f = function(){
        STORY_PLOT.images = [[imgSpeechBubble, imgGhost],[imgKissEmoji, imgPrayingEmoji]]
        STORY_PLOT.imagesWin = [0, 0, imgTrade, imgKissEmoji, imgTrade, imgCandy]
        STORY_PLOT.imagesLoss = [0, 0, imgMemojiDisappointed]
        STORY_PLOT.winCondition = function(){
            return PLAYER.heldObject === 'nothing'
        }
        if (STORY_PLOT.winCondition){
            nameOfFutureHeldObject = 'candy'
            imgFutureHeldObject = imgCandy
            let list = [[135,18], [135,19], [145,21],[146,21]]
            for (let i = 0; i< list.length; i++){
                let x = list[i][0]
                let y = list[i][1]
                PASSIVE_EVENT_LIST.addEvent(x,y, function(){
                    CLOCK.value = 3
                    PASSIVE_EVENT_LIST.removeEvent(x,y)
                    soundEffectWrong.play()
                }, function(){
                    if ([0,1,2].includes(frameForAnimation.value)){
                        return imgRedBall1
                    }
                    else{
                        return imgRedBall2
                    }
                    })
            }
        }
        INPUT = false
        gameMode.set ('talk')
    }
    EVENT_LIST.addEvent(148, 14, f, function(){return imgCharacterGhost} )
    
    f = function(){
        STORY_PLOT.images = [[imgSpeechBubble, imgZombie],[imgBrain, imgPrayingEmoji]]
        STORY_PLOT.imagesWin = [0, 0, imgTrade, imgBrain, imgZombie, imgMemojiDisappointed, imgZombie, imgMemojiAshamed, imgZombie, imgMemojiAshamed, imgCrossedBrain,imgZombie, imgMemojiAshamed, imgZombie, imgQuestionCandy, imgEyeRollEmoji, imgTrade, imgCandy,imgTrade, imgBanana]
        STORY_PLOT.imagesLoss = [0, 0, imgMemojiDisappointed]
        STORY_PLOT.winCondition = function(){
            return PLAYER.heldObject === 'candy'
        }
        if (STORY_PLOT.winCondition){
            nameOfFutureHeldObject = 'banana'
            imgFutureHeldObject = imgBanana
        }
        INPUT = false
        gameMode.set ('talk')
    }
    EVENT_LIST.addEvent(94, 12, f, function(){return imgCharacterZombie} )

}


f = function(){
    STORY_PLOT.images = [[imgSpeechBubble, imgMonocleEmoji],[imgPooEmoji, imgHidingEmoji]]
    STORY_PLOT.imagesWin = [0, 0]
    STORY_PLOT.imagesLoss = [0, 0, imgMemojiAshamed, imgPooEmoji, imgMemojiAshamed, imgPooEmoji, imgMemojiAshamed, imgPooEmoji, imgMemojiAshamed, imgPooEmoji, imgMemojiAshamed, imgPooEmoji, imgMemojiAshamed, imgPooEmoji, imgMemojiAshamed, imgPooEmoji, imgMemojiAshamed]
    CLOCK.value = 15
    STORY_PLOT.winCondition = function(){
        return false
    }
    INPUT = false
    gameMode.set ('talk')
}
EVENT_LIST.addEvent(44, 84, f, function(){return imgCharacterMonocole} )

f = function(){
    STORY_PLOT.images = [[imgSpeechBubble, imgNerdEmoji],[imgBanana, imgPrayingEmoji]]
    STORY_PLOT.imagesWin = [0, 0, imgTrade, imgBanana, imgTrade, imgHourglassRunning]
    STORY_PLOT.imagesLoss = [0, 0, imgMemojiDisappointed]
    STORY_PLOT.winCondition = function(){
        return PLAYER.heldObject === 'banana'
    }
    if (STORY_PLOT.winCondition){
        nameOfFutureHeldObject = 'hourglassRunning'
        imgFutureHeldObject = imgHourglassRunning
    }
    INPUT = false
    gameMode.set ('talk')
}
EVENT_LIST.addEvent(58, 178, f, function(){return imgCharacterGlasses} )

intiatizeActiveEventList()

/* Event List : passive events */
let PASSIVE_EVENT_LIST = {
    value: {},
    drawingBoard: {},
    addEvent: function (x, y, f = function(){}, sprite = function (){return imgTransparent}){
        let text = `x${x},y${y}`
        this.value[text] = f
        this.drawingBoard[text] = {}
        this.drawingBoard[text]['x'] = x
        this.drawingBoard[text]['y'] = y
        this.drawingBoard[text]['sprite'] = sprite
    },
    checkEvent: function (playerTileX, playerTileY){
        let text = `x${playerTileX},y${playerTileY}`
        if (this.value[text] === undefined){
            return false
        }
        else {
            return true
        }
    },
    removeEvent: function (x,y){
        let text = `x${x},y${y}`
        this.value[text] = undefined
        this.drawingBoard[text] = undefined
    },
    executeEvent: function(x,y){
        let text = `x${x},y${y}`
        if (this.value[text] === undefined){
            return
        }
        this.value[text]()
    }
}

function initializePassiveEventList(){
    PASSIVE_EVENT_LIST.addEvent(88,192, function(){
        PLAYER.tilePosition.x = 150
        PLAYER.tilePosition.y = 150
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    for (let i = 142; i< 158; i++){
        PASSIVE_EVENT_LIST.addEvent(i,147, function(){
        PLAYER.tilePosition.x = 88
        PLAYER.tilePosition.y = 188
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
        })
    }

    PASSIVE_EVENT_LIST.addEvent(88,167, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(66,150, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(70,26, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(10,48, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(135,149, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(175,174, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(181,174, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(189,135, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(190,135, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(202,92, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(203,92, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(100, 8, function(){
        PLAYER.tilePosition.x = 41
        PLAYER.tilePosition.y = 88
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(41,89, function(){
        PLAYER.tilePosition.x = 88
        PLAYER.tilePosition.y = 158
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    PASSIVE_EVENT_LIST.addEvent(42,89, function(){
        PLAYER.tilePosition.x = 88
        PLAYER.tilePosition.y = 158
        PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
        PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
        currentInputSequence = GEN_empty()
    
    })

    let list = []
    let list2 = []
    list.push([88,182])
    list.push([88,172])
    list.push([93,172])
    list.push([97,172])
    list.push([102,172])
    list.push([108,172])
    list.push([108,161])
    list.push([108,151])
    list.push([102,151])
    list.push([93,151])
    list.push([97,151])
    list.push([87,151])
    
    for (let i = 0; i< list.length; i++){
        let x = list[i][0]
        let y = list[i][1]
        PASSIVE_EVENT_LIST.addEvent(x, y, function(){
            CLOCK.add(6)
            PASSIVE_EVENT_LIST.removeEvent(x, y)
            soundEffectCoin.play()
        }, function(){
            if ([0,1,2].includes(frameForAnimation.value)){
                return imgShiningBall1
            }
            else{
                return imgShiningBall2
            }
            })
    }

    list = []
    for (let i = 74; i<= 88; i++){
        for (let j = 32; j<=37; j++){
            list.push([i,j])
        }
    }

    for (let i = 105; i<= 114; i++){
        for (let j = 43; j<=49; j++){
            list.push([i,j])
        }
    }

    for (let i = 115; i<= 128; i++){
        for (let j = 43; j<=49; j++){
            list.push([i,j])
        }
    }

    for (let i = 0; i< list.length; i++){
        let x = list[i][0]
        let y = list[i][1]
        PASSIVE_EVENT_LIST.addEvent(x,y, function(){
            CLOCK.add(-2)
            PASSIVE_EVENT_LIST.removeEvent(x,y)
            soundEffectWrong.play()
        }, function(){
            if ([0,1,2].includes(frameForAnimation.value)){
                return imgRedBall1
            }
            else{
                return imgRedBall2
            }
            })
    }

    list = []
    for (let i = 73; i<= 73; i++){
        for (let j = 34; j<=39; j++){
            list.push([i,j])
        }
    }

    for (let i = 0; i< list.length; i++){
        let x = list[i][0]
        let y = list[i][1]
        PASSIVE_EVENT_LIST.addEvent(x,y, function(){
            if (CLOCK.value > 90){
                CLOCK.add(- 75)
            }
            else (CLOCK.value = 10)
            PASSIVE_EVENT_LIST.removeEvent(x,y)
            soundEffectWrong.play()
        }, function(){
            if ([0,1,2].includes(frameForAnimation.value)){
                return imgRedBall1
            }
            else{
                return imgRedBall2
            }
            })
    }

    list = []
    for (let i = 115; i<= 115; i++){
        for (let j = 43; j<=49; j++){
            list.push([i,j])
        }
    }
    for (let i = 0; i< list.length; i++){
        let x = list[i][0]
        let y = list[i][1]
        PASSIVE_EVENT_LIST.addEvent(x,y, function(){
            CLOCK.value = 5
            PASSIVE_EVENT_LIST.removeEvent(x,y)
            soundEffectWrong.play()
        }, function(){
            if ([0,1,2].includes(frameForAnimation.value)){
                return imgRedBall1
            }
            else{
                return imgRedBall2
            }
            })
    }

    list = []
    list2 = []
    for (let i = 130; i <=206; i++){
        for (let j = 178; j<= 190; j++){
            if (Math.random() <= 0.05){
                list.push([i,j])
            }
            if (Math.random() >= 0.975){
                list2.push([i,j])
            }
        }
    }
    for (let i = 188; i <=206; i++){
        for (let j = 138; j<= 177; j++){
            if (Math.random() <= 0.05){
                list.push([i,j])
            }
            if (Math.random() >= 0.975){
                list2.push([i,j])
            }
        }
    }
    for (let i = 213; i <=228; i++){
        for (let j = 113; j<= 136; j++){
            if (Math.random() <= 0.05){
                list.push([i,j])
            }
            if (Math.random() >= 0.975){
                list2.push([i,j])
            }
        }
    }
    for (let i = 185; i <=194; i++){
        for (let j = 56; j<= 99; j++){
            if (Math.random() <= 0.05){
                list.push([i,j])
            }
            if (Math.random() >= 0.975){
                list2.push([i,j])
            }
        }
    }
    for (let i = 0; i< list.length; i++){
        let x = list[i][0]
        let y = list[i][1]
        PASSIVE_EVENT_LIST.addEvent(x, y, function(){
            CLOCK.add(2)
            PASSIVE_EVENT_LIST.removeEvent(x, y)
            soundEffectCoin.play()
        }, function(){
            if ([0,1,2].includes(frameForAnimation.value)){
                return imgShiningBall1
            }
            else{
                return imgShiningBall2
            }
            })
    }

    list = []
    if (Math.random() <0.5){
        list.push([84,91])
    }
    else {
        list.push([91,91])
    }
    for (let i = 0; i< list.length; i++){
        let x = list[i][0]
        let y = list[i][1]
        PASSIVE_EVENT_LIST.addEvent(x, y, function(){
            CLOCK.add(30)
            PASSIVE_EVENT_LIST.removeEvent(x, y)
            soundEffectCoin.play()
        }, function(){
            if ([0,1,2].includes(frameForAnimation.value)){
                return imgShiningBall1
            }
            else{
                return imgShiningBall2
            }
            })
    }

    list = []
    for (let i = 90; i <= 97; i++){
        for (let j = 14; j<= 19; j++){
            if (Math.random() <= 0.5){
                list.push([i,j])
            }
        }
    }
    for (let i = 0; i< list.length; i++){
        let x = list[i][0]
        let y = list[i][1]
        PASSIVE_EVENT_LIST.addEvent(x, y, function(){
            CLOCK.add(2)
            PASSIVE_EVENT_LIST.removeEvent(x, y)
            soundEffectCoin.play()
        }, function(){
            if ([0,1,2].includes(frameForAnimation.value)){
                return imgShiningBall1
            }
            else{
                return imgShiningBall2
            }
            })
    }
    for (let i = 0; i< list2.length; i++){
        let x = list2[i][0]
        let y = list2[i][1]
        PASSIVE_EVENT_LIST.addEvent(x, y, function(){
            CLOCK.add(-2)
            PASSIVE_EVENT_LIST.removeEvent(x, y)
            soundEffectWrong.play()
        }, function(){
            if ([0,1,2].includes(frameForAnimation.value)){
                return imgRedBall1
            }
            else{
                return imgRedBall2
            }
            })
    }

    list = []

    for (let i = 132; i <=162; i++){
        for (let j = 40; j<= 45; j++){
            if (Math.random() <= 0.5){
                list.push([i,j])
            }
        }
    }
    for (let i = 0; i< list.length; i++){
        let x = list[i][0]
        let y = list[i][1]
        PASSIVE_EVENT_LIST.addEvent(x, y, function(){
            CLOCK.add(2)
            PASSIVE_EVENT_LIST.removeEvent(x, y)
            soundEffectCoin.play()
        }, function(){
            if ([0,1,2].includes(frameForAnimation.value)){
                return imgShiningBall1
            }
            else{
                return imgShiningBall2
            }
            })
    }

    list = []
    for (let i = 19; i <=21; i++){
        for (let j = 10; j<= 11; j++){
                list.push([i,j])
        }
    }
    for (let i = 0; i< list.length; i++){
        let x = list[i][0]
        let y = list[i][1]
        PASSIVE_EVENT_LIST.addEvent(x, y, function(){
            INPUT = false
            gameMode.set('gameOverWin')
        })
    }

    
}
initializePassiveEventList()



/* Game State Data */



let touchPosition = {
    active: false,
    x:-1,
    y: -1,
    initialize: function(){
        touchPosition.x = -1
        touchePosition.y = -1
    }
}
let gameMode = {
    value: '',
    set: function(gameModeName){
        if (gameModeName === 'walk'){
            this.value = 'walk'
        }
        else if (gameModeName === 'talk'){
            this.value = 'talk'
        }
        else if (gameModeName === 'intro'){
            this.value = 'intro'
        }
        else if (gameModeName === 'gameOverWin'){
            this.value = 'gameOverWin'
        }
        else if (gameModeName === 'gameOverLoss'){
            this.value = 'gameOverLoss'
        }
        else if (gameModeName === 'titleScreen'){
            this.value = 'titleScreen'
        }
        else if (gameModeName === 'titleScreen2'){
            this.value = 'titleScreen2'
        }
        else {gameMode.value = 'undefined game mode'}
    }
}
let TIME_STAMP = Date.now()
const FRAMES_PER_SECONDS = 60
const REFRESH_INTERVAL = 1000 / FRAMES_PER_SECONDS
let INPUT = false
let IS_LOADED = false
const STARPOSITION = {
    x: 88,
    y: 188
}
let PLAYER = {
    tilePosition: {
        x: STARPOSITION.x,
        y: STARPOSITION.y
    },
    screenPosition:{
        x: Math.floor(canvas.width /32) /2 * 32,
        y: Math.round(Math.floor(canvas.height/32) /2 * 32 * 0.8)
    },
    mapPixelPosition:{
        x: STARPOSITION.x*32,
        y: STARPOSITION.y*32
    },
    sprite: characterSpritesBaseForm, 
    direction: 'neutral',
    heldObject: 'nothing'
}
let getInputSequence = GEN_getInputSequence(PLAYER.screenPosition.x, PLAYER.screenPosition.y, PLAYER.tilePosition.x,PLAYER.tilePosition.y)
let currentInputSequence = getInputSequence
let NEW_INPUT_SEQUENCE = false
function actualizeInputSequence (){
    if (NEW_INPUT_SEQUENCE === true && frameForAnimation.value === 0){
        currentInputSequence = getInputSequence
        NEW_INPUT_SEQUENCE = false
    }  
}

let frameForAnimation ={
    value: 0,
    update: function(){
        if (frameForAnimation.value === 5){
            frameForAnimation.value = 0
        }
        else {
            frameForAnimation.value++
        }
    },
    initialize: function(){
        frameForAnimation.value = -1
    }
}

let CLOCK = {
    value: 30,
    getValueStringFormat: function(){
        let minutes = Math.floor(CLOCK.value/60)
        minutes = (minutes <= 99)? minutes: 99;
        let minutesText = (minutes <= 9)? '0' + `${minutes}`: `${minutes}`;
        let seconds = CLOCK.value - minutes * 60
        let secondsText = (seconds<= 9)? '0' + `${seconds.toFixed(0)}`: `${seconds.toFixed(0)}`;
        if (secondsText.length === 1){secondsText = '0'+ secondsText}
        return minutesText + ":" + secondsText
    },
    previousTimeTracker: Date.now(),
    initialize: function(){
        CLOCK.value = function () {
            let n = 30
            return n.toFixed(2)
        }()
        this.hasStarted = false
        CLOCK.previousTimeTracker = Date.now()
    },
    add: function(number){
        CLOCK.value = CLOCK.value + number
    },
    getUpdatedTimer: function(){
        if (!this.hasStarted){
            return '00:30'
        }
        let n = 0.001 * (Date.now() - CLOCK.previousTimeTracker)
        CLOCK.value = CLOCK.value - n
        if (CLOCK.value <= 0){
            return '00:00'
        }
        CLOCK.previousTimeTracker = Date.now()
        return CLOCK.getValueStringFormat()
    },
    hasStarted: false,
    startTimer: function(){
        this.hasStarted = true
    }
}

let TARGET_TILE = {
    x:0,
    y:0,
    updateTargetTile: function (x,y){
        TARGET_TILE.x = x
        TARGET_TILE.y = y
    }
}

let getRandomColorAtTimedInterval = GEN_randomColorTimeInterval(200)
let alternatingBoolean = GEN_alternatingBoolean()
let getSequencialDegreesInRadian = GEN_getConsecutiveDegreeInRadian(60)
let getRainbowColors = GEN_rainbowColors()
let titleScreenAngle = 0
let titleScreenColor = ''

/* Event listeners :
- on 'resize' : resize the canvas
- on 'touchstart' : get the relative x position and the y position of the finger touch
*/

function resize() {
    canvas.width = window.innerWidth 
    canvas.height = window.innerHeight
}
document.addEventListener('resize', resize)
document.addEventListener('load', function(){
    IS_LOADED = true
    console.log("All ressources sucessfully loaded")
})

document.addEventListener('touchstart', function (e) {
    e.preventDefault();
}, {passive: false})
document.addEventListener('touchstart', function(e){
    touchPosition.active = true
    touchPosition.x = e.touches[0].clientX
    touchPosition.y = e.touches[0].clientY

    documentInteractionTracker++

    if (touchPosition.y < canvas.height * 0.8){
        INPUT = true
    }
    
    if (touchPosition.y >= canvas.height * 0.8){
        if (touchPosition.x >= canvas.width * 0.75 && touchPosition.x <= canvas.width * 0.95 && touchPosition.y >= canvas.height * 0.90 - canvas.width * 0.1 && touchPosition.y <= canvas.height * 0.9 + canvas.width*0.2 ){
            switchMusicButton()
        }
        return;
    }

    if (gameMode.value === "walk"){
        getInputSequence = GEN_getInputSequence(touchPosition.x, touchPosition.y, PLAYER.tilePosition.x, PLAYER.tilePosition.y)
        NEW_INPUT_SEQUENCE = true
    }
    
})
document.addEventListener("touchend", function(e){
    touchPosition.active = false
})

/* Game loop function */

function gameLoop(){
    if (Date.now() - TIME_STAMP >= REFRESH_INTERVAL){
        TIME_STAMP = Date.now()
        main();
        frameForAnimation.update()
    }
    window.requestAnimationFrame(gameLoop) 
}

function main(){
    switch (gameMode.value){
        case 'titleScreen':
            mainTitleScreen()
            break;
        case 'titleScreen2':
            mainTitleScreen2()
            break;
        case 'walk':
            mainWalk()
            break;
        case 'talk':
            mainTalk()
            break;
        case 'intro':
            mainIntro()
            break;
        case 'gameOverWin':
            mainGameOverWin()
            break;
        case 'gameOverLoss':
            mainGameOverLoss()
            break;
        default:
            console.log("variable gameMode.value was poorly defined")
    }

    if (gameMode.value !== 'titleScreen' && gameMode.value !== 'titleScreen2'){
        drawClock()
        drawMusicButton()
        drawCarriedObject()
    }

    if (gameMode.value !== 'titleScreen' && gameMode.value !== 'titleScreen2'){
        updateClockMusic()
        checkIfLostOnTime()
    }
    
}

function mainWalk(){

    updatePlayerTilePosition()
    drawMap(PLAYER.mapPixelPosition.x, PLAYER.mapPixelPosition.y, map)
    drawTargetTile()

    drawEventSprites()

    if (EVENT_LIST.checkEvent(TARGET_TILE.x, TARGET_TILE.y, PLAYER.tilePosition.x, PLAYER.tilePosition.y)){
        EVENT_LIST.executeEvent(TARGET_TILE.x, TARGET_TILE.y)
    }
    if (PASSIVE_EVENT_LIST.checkEvent(PLAYER.tilePosition.x, PLAYER.tilePosition.y)){
        PASSIVE_EVENT_LIST.executeEvent(PLAYER.tilePosition.x, PLAYER.tilePosition.y)
    }

    updateCharacterSprite()
    drawCharacter()

    actualizeInputSequence()

    if (currentMusic1 !== 'musicFurElise' && documentInteractionTracker >=2 && MUSIC_BUTTON_STATE){
        musicFurElise.play()
        currentMusic1 = 'musicFurElise'
    }
}

function updatePlayerTilePosition(){

    switch(currentInputSequence.next().value){
        case 'left':
            PLAYER.direction = "lookingLeft"
            if (checkCollision(collisionMap.width, PLAYER.tilePosition.x, PLAYER.tilePosition.y, 'left')){
                currentInputSequence = GEN_easingInputSequence('left')
                return;
            }
            if (frameForAnimation.value === 0){
                PLAYER.mapPixelPosition.x = PLAYER.mapPixelPosition.x - 7
            }
            else {
                PLAYER.mapPixelPosition.x = PLAYER.mapPixelPosition.x - 5
            }
            if (frameForAnimation.value === 5){
                PLAYER.tilePosition.x--
                PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
                frameForAnimation.initialize()
            }        
            break;
        case 'right':
            PLAYER.direction = "lookingRight"
            if (checkCollision(collisionMap.width, PLAYER.tilePosition.x, PLAYER.tilePosition.y, 'right')){
                currentInputSequence = GEN_easingInputSequence('right')
                return;
            }
            if (frameForAnimation.value === 0){
                PLAYER.mapPixelPosition.x = PLAYER.mapPixelPosition.x + 7
            }
            else {
                PLAYER.mapPixelPosition.x = PLAYER.mapPixelPosition.x + 5
            }
            if (frameForAnimation.value === 5){
                PLAYER.tilePosition.x++
                PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
                frameForAnimation.initialize()
            }
            break;
        case 'up':
            PLAYER.direction = "lookingUp"
            if (checkCollision(collisionMap.width, PLAYER.tilePosition.x, PLAYER.tilePosition.y, 'up')){
                currentInputSequence = GEN_easingInputSequence('up')
                return;
            }
            if (frameForAnimation.value === 0){
                PLAYER.mapPixelPosition.y = PLAYER.mapPixelPosition.y - 7
            }
            else {
                PLAYER.mapPixelPosition.y = PLAYER.mapPixelPosition.y - 5
            }
            if (frameForAnimation.value === 5){
                PLAYER.tilePosition.y--
                PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
                frameForAnimation.initialize()
            }
            break;
        case 'down':
            PLAYER.direction = "lookingDown"
            if (checkCollision(collisionMap.width, PLAYER.tilePosition.x, PLAYER.tilePosition.y, 'down')){
                currentInputSequence = GEN_easingInputSequence('down')
                return;
            }
            if (frameForAnimation.value === 0){
                PLAYER.mapPixelPosition.y = PLAYER.mapPixelPosition.y + 7
            }
            else {
                PLAYER.mapPixelPosition.y = PLAYER.mapPixelPosition.y + 5
            }
            if (frameForAnimation.value === 5){
                PLAYER.tilePosition.y++
                PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
                frameForAnimation.initialize()
            }
            break;
        default:
            PLAYER.direction = "neutral"
            PLAYER.mapPixelPosition.x = PLAYER.tilePosition.x * 32
            PLAYER.mapPixelPosition.y = PLAYER.tilePosition.y * 32
            break;
    }
}

function drawMap (playerXMapPixelPosition, playerYMapPixelPosition, map, playerScreenPositionXPixel = PLAYER.screenPosition.x, playerScreenPositionYPixel = PLAYER.screenPosition.y){

    ctx.fillStyle = 'black'
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.drawImage(map, -playerXMapPixelPosition + playerScreenPositionXPixel, - playerYMapPixelPosition + playerScreenPositionYPixel)

}

function updateCharacterSprite(){
    let n = (frameForAnimation.value === -1)? 0: frameForAnimation.value;
    switch (PLAYER.direction){
        case 'lookingUp':
            PLAYER.sprite = characterSpritesRunningUp[n]
            break;
        case 'lookingDown':
            PLAYER.sprite = characterSpritesRunningDown[n]
            break;
        case 'lookingLeft' :
            PLAYER.sprite = characterSpritesRunningLeft[n]
            break;
        case 'lookingRight':
            PLAYER.sprite = characterSpritesRunningRight[n]
            break;
        default:
            PLAYER.sprite = characterSpritesBaseForm
            break;

    }
}

function drawCharacter(){
    ctx.drawImage(PLAYER.sprite, PLAYER.screenPosition.x, PLAYER.screenPosition.y - 14)
}

function* GEN_getInputSequence(screenTouchX, screenTouchY, playerXTilePosition, playerYTilePosition){
    function calculateTileDiff (distance){
        let d = distance
        if (d >= 0){
            if (d <= 16){
                return 0
            }
            else {
                return Math.ceil((d - 16) / 32)
            }
        }
        else if (d< 0){
            d = -1 * d
            if (d <= 16){
                return 0
            }
            else {
                return -1 * Math.ceil((d - 16) / 32)
            }
        }  
    }

    const targetTile = {
        x: playerXTilePosition + calculateTileDiff(screenTouchX - (PLAYER.screenPosition.x + 16)), 
        y: playerYTilePosition + calculateTileDiff(screenTouchY - (PLAYER.screenPosition.y + 16))
    }

    TARGET_TILE.updateTargetTile(targetTile.x, targetTile.y)

    const tileDifference = {
        xDiff: targetTile.x - playerXTilePosition,
        yDiff: targetTile.y - playerYTilePosition
    }
    const inputSequence = []
    const xDirection = (tileDifference.xDiff >= 0)? 'right': 'left';
    const yDirection = (tileDifference.yDiff >= 0)? 'down': 'up';
    
    let i = Math.abs(tileDifference.xDiff)
    let j = Math.abs(tileDifference.yDiff)
    if (alternatingBoolean.next().value){
        while(i > 0 || j> 0){
            if (i>0){
                for (let k = 0; k<6; k++){
                    inputSequence.push(xDirection)
                }
                i--
            }
            else {
                for (let k = 0; k<6; k++){
                    inputSequence.push(yDirection)
                }
                j--
            }
        }
    }
    else{
        while(i > 0 || j> 0){
            if (j>0){
                for (let k = 0; k<6; k++){
                    inputSequence.push(yDirection)
                }
                j--
            }
            else {
                for (let k = 0; k<6; k++){
                    inputSequence.push(xDirection)
                }
                i--
            }
        }
    }
    

    for (let i = 0; i<inputSequence.length; i++){
        yield inputSequence[i]
    }
    while (true){
        yield ""
    }
}

function* GEN_easingInputSequence(direction){
    yield "direction"
    yield "direction"
    yield "direction"
    yield "direction"
    yield "direction"
    while (true){
        yield ""
    }
}

function drawTargetTile()
{
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 3
    // -playerXMapPixelPosition + playerScreenPositionXPixel
    let x = (- PLAYER.tilePosition.x + TARGET_TILE.x)*32 + PLAYER.screenPosition.x
    let y = (- PLAYER.tilePosition.y + TARGET_TILE.y) *32 + PLAYER.screenPosition.y
    ctx.beginPath()
    ctx.arc(x + 16, y +16, Math.sqrt(Math.pow(16,2) + Math.pow(16,2)), 0, 2* Math.PI)
    ctx.stroke()
    // previously a square : ctx.strokeRect(x, y, 32, 32)
}

function drawEventSprites(){
    for (let p in EVENT_LIST.drawingBoard){
        if (EVENT_LIST.drawingBoard[p] !== undefined){
            let x = - PLAYER.mapPixelPosition.x + (EVENT_LIST.drawingBoard[p]["x"])*32 + PLAYER.screenPosition.x
            let y = - PLAYER.mapPixelPosition.y + (EVENT_LIST.drawingBoard[p]["y"])*32 + PLAYER.screenPosition.y
            ctx.drawImage(EVENT_LIST.drawingBoard[p]["sprite"](), x,y)
        }    
    }
    for (let p in PASSIVE_EVENT_LIST.drawingBoard){
        if (PASSIVE_EVENT_LIST.drawingBoard[p] !== undefined){
            let x = - PLAYER.mapPixelPosition.x + (PASSIVE_EVENT_LIST.drawingBoard[p]["x"])*32 + PLAYER.screenPosition.x
            let y = - PLAYER.mapPixelPosition.y + (PASSIVE_EVENT_LIST.drawingBoard[p]["y"])*32 + PLAYER.screenPosition.y
            ctx.drawImage(PASSIVE_EVENT_LIST.drawingBoard[p]["sprite"](), x,y)
        }
        
    }
}

function checkCollision(collisionMapWidth, x, y, pressedKey){
    
    function getCoordinateValue (x,y, width){
        return y*width  + x
    }
    switch (pressedKey){
        case "down":
            if (collisionMap["data"][getCoordinateValue(x,y+1, collisionMapWidth)]> 0){
                return true;
            }
            else {return false}
            break;
        case "up":
            if (collisionMap["data"][getCoordinateValue(x,y-1, collisionMapWidth)]> 0){
                return true;
            }
            else {return false}
            break;
        case "left":
            if (collisionMap["data"][getCoordinateValue(x-1,y, collisionMapWidth)]> 0){
                 return true;
            }
            else {return false}
            break;
        case "right":
            if (collisionMap["data"][getCoordinateValue(x+1,y, collisionMapWidth)]> 0){
                return true;
            }
            else {return false}
            break;
        default:
            return false
    }
}

// MENU

let STORY_PLOT = {
    plotTracker: 0,
    reset: function(){
        STORY_PLOT.plotTracker = 0
    },
    images: [],
    imagesWin: [],
    imagesLoss:[],
    winCondition: function(){return false}
}


function mainTalk(){

    ctx.fillStyle = 'white'
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.strokeWidth = 3
    ctx.strokeStyle = 'blue'
    ctx.strokeRect (3, 3, canvas.width -6, canvas.height-6)
    ctx.strokeStyle = 'green'
    ctx.strokeRect (9, 9, canvas.width -18, canvas.height-18)
    if (STORY_PLOT.plotTracker < STORY_PLOT.images.length){
        let img = STORY_PLOT.images[STORY_PLOT.plotTracker][0]
        let size = canvas.height * 0.8 * 1/3
        let centerPosition ={
            x: canvas.width * 0.5 - size* 0.5,
            y: canvas.height* 0.8/3 - size* 0.5
        }
        ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size )

        img = STORY_PLOT.images[STORY_PLOT.plotTracker][1]
        size = canvas.height * 0.8 * 1/3
        centerPosition ={
            x: canvas.width * 0.5 - size* 0.5,
            y: canvas.height* 0.8* 2/3 - size* 0.5
        }
        ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size )
    }
    else {
        if (STORY_PLOT.winCondition() === true && STORY_PLOT.plotTracker < STORY_PLOT.imagesWin.length){
            let img = STORY_PLOT.imagesWin[STORY_PLOT.plotTracker]
            let size = canvas.width * 0.8
            let centerPosition ={
                x: canvas.width * 0.5 - size* 0.5,
                y: canvas.height* 0.4 - size* 0.5
            }
            ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size)
        }
        else if (STORY_PLOT.plotTracker < STORY_PLOT.imagesLoss.length){
            let img = STORY_PLOT.imagesLoss[STORY_PLOT.plotTracker]
            let size = canvas.width * 0.8
            let centerPosition ={
                x: canvas.width * 0.5 - size* 0.5,
                y: canvas.height* 0.4 - size* 0.5
            }
            ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size)
        }
        else {
            gameMode.set('walk')
            if (STORY_PLOT.winCondition() === true){
                EVENT_LIST.removeEvent(TARGET_TILE.x, TARGET_TILE.y)
                imgHeldObject = imgFutureHeldObject
                PLAYER.heldObject = nameOfFutureHeldObject
                soundEffectCoin.play()
            }
            else {
                soundEffectWrong.play()
            }
            PLAYER.tilePosition.y = TARGET_TILE.y +1
            PLAYER.mapPixelPosition.y = TARGET_TILE.y*32 +32
            PLAYER.tilePosition.x = TARGET_TILE.x
            PLAYER.mapPixelPosition.x = TARGET_TILE.x*32
            TARGET_TILE.x = 1000
            TARGET_TILE.y = 1000
            
            currentInputSequence = GEN_empty()
            STORY_PLOT.reset()

        }
    }

    if (INPUT){
        STORY_PLOT.plotTracker++
        INPUT = false 
    }

}

function* GEN_empty(){
    while (true){
        yield ""
    }
}

function* GEN_alternatingBoolean(){
    while (true){
        yield true;
        yield false;
    }
}

function drawClock(){
    let text = CLOCK.getUpdatedTimer()
    const FONT_SIZE = Math.floor(canvas.height/15)
    const TEXT_WIDTH = ctx.measureText(text).width
    ctx.fillStyle = "white"
    ctx.strokeStyle = "black"
    ctx.fillRect(canvas.width * 0.05, canvas.height * 0.85, canvas.width * 0.4, canvas.height * 0.1)
    ctx.strokeRect(canvas.width * 0.05, canvas.height * 0.85, canvas.width * 0.4, canvas.height * 0.1)

    let color = (CLOCK.value < 10)? 'red': `green`;
    ctx.font = `${FONT_SIZE}px fantasy`
    ctx.textBaseline = 'middle'
    ctx.fillStyle = color
    ctx.fillText(text, canvas.width * 0.25 - TEXT_WIDTH/2, canvas.height * 0.90)
    
}

function updateClockMusic(){
    if (CLOCK.value <= 0){
        musicTicTacClock.pause() 
        musicAlarmClock.pause()
        musicFurElise.pause()
    }
    else if (CLOCK.value < 8){
        if (currentMusic2 !== 'musicAlarmClock' && MUSIC_BUTTON_STATE){
            musicTicTacClock.pause() 
            musicAlarmClock.play()
            currentMusic2 = 'musicAlarmClock'
        }
    }
    else {
        if (currentMusic2 !== 'musicTicTacClock' && documentInteractionTracker >=2 && MUSIC_BUTTON_STATE){ 
            musicAlarmClock.pause()
            musicTicTacClock.play()
            currentMusic2 = 'musicTicTacClock'
        }
    }


}

function checkIfLostOnTime(){
    if (CLOCK.value <= 0){
        gameMode.set('gameOverLoss')
        INPUT = false
    }

}

function drawMusicButton(){
    ctx.drawImage(musicButton, 0, 0, musicButton.width, musicButton.height, canvas.width * 0.75, canvas.height * 0.90 - canvas.width * 0.1, canvas.width * 0.2,canvas.width * 0.2)
}

function drawCarriedObject(){
    ctx.drawImage(imgHeldObject, 0, 0, imgHeldObject.width, imgHeldObject.height, canvas.width * 0.52, canvas.height * 0.90 - canvas.width * 0.1, canvas.width * 0.2,canvas.width * 0.2)
    if (gameMode.value === 'talk'){
        ctx.strokeStyle = STORY_PLOT.winCondition()? 'green':'red';
        ctx.strokeRect(canvas.width * 0.52, canvas.height * 0.90 - canvas.width * 0.1, canvas.width * 0.2,canvas.width * 0.2)
    }
    
}

function mainIntro(){
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.strokeWidth = 3
    ctx.strokeStyle = 'red'
    ctx.strokeRect (3, 3, canvas.width -6, canvas.height-6)
    ctx.strokeStyle = 'orange'
    ctx.strokeRect (9, 9, canvas.width -18, canvas.height-18)
    let img = imgWomanRunning
    let size = canvas.height * 0.8 * 1/4
    let centerPosition ={
        x: canvas.width * 0.33- size* 0.5,
        y: canvas.height* 0.8 * 1/4 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size )

    img = imgWhereToGoMap
    size = canvas.height * 0.8 * 1/4
    centerPosition ={
        x: canvas.width * 0.70 - size* 0.5,
        y: canvas.height* 0.8 * 1/4 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size )

    img = imgHourglassRunning
    size = canvas.height * 0.8 * 1/4
    centerPosition ={
        x: canvas.width * 1/4 - size* 0.5,
        y: canvas.height* 0.8 * 2/4 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size )

    img = imgArrowRight
    size = canvas.height * 0.8 * 1/8
    centerPosition ={
        x: canvas.width * 2/4 - size* 0.5,
        y: canvas.height* 0.8 * 2/4 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size)

    img = imgPartyEmoji
    size = canvas.height * 0.8 * 1/4
    centerPosition ={
        x: canvas.width * 3/4 - size* 0.5,
        y: canvas.height* 0.8* 2/4 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size)

    img = imgHourglassDone
    size = canvas.height * 0.8 * 1/4
    centerPosition ={
        x: canvas.width * 1/4 - size* 0.5,
        y: canvas.height* 0.8 * 3/4 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size )

    img = imgArrowRight
    size = canvas.height * 0.8 * 1/8
    centerPosition ={
        x: canvas.width * 2/4 - size* 0.5,
        y: canvas.height* 0.8 * 3/4 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size)

    img = imgMemojiCrying
    size = canvas.height * 0.8 * 1/4
    centerPosition ={
        x: canvas.width * 3/4 - size* 0.5,
        y: canvas.height* 0.8* 3/4 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size)

    if (INPUT){
        gameMode.set('walk')
        INPUT = false
        CLOCK.initialize()
        CLOCK.startTimer()
        if (PLAYER.heldObject === 'hourglassRunning'){
            CLOCK.value = 60*5
        }
        STORY_PLOT.reset()
    }
}

function mainTitleScreen (){
    let color = getRainbowColors.next().value
    ctx.fillStyle = color
    ctx.fillRect(0,0, canvas.width, canvas.height) 
    let size = canvas.width
    let centerPosition ={
        x: canvas.width * 0.5 - size * 0.5,
        y: canvas.height* 0.5  - size * 0.5
    }
    ctx.translate(canvas.width/2,canvas.height/2);
    let angle = getSequencialDegreesInRadian.next().value
    ctx.rotate(angle)
    ctx.drawImage(imgClock, 0, 0, imgClock.width, imgClock.height, centerPosition.x - canvas.width/2, centerPosition.y - canvas.height/2, size, size)
    ctx.rotate(-angle)
    ctx.translate(-canvas.width/2,-canvas.height/2)
    
    if (INPUT){
        gameMode.set('titleScreen2')
        titleScreenAngle = angle
        titleScreenColor = color
        INPUT = false
    }
}

function mainTitleScreen2 (){
    ctx.fillStyle = titleScreenColor
    ctx.fillRect(0,0, canvas.width, canvas.height) 
    let size = canvas.width
    let centerPosition ={
        x: canvas.width * 0.5 - size * 0.5,
        y: canvas.height* 0.5  - size * 0.5
    }
    ctx.translate(canvas.width/2,canvas.height/2);
    let angle = titleScreenAngle
    ctx.rotate(angle)
    ctx.drawImage(imgClock, 0, 0, imgClock.width, imgClock.height, centerPosition.x - canvas.width/2, centerPosition.y - canvas.height/2, size, size)
    ctx.rotate(-angle)
    ctx.translate(-canvas.width/2,-canvas.height/2)
    
    if (INPUT){
        gameMode.set('intro')
        INPUT = false
        CLOCK.initialize()
    }

}

function* GEN_getConsecutiveDegreeInRadian(n, timeInterval = 500){
    let r = 0
    const increment = 2* Math.PI / n
    let timeStamp1 = Date.now()
    
    while(true){
        if (Date.now() - timeStamp1 > timeInterval){
            if (r > 2* Math.PI ){
                r = 0
            }
            yield r;
            timeStamp1 = Date.now()
            r = r + increment
        }
    }  
}

function mainGameOverWin(){
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    ctx.fillStyle = getRandomColorAtTimedInterval.next().value
    ctx.fillRect(0,0, canvas.width, canvas.height * 0.2)
    ctx.fillStyle = getRandomColorAtTimedInterval.next().value
    ctx.fillRect(0, canvas.height* 0.2, canvas.width, canvas.height * 0.4)
    ctx.fillStyle = getRandomColorAtTimedInterval.next().value
    ctx.fillRect(0, canvas.height* 0.4, canvas.width, canvas.height * 0.6)
    ctx.fillStyle = getRandomColorAtTimedInterval.next().value
    ctx.fillRect(0, canvas.height* 0.6, canvas.width, canvas.height * 0.8)
    ctx.fillStyle = getRandomColorAtTimedInterval.next().value
    ctx.fillRect(0, canvas.height* 0.8, canvas.width, canvas.height * 1)

    let img = imgPartyEmoji
    let size = canvas.height * 0.8 * 0.5
    let centerPosition ={
        x: canvas.width * 0.5 - size* 0.5,
        y: canvas.height* 0.8 * 0.5 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size )

    CLOCK.value = 99 * 60

    if (currentMusic1 !== 'musicHappyBirthday' && MUSIC_BUTTON_STATE){
        musicTicTacClock.pause() 
        musicAlarmClock.pause()
        musicFurElise.pause()
        musicSadViolin.pause()
        musicHappyBirthday.play()
        currentMusic1 = 'musicHappyBirthday'
        currentMusic2 = ''
    }
/*
    if (INPUT){
        gameMode.set('titleScreen')
        INPUT = false
        CLOCK.initialize()
        documentInteractionTracker = 0
        PLAYER.heldObject = 'nothing'
        PLAYER.tilePosition.x = 88
        PLAYER.tilePosition.y = 188
        PLAYER.mapPixelPosition.x = 88 * 32
        PLAYER.mapPixelPosition.y = 188 * 32
        frameForAnimation.value = 0
        initializePassiveEventList()
        stopAllMusic()
    }
*/

}

function* GEN_randomColorTimeInterval(timeInterval){
    let timeStamp1 = Date.now()
    const colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Beige', 'Blue', 'Chartreuse', 'Coral', 'Cornsilk', 'Cyan', 'DarkGoldenRod', 'FireBrick', 'Fuchsia', 'Gold', 'GreenYellow', 'HotPink', 'LawnGreen', 'LightGoldenRodYellow', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'Lime', 'Magenta', 'MediumBlue', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MistyRose', 'OrangeRed', 'Red', 'RoyalBlue', 'SandyBrown', 'Salmon', 'SpringGreen', 'Tomato', 'Yellow', 'YellowGreen']

    while(true)
    {
        if (Date.now() - timeStamp1 > timeInterval){
            yield colors[Math.floor(colors.length * Math.random())]
            timeStamp1 = Date.now()
        }
    }
}

function* GEN_rainbowColors(){
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    let i = 0
    while(true){
        yield colors[i]
        i++
        if (i === colors.length){i = 0}
    }
}

function mainGameOverLoss(){
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.strokeWidth = 3
    ctx.strokeStyle = 'white'
    ctx.strokeRect (3, 3, canvas.width -6, canvas.height-6)
    ctx.strokeStyle = 'white'
    ctx.strokeRect (9, 9, canvas.width -18, canvas.height-18)
    let img = imgMemojiCrying
    let size = canvas.height * 0.8 * 0.5
    let centerPosition ={
        x: canvas.width * 0.5 - size* 0.5,
        y: canvas.height* 0.8 * 0.5 - size* 0.5
    }
    ctx.drawImage(img, 0,0, img.width, img.height, centerPosition.x, centerPosition.y, size, size )

    if (currentMusic1 !== 'musicSadViolin' && MUSIC_BUTTON_STATE){
        musicTicTacClock.pause() 
        musicAlarmClock.pause()
        musicFurElise.pause()
        musicSadViolin.play()
        currentMusic1 = 'musicSadViolin'
        currentMusic2 = ''
    }

    if (INPUT){
        gameMode.set('titleScreen')
        INPUT = false
        CLOCK.initialize()
        documentInteractionTracker = 0
        PLAYER.tilePosition.x = 88
        PLAYER.tilePosition.y = 188
        PLAYER.mapPixelPosition.x = 88 * 32
        PLAYER.mapPixelPosition.y = 188 * 32
        frameForAnimation.value = 0
        initializePassiveEventList()
        stopAllMusic()
    }

    
}

// debugging
gameMode.set('titleScreen')

// Lauching game Loop

gameLoop();
