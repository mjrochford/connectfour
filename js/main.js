// Matthew Rochford 2018
// Connect Four
/* eslint semi: ["error", "always"] */
/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */

const grid = document.querySelector('cf-board');
const players = ['red', 'yellow'];

let g = new Grid();
let turn = 0;
let gameOver = false;

grid.addEventListener('click', function (event) {
  if (!gameOver) {
    let target = event.target;
    if (target.tagName === 'CF-SPACE') {
      let parent = target.parentElement;
      setSpace(parent);
    } else if (target.tagName === 'CF-COLUMN') {
      setSpace(target);
    }
    // gameOver = g.checkWin();
  } else {
    reset();
  }
});

function reset () {
  console.log('game over');
}

function setSpace (col) {
  let lastSpace = getUnfilledSpace(col);
  lastSpace.className += ' filled-' + players[turn];
  g.update(players[turn], numericSpace([lastSpace.id, col.id]));
  turn = (turn + 1) % players.length;
}

function numericSpace (space) {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const cols = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  return [rows.indexOf(space[0]), cols.indexOf(space[1])];
}

function getUnfilledSpace (col) {
  const children = col.children;
  for (var i = children.length - 1; i >= 0; i--) {
    if (!children[i].className.includes('filled')) {
      return children[i];
    }
  }
}

// ----------- Constructor Grid Function -------------\\

function Grid () {
  this.redPlays = [];
  this.yellowPlays = [];
  this.plays = [this.redPlays, this.yellowPlays];
  this.directions = [
    /* VERTICAL */ [1, 0],
    /* HORIZONTAL */ [0, 1],
    /* DIAG_RIGHT */ [1, 1],
    /* DIAG_LEFT */ [-1, 1]
  ];

  this.update = function update (player, play) {
    if (player === 'red') {
      updateArray(this.redPlays, play);
    } else if (player === 'yellow') {
      updateArray(this.yellowPlays, play);
    }
  };

  this.checkWin = function checkAll () {
    let out = false;
    for (var q = 0; q < this.plays.length; q++) {
      for (var i = 0; i < this.directions.length; i++) {
        out = out || check(this.plays[q], this.directions[i]);
      }
    }
    return out;
  };
}

// ----------- Grid Functionality -------------\\

function updateArray (array, play) {
  array.push(play);
}

function check (playArray, direction) {
  let count = 0;
  for (let i = 0; i < playArray.length; i++) {
    for (let q = 0; q < 4; q++) {
      let play = playArray[i];
      let sequentialPlay = [play[0] + direction[0], play[1] + direction[1]];
      let nextPlay = playArray.contains(sequentialPlay);
      count = nextPlay ? count + 1 : 0;
      if (direction.equals([0, 1]) && playArray === g.redPlays) {
        console.log(count);
        console.log(nextPlay + ' - ' + play + ' - ' + sequentialPlay);
        console.log(playArray);
      }
      if (count >= 3) {
        return true;
      }
    }
  }
  return false;
}

Array.prototype.equals = function (arr) {
  if (this.length !== arr.length) {
    return false;
  } else {
    let out = true;
    for (var i = 0; i < this.length; i++) {
      out = out && this[i] === arr[i];
    }
    return out;
  }
};

Array.prototype.contains = function (arr) {
  let out = false;
  this.forEach(function (el) {
    out = out || el.equals(arr);
  });
  return out;
};
