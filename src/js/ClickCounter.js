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
    
    showCurrentClicks() {
        return this.currentClicks
    }

    showClickValue() {
        return this.clickValue
    }

    showCompounderCost() {
        return this.compounderCost
    }
    
    addCompanion() {
        if(this.currentClicks>=this.companionCost){
            this.currentCompanions++
            this.currentClicks = this.currentClicks-this.companionCost
            this.increaseCompanionCost()
        }
    }
    
    addCompanionCountToCurrentClicks() {
        this.currentClicks = this.currentClicks + (this.currentCompanions*this.clickValue)
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
    countElement.innerText = clickCounter.showCurrentClicks()
}

const makeCookieButton = (buttonElement, countElement, clickCounter) => {
    buttonElement.addEventListener('click', function(){
        clickCounter.clickButton()
        updateCounter(countElement, clickCounter)
    })
}

const updateCompanionCounter = (companionCountElement, companionCounter) => {
    companionCountElement.innerText = companionCounter.showCompanionValue()
}

const makeCompanionButton = (companionButtonElement, companionCountElement, companionCounter) => {
    companionButtonElement.addEventListener('click', function(){
        companionCounter.addCompanion()
        updateCompanionCounter(companionCountElement, companionCounter)
    })
}

const updateCompounderCounter = (compounderCountElement, compounderCounter) => {
    compounderCountElement.innerText = compounderCounter.showCompounderValue()
}

const updateClickValue = (clickValueElement, clickCounter) => {
    clickValueElement.innerText = clickCounter.showClickValue()
}

const updateCompounderCost = (compounderCostElement, costCounter) => {
    compounderCostElement.innerText = costCounter.showCompounderCost()
}

const makeResetButton = (resetButtonElement) => {
    resetButtonElement.addEventListener('click', function(){
        location.reload()
    })
}

const makeCompounderButton = (compounderButtonElement, compounderCountElement, clickValueElement, compounderCostElement, compounderCounter) => {
    compounderButtonElement.addEventListener('click', function(){
        compounderCounter.addCompounder()
        updateCompounderCounter(compounderCountElement, compounderCounter)
        updateClickValue(clickValueElement, compounderCounter)
        updateCompounderCost(compounderCostElement, compounderCounter)
    })
}

const buttonElement = document.querySelector('#cookieButton')
const countElement = document.querySelector('#cookieCount')
const clickValueElement = document.querySelector('#cookieValue')
const companionButtonElement = document.querySelector('#companionButton')
const companionCountElement = document.querySelector('#companionCount')
const compounderButtonElement = document.querySelector('#compounderButton')
const compounderCountElement = document.querySelector('#compounderCount')
const compounderCostElement = document.querySelector('#compounderCost')
const cookieCounter = new ClickCounter()
const resetButton = document.querySelector('#resetButton')

setInterval(cookieCounter.addCompanionCountToCurrentClicks, 1000)
setInterval(cookieCounter.showCurrentClicks, 1000)




makeCookieButton(buttonElement, countElement, cookieCounter)
updateCounter(countElement, cookieCounter)
makeCompanionButton(companionButtonElement, companionCountElement, cookieCounter)
updateCompanionCounter(companionCountElement, cookieCounter)
makeCompounderButton(compounderButtonElement, compounderCountElement, clickValueElement, compounderCostElement, cookieCounter)
updateCompounderCounter(compounderCountElement, cookieCounter)
updateClickValue(clickValueElement, cookieCounter)
updateCompounderCost(compounderCostElement, cookieCounter)
makeResetButton(resetButton, cookieCounter)

