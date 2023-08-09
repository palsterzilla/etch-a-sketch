const grid = document.querySelector(".grid");
const gridValue = document.querySelector(".grid-size");
const gridSize = document.querySelector("input");
const btnApply = document.querySelector(".apply")
let squareSize = 8;

createGrid(squareSize);

function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  
  div.addEventListener("mouseover", () => {
    div.classList.add('active');
  })

  return div;
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize))
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

gridSize.oninput = function() {
  let value = this.value;
  gridValue.textContent = `${value}x${value}`;
}