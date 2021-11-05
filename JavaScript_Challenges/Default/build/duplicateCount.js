"use strict";

function duplicateCount(text = "") {
  const countArr = text.toLowerCase().split("").reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, []);
  return Object.keys(countArr).filter(key => countArr[key] > 1).length;
}

console.log(duplicateCount());