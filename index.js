function shuffle(arr) {
  return arr.sort((a, b) => 0.5 - Math.random());
}

module.exports = function speedySpeedyPassword(
  lowerLetterCount,
  upperLetterCount,
  numberCount,
  specialCount
) {
  const uppercases = [...Array(26)].map((val, i) =>
    String.fromCharCode(i + 65)
  );
  const lowercases = uppercases.map((letter) => letter.toLowerCase());
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const specials = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
    "[",
    "]",
    "{",
    "}",
    "<",
    ">",
    ",",
    "/",
  ];
  let seq = [];

  let password = "";

  seq.push(
    ...new Array(lowerLetterCount).fill("lowercase"),
    ...new Array(upperLetterCount).fill("uppercase"),
    ...new Array(numberCount).fill("number"),
    ...new Array(specialCount).fill("special")
  );

  seq = shuffle(seq);

  seq.forEach((val) => {
    switch (val) {
      case "lowercase":
        password += shuffle(lowercases)[0];
        break;
      case "uppercase":
        password += shuffle(uppercases)[0];
        break;
      case "number":
        password += shuffle(numbers)[0];
        break;
      case "special":
        password += shuffle(specials)[0];
        break;
    }
  });

  return password;
};