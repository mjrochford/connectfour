
function getRow(rNum) {

}

function getColumn(cNum) {

}

function Grid() {this(6, 7);}

function Grid(rows, columns) {
  this.items = [];
  for (r = 0; r < rows; r++) {
    this.items[r].push([]);
    for (c = 0; c < columns; c++) {
      this.items[r][c].push(new Space(r, c));
    }
  }
}

function Grid(prevGrid) {

}


function Space(r, c) {
  this.row =
}
