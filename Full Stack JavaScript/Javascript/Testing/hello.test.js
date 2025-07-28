import add from "./add";

describe("Testing the functioning of add function", () => {
  test("Adding of positive integers", () => {
    expect(add(3, 5)).toEqual(8);
  });

  test("Adding of two negative integers", () => {
    expect(add(-3, -7)).toEqual(-10);
  });

  test("Adding a positive and negative integer", () => {
    expect(add(-3, 5)).toEqual(2);
  });

  test("Adding zero", () => {
    expect(add(9, 0)).toEqual(9);
  });
});
