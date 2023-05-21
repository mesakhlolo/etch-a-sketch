document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  console.log("hi");
});

function createBoard(size) {
  const board = document.getElementById("board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = "salmon";
    board.insertAdjacentElement("beforeend", div);
  }
}
