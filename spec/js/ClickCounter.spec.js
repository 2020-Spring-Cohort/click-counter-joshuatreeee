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
        it("should add 10% to companionCost", function(){
            sut.currentClicks = 500
            sut.companionCost = 110
            sut.addCompanion()
            expect(sut.companionCost).toBe(121)
        })
        it("should not addCompanion if currentClicks <= companionCost", function(){
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
    describe("addCompanionCountToCurrentClicks", function(){
        it("should add companion count to click count", function(){
            sut.currentClicks=100
            sut.addCompanion()
            sut.addCompanionCountToCurrentClicks()
            expect(sut.currentClicks).toBe(1)
        })
        it("should add companion count time 1.2 if compounder is added", function(){
            sut.currentClicks=110
            sut.addCompanion()
            sut.addCompounder()
            sut.addCompanionCountToCurrentClicks()
            expect(sut.showClickValue()).toBe(1.2)
        })
    })
    describe("addCompounder", function(){
        it("should add 1 to companionCount after addCompounter", function(){
            sut.currentClicks=10
            sut.addCompounder()
            expect(sut.currentCompounders).toBe(1)
        })
        it("should subtract 10 from currentClicks", function(){
            sut.currentClicks=10
            sut.addCompounder()
            expect(sut.showClickValue()).toBe(0)
        })
        it("should add 10% to compounderCost", function(){
            sut.currentClicks=10
            sut.addCompounder()
            expect(sut.compounderCost).toBe(11)
        })
        it("should not increase compounderCount if currentClicks <= compounderCost", function(){
            sut.currentClicks=9
            sut.addCompounder()
            expect(sut.currentCompounders).toBe(0)
        })
        it("clickButton should return 1.2 for currentClicks after compounder is added", function(){
            sut.currentClicks=10
            sut.addCompounder()
            sut.clickButton()
            expect(sut.showClickValue()).toBe(1.2)
        })
    })
    describe("showCompounderValue", function(){
        it("should return 0 when no compounders are purchased", function(){
            expect(sut.showCompounderValue()).toBe(0)
        })
        it("should return 1 after addCompounder", function(){
            sut.currentClicks=10
            sut.addCompounder()
            expect(sut.showCompounderValue()).toBe(1)
        })
    })
    describe("increaseClickValue", function(){
        it("should change clickValue to 1.2 when increaseClickValue is called", function(){
            sut.currentClicks = 1
            sut.increaseClickValue()
            expect(sut.clickValue).toBe(1.2)
        })
    })
})

describe("cookieclicker DOM manipulation", function(){
    let testClicker
    let testCount
    let testButton
    let testCompanionCount
    let testCompanionButton
    let testCompounderCount
    let testCompounderButton

    beforeEach(function(){
        testClicker = new ClickCounter
        testCount = document.createElement('div')
        testButton = document.createElement('button')
        testCompanionCount = document.createElement('div')
        testCompanionButton = document.createElement('button')
        testCompounderCount = document.createElement('div')
        testCompounderButton = document.createElement('button')
        makeCookieButton(testButton, testCount, testClicker)
        makeCompanionButton(testCompanionButton, testCompanionCount, testClicker)
        makeCompounderButton(testCompounderButton, testCompounderCount, testClicker)

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

    describe("updateCompanionCounter", function(){
        it("testCompanionCount should read 0 with no clicks", function(){
            updateCompanionCounter(testCompanionCount, testClicker)
            expect(testCompanionCount.innerText).toBe('0')
        })
        it("after clicking, testCompanionCount should read 1", function(){
            testClicker.currentClicks = 100
            testClicker.addCompanion()
            updateCompanionCounter(testCompanionCount, testClicker)
            expect(testCompanionCount.innerText).toBe('1')
        })
    })
    
    describe("makeCompanionButton", function(){
        it("clicking once should add 1 to companion count", function(){
            testClicker.currentClicks = 100
            testCompanionButton.click()
            expect(testClicker.showCompanionValue()).toBe(1)
        })
        it("clicking once should change testCompanionCount innerText to 1", function(){
            testClicker.currentClicks = 100
            testCompanionButton.click()
            expect(testCompanionCount.innerText).toBe('1')
        })
    })

    describe("updateCompounderCounter", function(){
        it("testCompounderCount should read 0 with no clicks", function(){
            updateCompounderCounter(testCompounderCount, testClicker)
            expect(testCompounderCount.innerText).toBe('0')
        })
        it("after clicking, testCompounderCount should read 1", function(){
            testClicker.currentClicks = 10
            testClicker.addCompounder()
            updateCompounderCounter(testCompounderCount, testClicker)
            expect(testCompounderCount.innerText).toBe('1')
        })
    })

    describe("makeCompounderButton", function(){
        it("clicking once should add 1 to compounder count", function(){
            testClicker.currentClicks = 10
            testCompounderButton.click()
            expect(testClicker.showCompounderValue()).toBe(1)
        })
        it("clicking once should change testCompounderCount innerText to 1", function(){
            testClicker.currentClicks = 10
            testCompounderButton.click()
            expect(testCompounderCount.innerText).toBe('1')
        })
    })
})