class ClickCounter {

    constructor() {
        this.currentClicks = 0
        this.clickValue = 1
        this.currentCompanions = 0
        this.companionCost = 100
        this.currentCompounders = 0
        this.compounderCost = 10
    }

    clickButton() {
        this.currentClicks = this.currentClicks + this.clickValue
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
        this.currentClicks = this.currentClicks + this.currentCompanions*this.clickValue
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
        if(this.currentClicks>=this.compounderCost){
            this.currentCompounders++
            this.currentClicks = this.currentClicks-this.compounderCost
            this.increaseCompounderCost()
            this.increaseClickValue()
        }
    }

    increaseClickValue() {
        this.clickValue = this.clickValue + this.clickValue*.2
    }

    increaseCompounderCost() {
        this.compounderCost = this.compounderCost+this.compounderCost*.1
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