const ftoc = function(ftc) {

  num = (ftc - 32) * (5 / 9);
  return Number(num.toFixed(1));
// return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10; <<< other solution
};

const ctof = function(ctf) {

  num = ctf * (9 / 5) + 32;
  return Number(num.toFixed(1));
// return Math.round(((celsius * 9) / 5 + 32) * 10) / 10; <<< other solution
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
