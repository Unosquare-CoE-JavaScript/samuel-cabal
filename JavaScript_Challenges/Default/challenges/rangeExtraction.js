function rangeExtraction(list) {
  let isRange = false;

  return list
    .reduce((acc, curr, idx) => {
      if (curr + 1 !== list[idx + 1]) {
        if (isRange) acc += curr === list[idx - 2] + 2 ? "-" : ",";
        acc += curr + ",";
        isRange = false;
      } else if (!isRange) {
        acc += curr;
        isRange = true;
      }

      return acc;
    }, "")
    .slice(0, -1);
}

console.log(
  rangeExtraction([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
