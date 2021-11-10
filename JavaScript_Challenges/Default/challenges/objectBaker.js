function cakes(recipe, available) {
  return Math.min(
    ...Object.entries(recipe).map((res) => {
      return res[0] in available ? Math.trunc(available[res[0]] / res[1]) : 0;
    })
  );
}

let recipe = { apples: 64, eggs: 86, milk: 13 };
let available = {
  cocoa: 6200,
  eggs: 1100,
  oil: 900,
  crumbles: 1800,
  cream: 3500,
  flour: 6600,
  nuts: 7400,
  butter: 8100,
  sugar: 8500,
  apples: 4700,
  milk: 2000,
  chocolate: 5000,
  pears: 2700,
};
console.log(cakes(recipe, available));
