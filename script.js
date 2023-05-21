document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);

  // to change board value using slider
  let output = document.getElementById("rangeOutput");
  let input = document.getElementById("rangeInput");
  input.addEventListener("input", (event) => {
    let size = input.value; // to get the input value (value dari slider)
    createBoard(size);
    output.innerHTML = `Board: ${event.target.value} x ${event.target.value}`;
  });
});

function createBoard(size) {
  const board = document.getElementById("board");
  board.innerHTML = ""; // Menghapus semua elemen sebelumnya

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const fragment = document.createDocumentFragment(); // Membuat fragmen DOM

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    fragment.appendChild(div); // Menambahkan elemen div ke dalam fragmen
  }

  board.appendChild(fragment); // Menambahkan fragmen ke dalam elemen board
}
