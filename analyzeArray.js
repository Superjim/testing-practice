function analyzeArray(array) {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = analyzeArray;

// object == {
//     average: 4,
//     min: 1,
//     max: 8,
//     length: 6
//   };
