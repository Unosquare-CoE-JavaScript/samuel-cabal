"use strict";

function toCamelCase(str) {
  return str.charAt(0) + str.slice(1, str.length).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (x, chr) => chr.toUpperCase());
}

console.log(toCamelCase("The-last-warrior"));