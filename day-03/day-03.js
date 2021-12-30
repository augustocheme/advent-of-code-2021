const fs = require("fs");

const report = fs
  .readFileSync("day-03/input.txt", "utf8")
  .split("\n")
  .filter((x) => Boolean(x));

const lineLength = report[0].length;

//Part 1

const gammaRate = [];
const epislonRate = [];

function generateRates(currentBit = 0) {
  const showings = [0, 0];
  for (const line of report) {
    showings[line[currentBit]]++;
  }

  if (showings[0] > showings[1]) {
    gammaRate.push(0);
    epislonRate.push(1);
  } else {
    gammaRate.push(1);
    epislonRate.push(0);
  }

  if (currentBit === lineLength - 1) {
    return;
  }

  generateRates(currentBit + 1);
}

generateRates();

console.log(
  parseInt(gammaRate.join(""), 2) * parseInt(epislonRate.join(""), 2)
);

// Part 2

function getOxygenReading(currentBit, readings) {
  if (readings.length === 1) {
    return readings[0];
  }

  const showings = [0, 0];

  for (const line of readings) {
    showings[line[currentBit]]++;
  }

  const mostCommon = showings[0] > showings[1] ? 0 : 1;

  return getOxygenReading(
    currentBit + 1,
    readings.filter((x) => parseInt(x[currentBit]) === mostCommon)
  );
}

function getCo2Reading(currentBit, readings) {
  if (readings.length === 1) {
    return readings[0];
  }

  const showings = [0, 0];

  for (const line of readings) {
    showings[line[currentBit]]++;
  }

  const leastCommon = showings[0] > showings[1] ? 1 : 0;

  return getCo2Reading(
    currentBit + 1,
    readings.filter((x) => parseInt(x[currentBit]) === leastCommon)
  );
}

const lifeSupportReadings = [
  getOxygenReading(0, report),
  getCo2Reading(0, report),
];

console.log(
  parseInt(lifeSupportReadings[0], 2) * parseInt(lifeSupportReadings[1], 2)
);
