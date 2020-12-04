const fs = require("fs");
function part1() {
  fs.readFile("input.txt", (err, data) => {
    if (err) {
      throw err;
    }
    const inputs = data.toString().split(/\r?\n/);
    let count = 0;
    inputs.forEach((input) => {
      const dataCheck = input.split(":");
      const policies = dataCheck[0].split(" ");
      const password = dataCheck[1].trim();
      const rangePolicies = policies[0].split("-");
      const character = policies[1].trim();

      const matches = password.match(RegExp(character, "g"));

      if (matches) {
        if (
          matches.length >= rangePolicies[0] &&
          matches.length <= rangePolicies[1]
        ) {
          count++;
        }
      }
    });
    console.log(`${count} passwords valid part one`);
  });
}

//Part 2
function part2() {
  fs.readFile("input.txt", (err, data) => {
    if (err) {
      throw err;
    }
    const inputs = data.toString().split(/\r?\n/);
    let count = 0;
    inputs.forEach((input) => {
      const dataCheck = input.split(":");
      const policies = dataCheck[0].split(" ");
      const password = dataCheck[1].trim();
      const firstIndex = policies[0].split("-")[0];
      const secondIndex = policies[0].split("-")[1];

      const character = policies[1].trim();

      if (
        checkCharacterIndex(
          firstIndex,
          secondIndex,
          password.split(""),
          character
        )
      ) {
        count++;
      }
    });
    console.log(`${count} passwords valid part two`);
  });
}

function checkCharacterIndex(
  firstCheck,
  secondCheck,
  passwordArray,
  character
) {
  if (
    passwordArray[firstCheck - 1] === character &&
    passwordArray[secondCheck - 1] === character
  ) {
    return false;
  } else {
    if (
      passwordArray[firstCheck - 1] === character ||
      passwordArray[secondCheck - 1] === character
    ) {
      return true;
    } else {
      return false;
    }
  }
}

part1();
part2();
