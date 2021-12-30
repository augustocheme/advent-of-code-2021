const fs = require("fs");

const moves = fs
  .readFileSync("day-02/input.txt", "utf8")
  .split("\n")
  .filter((x) => Boolean(x));

const positions = [0, 0];

for (const move of moves) {
  const [command, intensity] = move.split(" ");

  if (command === "forward") {
    positions[0] += parseInt(intensity);
  } else {
    positions[1] +=
      command === "down" ? parseInt(intensity) : -1 * parseInt(intensity);
  }
}

console.log("Part one: ", positions[0] * positions[1]);

const newPositions = [0, 0, 0];

for (const move of moves) {
  const [command, intensity] = move.split(" ");

  switch (command) {
    case "down":
      newPositions[2] += parseInt(intensity);
      break;
    case "up":
      newPositions[2] -= parseInt(intensity);
      break;
    case "forward":
      newPositions[0] += parseInt(intensity);
      newPositions[1] += newPositions[2] * parseInt(intensity);
      break;
  }
}

console.log("Part two: ", newPositions[0] * newPositions[1]);
