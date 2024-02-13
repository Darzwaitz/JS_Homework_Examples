function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSimulations) {
  const resultz = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    let result = "";

    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    // using ternary
    sum === 7 || sum === 11
      ? (result = "win")
      : sum === 2 || sum === 3 || sum === 12
      ? (result = "lose")
      : (result = "roll again");

    resultz.push({ dice1, dice2, sum, result });
  }
  return resultz;
}

// console.log(diceGameSimulation(3));

module.exports = diceGameSimulation;
