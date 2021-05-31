function getRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

getRandomInteger(100, 90);

function getRandomFloat(min, max, fractionDigits) {
  const fractionMultiplier = Math.pow(10, fractionDigits);
  return (
    Math.round((Math.random() * (max - min) + min) * fractionMultiplier) /
    fractionMultiplier
  );
}

getRandomFloat(50, 1, 3);

//Источник : https://question-it.com/questions/1483098/generatsija-sluchajnogo-chisla-mezhdu-dvumja-chislami-v-javascript
