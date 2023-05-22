const colorBtn = document.getElementById("colorBtn");
const rgbBtn = document.getElementById("rgbBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const colorPicker = document.getElementById("colorPicker");
let color = colorPicker.value;

document.addEventListener("DOMContentLoaded", function () {
  colorPicker.addEventListener("change", () => setColor("color"));
  colorBtn.addEventListener("click", () => setColor("color"));
  rgbBtn.addEventListener("click", () => setColor("rgb"));
  eraserBtn.addEventListener("click", () => setColor("eraser"));
  clearBtn.addEventListener("click", clearBoard);

  createBoard(16);

  // to change board value using slider
  const output = document.getElementById("rangeOutput");
  const input = document.getElementById("rangeInput");
  input.addEventListener("input", (event) => {
    const size = input.value; // to get the input value (value dari slider)
    createBoard(size);
    output.innerHTML = `Board: ${event.target.value} x ${event.target.value}`;
  });
});

function createBoard(size) {
  const board = document.getElementById("board");
  const fragment = document.createDocumentFragment(); // create DOM fragment

  board.innerHTML = ""; // remove all previous element
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    fragment.appendChild(div); // add div element to fragment
  }

  board.appendChild(fragment); // add fragment to board
}

function colorDiv() {
  if (color === "rgb") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else if (color === "eraser") {
    this.style.backgroundColor = "";
  } else {
    this.style.backgroundColor = colorPicker.value;
  }
}

function setColor(colorChoice) {
  // color = colorChoice;
  if (colorChoice === "color") {
    color = colorPicker.value;
  } else {
    color = colorChoice;
  }

  // Remove the selected class from all buttons
  colorBtn.classList.remove("button-selected");
  rgbBtn.classList.remove("button-selected");
  eraserBtn.classList.remove("button-selected");

  // Add the selected class to the active button
  if (colorChoice === "color") {
    colorBtn.classList.add("button-selected");
  } else if (colorChoice === "rgb") {
    rgbBtn.classList.add("button-selected");
  } else if (colorChoice === "eraser") {
    eraserBtn.classList.add("button-selected");
  }
}

function clearBoard() {
  const divs = document.querySelectorAll("#board div");
  divs.forEach((div) => {
    div.style.backgroundColor = "";
  });
}
