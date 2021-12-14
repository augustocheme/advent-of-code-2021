const fs = require("fs");

const depths = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

let depthIncreases = 0;

for (let i = 0; i < depths.length; i++) {
  if (depths[i] < depths[i + 1]) {
    depthIncreases++;
  }
}

console.log(depthIncreases);

let intervalDepthIncreases = 0;

for (let i = 0; i < depths.length; i++) {
  const currentInterval = depths[i] + depths[i + 1] + depths[i + 2];
  const nextInterval = depths[i + 1] + depths[i + 2] + depths[i + 3];

  if (currentInterval < nextInterval) {
    intervalDepthIncreases++;
  }
}

console.log(intervalDepthIncreases);
