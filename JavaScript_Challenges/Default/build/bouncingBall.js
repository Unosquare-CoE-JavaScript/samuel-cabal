"use strict";

function bouncingBall(h, bounce, window) {
  // your code here
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1;
    h = h * bounce;

    while (h > window) {
      count += 2;
      h = h * bounce;
    }

    return count;
  } else {
    return -1;
  }
}

console.log(bouncingBall(3, 1, 1.5));