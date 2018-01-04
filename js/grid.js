/* eslint semi: ["error", "always"] */

// ----------- Constructor Grid Function -------------\\

function Grid () {
  this.cols = [];
  for (var c = 0; c < 7; c++) {
    this.cols.push([]);
    for (var r = 0; r < 6; r++) {
      this.cols[c].push(new Cell(r, c));
    }
  }
}

// ----------- Constructor Cell Function --------------\\

function Cell (r, c) {
  this.r = r;
  this.c = c;
}
