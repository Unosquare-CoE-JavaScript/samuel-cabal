import solution from "../challenges/multiples3or5";

describe("Multiples of 3 or 5", () => {
  it("Validate multiples below 10", () => {
    expect(solution(10)).toBe(23);
  });
  it("Validate multiples below 1000", () => {
    expect(solution(1000)).toBe(233168);
  });
  it("Validate multiples below 50", () => {
    expect(solution(50)).toBe(543);
  });
  it("Validate multiples of -50", () => {
    expect(solution(-50)).toBe(0);
  });
});
