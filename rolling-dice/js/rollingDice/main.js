function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const numNames = ["one", "two", "three", "four", "five", "six"]
  
  console.log("Let's roll some dice, baby!")
  console.log("---------------------------")
  
  const dieRoll = Array.from({ length: 10 }, () => {
    const die1 = getRandomInt(1, 6)
    const die2 = getRandomInt(1, 6)
    const die1string = numNames[die1 - 1]
    const die2string = numNames[die2 - 1]
    return `${die1string} + ${die2string} = ${die1 + die2}${(die1 === die2) ? " DOUBLES!" : ""}`;
  });
  
  dieRoll.forEach(result => console.log(result))
  