process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require("crypto");

const start = Date.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});

// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("10:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("11:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("12:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("13:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("14:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("15:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("16:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("17:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("18:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("19:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("20:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("21:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("22:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("23:", Date.now() - start);
// });
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("24:", Date.now() - start);
// });
