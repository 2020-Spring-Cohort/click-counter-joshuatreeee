class ClickCounter {

    constructor() {
        this.currentClicks = 0
        this.currentCompanions = 0
        this.companionCost = 100
        this.currentCompounders = 0
        this.compounderCost = 10
    }

    clickButton() {
        this.currentClicks += 1
    }

    showClickValue() {
        return this.currentClicks
    }

    addCompanion() {
        if(this.currentClicks>=this.companionCost){
            this.currentCompanions++
            this.currentClicks = this.currentClicks-this.companionCost
            this.increaseCompanionCost()
        }
    }

    addCompanionCountToCurrentClicks() {
        this.currentClicks = this.currentClicks + this.currentCompanions
    }

    increaseCompanionCost() {
        this.companionCost = this.companionCost+this.companionCost*.1
    }

    showCompanionValue() {
        return this.currentCompanions
    }

    showCompounderValue() {
        return this.currentCompounders
    }

    addCompounder() {
        this.currentCompounders++
        this.currentClicks = this.currentClicks-this.compounderCost
    }
}

const updateCounter = (countElement, clickCounter) => {
    countElement.innerText = clickCounter.showClickValue()
}

const makeCookieButton = (buttonElement, countElement, clickCounter) => {
    buttonElement.addEventListener('click', function(){
        clickCounter.clickButton()
        updateCounter(countElement, clickCounter)
    })
}

const buttonElement = document.querySelector('#cookieButton')
const countElement = document.querySelector('#cookieCount')
const cookieCounter = new ClickCounter()

makeCookieButton(buttonElement, countElement, cookieCounter)
updateCounter(countElement, cookieCounter)

setInterval(cookieCounter.addCompanionCountToCurrentClicks(), 1000)