function toCamelCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (x, chr) => chr.toUpperCase());
}

console.log(toCamelCase("The-last-warrior"));
