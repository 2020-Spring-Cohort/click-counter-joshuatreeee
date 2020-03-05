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
        xit("should add 10 to companionCost", function(){
            sut.currentClicks = 100
            sut.addCompanion()
            expect(sut.companionCost).toBe(110)
        })
        it("should add 10% to companionCost", function(){
            sut.currentClicks = 500
            sut.companionCost = 110
            sut.addCompanion()
            expect(sut.companionCost).toBe(121)
        })
        it("should not addCompanion if currentClicks =/ companionCost", function(){
            sut.currentClicks = 90
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

describe("cookieclicker DOM manipulation", function(){
    let testClicker
    let testCount
    let testButton

    beforeEach(function(){
        testClicker = new ClickCounter
        testCount = document.createElement('div')
        testButton = document.createElement('button')
        makeCookieButton(testButton, testCount, testClicker)

    })

    describe("updateCounter", function(){
        it("testCount should read 0 with no clicks", function(){
            updateCounter(testCount, testClicker)
            expect(testCount.innerText).toBe('0')
        })
        it("after clicking, testCount should read 1", function(){
            testClicker.clickButton()
            updateCounter(testCount, testClicker)
            expect(testCount.innerText).toBe('1')
        })
    })
    describe("makeCookieButton", function(){
        it("Clicking once should add 1 to count", function(){
            testButton.click()
            expect(testClicker.showClickValue()).toBe(1)
        })
        it("Clicking once should change testCount innerText to 1", function(){
            testButton.click()
            expect(testCount.innerText).toBe('1')
        })
    })
})