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
        this.fixClicks = this.currentClicks.toFixed(2)
        if(this.currentClicks.toString().length > 3){
            return this.fixClicks
        }
        else{
            return this.currentClicks
        }
    }

    showClickValue() {
        this.fixValue = this.clickValue.toFixed(4)
        if(this.clickValue.toString().length > 5){
            return this.fixValue
        }
        else{
            return this.clickValue
        }
    }

    showCompounderCost() {
        this.fixCompounderCost = this.compounderCost.toFixed(4)
        if(this.compounderCost.toString().length > 5){
            return this.fixCompounderCost
        }
        else{
            return this.compounderCost
        }
    }
    
    showCompanionCost() {
        this.fixCompanionCost = this.companionCost.toFixed(4)
        if(this.companionCost.toString().length > 5){
            return this.fixCompanionCost
        }
        else{
            return this.companionCost
        }
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
        enableCompanionButton()
        enableCompounderButton()
    })
}

const updateCompanionCounter = (companionCountElement, clickCounter) => {
    companionCountElement.innerText = clickCounter.showCompanionValue()
}

const makeCompanionButton = (companionButtonElement, companionCountElement, companionCostElement, cookieCountElement, clickCounter) => {
    companionButtonElement.addEventListener('click', function(){
        clickCounter.addCompanion()
        updateCompanionCounter(companionCountElement, clickCounter)
        updateCompanionCost(companionCostElement, clickCounter)
        updateCounter(cookieCountElement, clickCounter)
        enableCompanionButton()
        enableCompounderButton()
    })
}

const updateCompounderCounter = (compounderCountElement, clickCounter) => {
    compounderCountElement.innerText = clickCounter.showCompounderValue()
}

const makeCompounderButton = (compounderButtonElement, compounderCountElement, clickValueElement, compounderCostElement, cookieCountElement, clickCounter) => {
    compounderButtonElement.addEventListener('click', function(){
        clickCounter.addCompounder()
        updateCompounderCounter(compounderCountElement, clickCounter)
        updateClickValue(clickValueElement, clickCounter)
        updateCompounderCost(compounderCostElement, clickCounter)
        updateCounter(cookieCountElement, clickCounter)
        enableCompanionButton()
        enableCompounderButton()
    })
}

const updateClickValue = (clickValueElement, clickCounter) => {
    clickValueElement.innerText = clickCounter.showClickValue()
}

const updateCompounderCost = (compounderCostElement, clickCounter) => {
    compounderCostElement.innerText = clickCounter.showCompounderCost()
}

const updateCompanionCost = (companionCostElement, clickCounter) => {
    companionCostElement.innerText = clickCounter.showCompanionCost()
}

const makeResetButton = (resetButtonElement) => {
    resetButtonElement.addEventListener('click', function(){
        location.reload()
    })
}

function showAboutJosh() {
    if (aboutJosh.style.display === "block") {
      aboutJosh.style.display = "none"
    }
    else {
      aboutJosh.style.display = "block"
    }
}

function showAboutCompany() {
    if (aboutCompany.style.display === "block") {
      aboutCompany.style.display = "none"
    }
    else {
      aboutCompany.style.display = "block"
    }
}

function enableCompounderButton() {
    if (cookieCounter.currentClicks >= cookieCounter.compounderCost) {
        compounderButtonElement.removeAttribute('disabled')
    } 
    else {
        compounderButtonElement.disabled = true
    }
}

function enableCompanionButton() {
    if (cookieCounter.currentClicks >= cookieCounter.companionCost) {
        companionButtonElement.removeAttribute('disabled')
    } 
    else {
        companionButtonElement.disabled = true
    }
}

const autoClickElement = setInterval(autoClick, 1000);

function autoClick() {
  cookieCounter.addCompanionCountToCurrentClicks()
  updateCounter(countElement, cookieCounter)
  enableCompanionButton()
  enableCompounderButton()
}

const aboutCompany = document.getElementById("about-Company")
const aboutJosh = document.getElementById("about-Josh")
const buttonElement = document.querySelector('#cookieButton')
const countElement = document.querySelector('#cookieCount')
const clickValueElement = document.querySelector('#cookieValue')
const companionButtonElement = document.querySelector('#companionButton')
const companionCountElement = document.querySelector('#companionCount')
const companionCostElement = document.querySelector("#companionCost")
const compounderButtonElement = document.querySelector('#compounderButton')
const compounderCountElement = document.querySelector('#compounderCount')
const compounderCostElement = document.querySelector('#compounderCost')
const cookieCounter = new ClickCounter()
const resetButton = document.querySelector('#resetButton')

makeCookieButton(buttonElement, countElement, cookieCounter)
updateCounter(countElement, cookieCounter)
makeCompanionButton(companionButtonElement, companionCountElement, companionCostElement, countElement, cookieCounter)
updateCompanionCounter(companionCountElement, cookieCounter)
makeCompounderButton(compounderButtonElement, compounderCountElement, clickValueElement, compounderCostElement, countElement, cookieCounter)
updateCompounderCounter(compounderCountElement, cookieCounter)
updateClickValue(clickValueElement, cookieCounter)
updateCompounderCost(compounderCostElement, cookieCounter)
makeResetButton(resetButton, cookieCounter)
