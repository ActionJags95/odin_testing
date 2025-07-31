import reverseString from "./reverseString";

describe("Testing the reverseString function for reversing a string", () => {
  test("a normal word", () => {
    expect(reverseString("Hello")).toEqual("olleH");
  });

  test("a letter", () => {
    expect(reverseString("a")).toEqual("a");
  });

  test('a sentence', () => {
    expect(reverseString("this is normal sentence")).toEqual("ecnetnes lamron si siht");
  })
  
});
