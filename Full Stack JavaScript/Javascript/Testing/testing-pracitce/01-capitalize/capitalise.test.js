import Capitalize from "./capitalise";

describe("Testing for Capitalize Function", () => {
  test("String with all letter in lower case", () => {
    expect(Capitalize("this is a sentence")).toBe("This is a sentence");
  });

  test("String with all letters in upper case", () => {
    expect(Capitalize("THIS IS A SENTENCE")).toBe("This is a sentence");
  });
  test("String with first letter capital", () => {
    expect(Capitalize("A random testing program")).toBe(
      "A random testing program"
    );
  });
  test("String with all except first letter capital", () => {
    expect(Capitalize("tHIS IS VERY LOVELY DAY")).toBe(
      "This is very lovely day"
    );
  });
  test("String with capital letter in between", () => {
    expect(Capitalize("this is increDible job doNe by me")).toBe(
      "This is incredible job done by me"
    );
  });
});
