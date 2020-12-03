let day2Input = Deno.readTextFileSync("input2.txt");

day2Input = getParsedInput(day2Input);

let passwordsWithRules = [];

passwordsWithRules = day2Input.map(row => {
  let splitRow = row.split(' ');
  let params = splitRow[0].split('-').map(Number);
  let character = splitRow[1].replace(":", "");
  let password = splitRow[2];

  return {
    params,
    character,
    password
  };
});

let noOfValidPasswords1 = getNoOfValidpasswordsRules1();
let noOfValidPasswords2 = getNoOfValidpasswordsRules2();

console.log("no of valid passwords 1", noOfValidPasswords1);
console.log("no of valid passwords 2", noOfValidPasswords2);

function getNoOfValidpasswordsRules1() {
  let validPasswords = 0;

  passwordsWithRules.forEach(pwdWithRules => {
    const splitPassword = pwdWithRules.password.split('');
    const occurences = splitPassword.filter(c => c === pwdWithRules.character).length;

    if (occurences >= pwdWithRules.params[0] && occurences <= pwdWithRules.params[1]) {
      ++validPasswords;
    }
  });

  return validPasswords;
}

function getNoOfValidpasswordsRules2() {
  let validPasswords = 0;

  passwordsWithRules.forEach(pwdWithRules => {
    const splitPassword = pwdWithRules.password.split('');
    const index1 = pwdWithRules.params[0] - 1;
    const index2 = pwdWithRules.params[1] - 1;
    const firstPositionHasCharacter = splitPassword[index1] === pwdWithRules.character;
    const secondPositionHasCharacter = splitPassword[index2] === pwdWithRules.character;

    if ((firstPositionHasCharacter && !secondPositionHasCharacter)
      || (!firstPositionHasCharacter && secondPositionHasCharacter)) {
      ++validPasswords;
    }
  });

  return validPasswords;
}

function getParsedInput(input) {
  return input
    .split('\n')
    .filter(item => !!item);
}
