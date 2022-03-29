const {addNumbers, subtractNumbers, multiplyNumbers, divideNumbers} = require('./exercise-1');
describe("addNumbers", ()=> {
  it("addNumbers", () => {
    const sum = addNumbers(10, 10);
    expect(sum).toBe(20)
  })
  it("addNumbers", () => {
    const sum = addNumbers(11,25);
    expect(sum).toBe(36)
  })
  it("addNumbers", () => {
    const sum = addNumbers(1,2);
    expect(sum).toBe(3)
  })
})
describe("subtractNumbers", ()=> {
  it("subtractNumbers", () => {
    const difference = subtractNumbers(1,2);
    expect(difference).toBe(-1)
  })
  it("subtractNumbers", () => {
    const difference = subtractNumbers(1000,500);
    expect(difference).toBe(500)
  })
  it("subtractNumbers", () => {
    const difference = subtractNumbers(75,5);
    expect(difference).toBe(70)
  })
})
describe("multiplyNumbers", ()=> {
  it("multiplyNumbers", () => {
    const multiplication = multiplyNumbers(9,9);
    expect(multiplication).toBe(81)
  })
  it("multiplyNumbers", () => {
    const multiplication = multiplyNumbers(145,0);
    expect(multiplication).toBe(0)
  })
  it("multiplyNumbers", () => {
    const multiplication = multiplyNumbers(1,1);
    expect(multiplication).toBe(1)
  })
})
describe("divideNumbers", ()=> {
  it("divideNumbers", () => {
    const division = divideNumbers(64,8);
    expect(division).toBe(8)
  })
  it("divideNumbers", () => {
    const division = divideNumbers(90,10);
    expect(division).toBe(9)
  })
  it("divideNumbers", () => {
    const division = divideNumbers(5,10);
    expect(division).toBe(0.5)
  })
})