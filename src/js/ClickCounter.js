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
            this.companionCost = this.companionCost+this.companionCost*.1
        }
    }
    showCompanionValue() {
        return this.currentCompanions
    }
}