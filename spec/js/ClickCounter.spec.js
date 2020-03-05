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
            sut.addCompanion()
            expect(sut.currentCompanions).toBe(1)
        })
    })
})