// Matthew Rochford 2018
// Connect Four
/* eslint semi: ["error", "always"] */

import * as Grid from 'grid.js';

const grid = document.querySelector('cf-board');
const players = ['red', 'yellow'];

let g = new Grid();
let turn = 0;
let redPlays = [];
let yellowPlays = [];

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
  if (turn === 0) {
    redPlays.push(numericSpace([lastSpace.id, col.id]));
  } else {
    yellowPlays.push(numericSpace([lastSpace.id, col.id]));
  }
  turn = (turn + 1) % players.length;
  g.update(redPlays, yellowPlays);
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
