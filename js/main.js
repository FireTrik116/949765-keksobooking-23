function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    return 0;
  } else if (min > max) {
    [max, min] = [min, max];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInteger(0, 10);


function getRandomFloat(min, max, fractionDigits) {
  if (min < 0 || max < 0) {
    return 0;
  } else if (min > max) {
    [max, min] = [min, max];
  }
  const fractionMultiplier = Math.pow(10, fractionDigits);
  return (
    Math.round((Math.random() * (max - min) + min) * fractionMultiplier) /
    fractionMultiplier
  );
}

getRandomFloat(1,10 , 3);

//Источник : https://question-it.com/questions/1483098/generatsija-sluchajnogo-chisla-mezhdu-dvumja-chislami-v-javascript
