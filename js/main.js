const grid = document.querySelector("cf-board");
const columns = grid.children;
const players = ["red", "yellow"];

let turn = 0;

grid.addEventListener("click", function (event) {
  let target = event.target;
  if (target.tagName == "CF-SPACE") {
    let parent = target.parentElement;
    let lastSpace = getUnfilledSpace(parent);
    lastSpace.className = "filled-" + players[turn];
    turn = (turn + 1) % players.length;
  } else if (target.tagName == "CF-COLUMN") {
    let lastSpace = getUnfilledSpace(target);
    lastSpace.className = "filled-" + players[turn];
    turn = (turn + 1) % players.length;
  }
});

function getUnfilledSpace(col) {
  const children = col.children;
  for (i = children.length - 1; i >= 0; i--) {
    if (!children[i].className.includes("filled")) {
      return children[i];
    }
  }

}
