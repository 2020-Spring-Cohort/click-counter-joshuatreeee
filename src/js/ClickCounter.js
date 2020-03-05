class ClickCounter {

    constructor() {
        this.currentClicks = 0
        this.currentCompanions = 0
    }

    clickButton() {
        this.currentClicks += 1
    }
    showClickValue() {
        return this.currentClicks
    }
    addCompanion() {
        this.currentCompanions += 1
    }

}