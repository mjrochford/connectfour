// ----------- Constructor Grid Function -------------\\

function Grid() {
  this.cols = [];
  for (c = 0; c < 7; c++) {
    cols.push([]);
    for (r = 0; r < 6; r++) {
      cols[c].push(new Cell(r, c));
    }
  }
}



// ----------- Constructor Cell Function --------------\\

function Cell(r, c) {
  this.r = r;
  this.c = c;

}
