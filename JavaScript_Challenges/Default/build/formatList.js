"use strict";

function list(names) {
  //your code here
  console.log(names.length);
  let name = names.reduce((acc, curr, index) => {
    console.log(curr, index);
    acc += index === 0 ? curr.name : index < names.length - 1 ? `, ${curr.name}` : ` & ${curr.name}`;
    return acc;
  }, "");
  return name;
}

console.log(list([{
  name: "Bart"
}, {
  name: "Lisa"
}]));
console.log("test");