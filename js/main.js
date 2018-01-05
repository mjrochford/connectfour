// Matthew Rochford 2018
// Connect Four
/* eslint semi: ["error", "always"] */

const grid = document.querySelector('cf-board');
const players = ['red', 'yellow'];

let g = new Grid();
let turn = 0;

grid.addEventListener('click', function (event) {
  let target = event.target;
  if (target.tagName === 'CF-SPACE') {
    let parent = target.parentElement;
    setSpace(parent);
  } else if (target.tagName === 'CF-COLUMN') {
    setSpace(target);
  }
});

function setSpace (col) {
  let lastSpace = getUnfilledSpace(col);
  lastSpace.className = 'filled-' + players[turn];
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

  this.update = function update (player, play) {
    if (player === 'red') {
      updateArray(this.redPlays, play);
    } else if (player === 'yellow') {
      updateArray(this.yellowPlays, play);
    }
  };

  this.checkWin = check();
}

// ----------- Grid Functionality -------------\\

function updateArray (array, play) {
  array.push(play);
}

function check () {
  
}

// ----------- Constructor Cell Function --------------\\

function Cell (r, c) {
  this.r = r;
  this.c = c;
}
