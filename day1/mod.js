let day1Input = Deno.readTextFileSync("input1-1.txt");

day1Input = getParsedInput(day1Input);

const sumPair = find2020Sum(day1Input);
console.log("part1: ", sumPair.reduce((a, b) => a * b));

const sumTriplet = find2020TripleSum(day1Input);
console.log("part2: ", sumTriplet.reduce((a, b) => a * b));


function getParsedInput(input) {
  return input
    .split('\n')
    .filter(item => !!item)
    .map(Number);
}

function find2020Sum(input) {
  for (let i = 0; i < input.length - 1; ++i) {
    for (let j = i + 1; j < input.length; ++j) {
      if (input[i] + input[j] === 2020) {
        return [input[i], input[j]];
      }
    }
  }
}

function find2020TripleSum(input) {
  for (let i = 0; i < input.length - 2; ++i) {
    for (let j = i + 1; j < input.length - 1; ++j) {
      for (let k = i + 1; k < input.length; ++k) {

        if (input[i] + input[j]+ input[k] === 2020) {
          return [input[i], input[j], input[k]];
        }
      }
    }
  }
}