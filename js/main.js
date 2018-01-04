// Matthew Rochford 2018
// Connect Four

const grid = document.querySelector("cf-board");
const players = ["red", "yellow"];

let turn = 0;
let red_plays = [];
let yellow_plays = [];

grid.addEventListener("click", function (event) {
  let target = event.target;
  if (target.tagName == "CF-SPACE") {
    let parent = target.parentElement;
    setSpace(parent);
  } else if (target.tagName == "CF-COLUMN") {
    setSpace(target);
  }
});

function setSpace(col) {
  let lastSpace = getUnfilledSpace(col);
  lastSpace.className = "filled-" + players[turn];
  if (turn == 0)
    red_plays.push([lastSpace.id, col.id]);
  else
    yellow_plays.push([lastSpace.id, col.id]);
  turn = (turn + 1) % players.length;
}

function getUnfilledSpace(col) {
  const children = col.children;
  for (i = children.length - 1; i >= 0; i--) {
    if (!children[i].className.includes("filled")) {
      return children[i];
    }
  }

}
