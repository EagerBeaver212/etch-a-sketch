let mouseClicked = false
document.querySelector('body').addEventListener('mousedown', () => {mouseClicked = true})
document.querySelector('body').addEventListener('mouseup', () => {mouseClicked = false})

const grid = document.getElementById('grid')
const clearButton = document.getElementById('clear')
const sizeSlider = document.getElementById('sizeSlider')
let gridSize = sizeSlider.value
let colorPicker = document.getElementById('colorPicker')
let color = colorPicker.value

let updateSize = () => displaySize.innerHTML = (sizeSlider.value + " x " + sizeSlider.value)

clearButton.addEventListener('click', resetGrid)
sizeSlider.addEventListener('input', updateSize)

function createGrid(gridSize) {
  grid.innerHTML = ''
  gridSize = sizeSlider.value
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("tr")
    row.id = "row" + i;
    grid.appendChild(row)
    let rowI = document.getElementById("row" + i);

    for(let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("td")
      pixel.addEventListener('mousedown', fillPixel)
      pixel.addEventListener('mouseenter', fillPixel)
      pixel.id = "pixel" + j
      rowI.appendChild(pixel)
      pixel.ondragstart = () => {
        return false;
      };
      pixel.classList.add("bordered");
    }
  }
}

createGrid(gridSize)

function resetGrid() {
  createGrid(gridSize)
}

function fillPixel() {
  if (mouseClicked == true) {
    this.style.backgroundColor = color
  }
}

function changeColor(choice) {
  color = choice
}

function toggleGrid() {
  let pixel = document.querySelectorAll("td");
  console.log(pixel)
  pixel.forEach(item => item.classList.toggle('bordered'));
}
