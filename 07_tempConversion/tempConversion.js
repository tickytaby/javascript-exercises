function roundTo(number) {
  let rounded = Math.round(number * 10) / 10
  return rounded
}

const convertToCelsius = function(far) {
  c = 5/9*(far - 32)
  return roundTo(c)
};

const convertToFahrenheit = function(c) {
  far = (9/5*c) + 32
  return roundTo(far)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
