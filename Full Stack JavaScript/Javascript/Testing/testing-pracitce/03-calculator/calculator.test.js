import Compute from "./calculator";

const calculator = Compute();

describe("Testing the functionalities of a calculator", () => {
  test("Addition", () => {
    expect(calculator.add(1, 5)).toBe(6);
  });

  test("Subtraction", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("Multiplication", () => {
    expect(calculator.multiply(4, 7)).toBe(28);
  });

  test("Subtraction", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
});
