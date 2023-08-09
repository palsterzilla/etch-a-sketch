const grid = document.querySelector(".grid");
const gridValue = document.querySelector(".grid-size");
const gridSize = document.querySelector(".range");
const gridRainbow = document.querySelector(".checkbox");
const btnApply = document.querySelector(".apply");
const btnReset = document.querySelector(".reset");
let squareSize = 8;

createGrid(squareSize);

function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = colorSelector()
  })

  return div;
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

btnApply.addEventListener("click", () => {
  squareSize = Number(gridSize.value);

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  createGrid(squareSize);
})

btnReset.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    box.style.backgroundColor = "rgb(244, 242, 222)";
  })
  
  gridValue.textContent = `${squareSize}x${squareSize}`;
  gridSize.value = squareSize;
})

gridSize.oninput = function() {
  let value = this.value;
  gridValue.textContent = `${value}x${value}`;
}

function colorSelector() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }

  if (gridRainbow.checked) {
    return 'rgb(' + color.join(', ') + ')';
  } else {
    return "rgb(233, 179, 132)";
  }
}