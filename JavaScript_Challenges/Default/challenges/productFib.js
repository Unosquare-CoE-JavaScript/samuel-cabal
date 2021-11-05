function productFib(prod) {
  let n = 0,
    n1 = 1;
  while (n * n1 < prod) {
    n1 += n;
    n = n1 - n;
  }
  return [n, n1, n * n1 === prod];
}
