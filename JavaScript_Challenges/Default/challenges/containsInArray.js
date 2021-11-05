function containsInArray(array1, array2) {
  return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
}

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
const a1 = ["xyz", "live", "strong"];
console.log(containsInArray(a1, a2));
