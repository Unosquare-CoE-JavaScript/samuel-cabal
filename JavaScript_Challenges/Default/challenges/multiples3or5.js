function solution(number) {
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }

  return count > 0 ? count : 0;
}

export default solution;

console.log(solution(-50));
