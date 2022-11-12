const grid = document.getElementById('grid')

let gridSize = 128

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("tr")
    row.id = "row" + i;
    grid.appendChild(row)
    let rowI = document.getElementById("row" + i);

    for(let j = 0; j < gridSize; j++) {
      let column = document.createElement("td")
      column.addEventListener("mouseover",draw)
      column.id = "column" + j
      rowI.appendChild(column)
    }
  }
}

createGrid()

const pixel = document.querySelectorAll('td')

function draw() {
  this.setAttribute('class', 'filled')
}