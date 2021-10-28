import highAndLow from "../challenges/highAndLow";

describe("Highest and Lowest", () => {
  it("Validating with a string of numbers", () => {
    expect(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toBe("42 -9");
  });
  it("", () => {
    expect(highAndLow("1 2 3 4 5")).toBe("5 1");
  });
  it("", () => {
    expect(highAndLow("1 2 -3 4 5")).toBe("5 -3");
  });
  it("", () => {
    expect(highAndLow("1 9 3 4 -5")).toBe("9 -5");
  });
  it("", () => {
    expect(highAndLow(" ")).toBe("0 0");
  });
  it("", () => {
    expect(highAndLow("")).toBe("0 0");
  });
  it("", () => {
    expect(highAndLow("0 0 0 0")).toBe("0 0");
  });
  it("", () => {
    expect(highAndLow("10 0 10 -5 7 -5")).toBe("10 -5");
  });
});
