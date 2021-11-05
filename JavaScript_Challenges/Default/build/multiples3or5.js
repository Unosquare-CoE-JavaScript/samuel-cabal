"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function solution(number) {
  let count = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }

  return count > 0 ? count : 0;
}

var _default = solution;
exports.default = _default;
console.log(solution(-50));