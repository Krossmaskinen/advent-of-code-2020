import day3Input from "./input.js";
let mapTile = getMapTile(day3Input);

const TREE = "#";
const tobogganSpeeds = [
  {
    vx: 1,
    vy: 1,
  },
  {
    vx: 3,
    vy: 1,
  },
  {
    vx: 5,
    vy: 1,
  },
  {
    vx: 7,
    vy: 1,
  },
  {
    vx: 1,
    vy: 2,
  },
];
const tobogganPositions = [
  {
    x: 0,
    y: 0,
    hasArrived: false,
    id: 0,
  },
  {
    x: 0,
    y: 0,
    hasArrived: false,
    id: 1,
  },
  {
    x: 0,
    y: 0,
    hasArrived: false,
    id: 2,
  },
  {
    x: 0,
    y: 0,
    hasArrived: false,
    id: 3,
  },
  {
    x: 0,
    y: 0,
    hasArrived: false,
    id: 4,
  }
];
let noOfTreesEncountered = [0, 0, 0, 0, 0];

while(!getAllHasArrived()) {
  moveToboggans();
  updateHasArrived();
  updateTreesEncountered();
}

console.log("part 1: ", noOfTreesEncountered[1]);
console.log("part 2: ", noOfTreesEncountered.reduce((a, b) => a * b));

function getAllHasArrived() {
  return !tobogganPositions.some(pos => !pos.hasArrived);
}

function moveToboggans() {
  tobogganPositions
    .filter(pos => !pos.hasArrived)
    .forEach((tobogganPos) => {
      tobogganPos.x += tobogganSpeeds[tobogganPos.id].vx;
      tobogganPos.y += tobogganSpeeds[tobogganPos.id].vy;

      if (tobogganPos.x > mapTile[0].length - 1) {
        tobogganPos.x -= mapTile[0].length;
      }
    });
}

function updateHasArrived() {
  tobogganPositions
    .filter(pos => !pos.hasArrived)
    .forEach(tobogganPos => {
      if (tobogganPos.y > mapTile.length - 1) {
        tobogganPos.hasArrived = true;
      }

      return false;
    });
}

function updateTreesEncountered() {
    tobogganPositions
    .filter(pos => !pos.hasArrived)
    .forEach((tobogganPos) => {
      if (mapTile[tobogganPos.y][tobogganPos.x] === TREE) {
        ++noOfTreesEncountered[tobogganPos.id];
      }
    });
}

function getMapTile(input) {
  let mapTile = [];

  input.split('\n')
    .forEach(row => {
      mapTile.push(row.split(''));
    });

  return mapTile;
}
