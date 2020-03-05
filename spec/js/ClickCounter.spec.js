describe("cookieclicker game", function () {
    let sut;

    beforeEach(function () {
        sut = new ClickCounter()
        currentClicks = 0
    })
    describe("clickButton", function () {
        it("should add 1 to currentClicks", function () {
            sut.clickButton()
            expect(sut.currentClicks).toBe(1)
        })
    })
    describe("showClickValue", function(){
        it("should return 1 after clickButton", function(){
            sut.clickButton()
            expect(sut.showClickValue()).toBe(1)
        })
    })
    describe("addCompanion", function(){
        it("should add 1 to currentCompanions", function(){
            sut.currentClicks = 100
            sut.addCompanion()
            expect(sut.currentCompanions).toBe(1)
        })
        it("should subtract 100 from currentClicks", function(){
            sut.currentClicks = 100
            sut.addCompanion()
            expect(sut.currentClicks).toBe(0)
        })
        it("should add 10 to companionCost", function(){
            sut.currentClicks = 100
            sut.addCompanion()
            expect(sut.companionCost).toBe(110)
        })
        it("should add 10% to companionCost", function(){
            sut.currentClicks = 110
            sut.companionCost = 110
            sut.addCompanion()
            expect(sut.companionCost).toBe(121)
        })
        it("should not addCompanion if currentClicks =/ companionCost", function(){
            sut.companionCost = 9999
            sut.addCompanion()
            expect(sut.currentCompanions).toBe(0)
        })
    })
    describe("showCompanionValue", function(){
        it("should return 1 after addCompanion", function(){
            sut.currentClicks=100
            sut.addCompanion()
            expect(sut.showCompanionValue()).toBe(1)
        })
    })
})