class ClickCounter {

    constructor() {
        this.currentClicks = 0
        this.currentCompanions = 0
        this.companionCost = 100
    }

    clickButton() {
        this.currentClicks++
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
    increaseCompanionCost() {
        this.companionCost = this.companionCost+this.companionCost*.1
    }
    showCompanionValue() {
        return this.currentCompanions
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