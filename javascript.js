const container = document.getElementById("gridContainer");
let boxCount = 30 * 30;

// Update the grid size according to the range slider
let range = document.getElementById("myRange");
range.addEventListener('click', function(e) {
  let boxCount = e.target.value ** 2;
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  updateRangeSliderPara(boxCount)
  createGrid(boxCount)
  assignEventListeners()
})


function clearGrid(){
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

const clear = document.getElementById('clear')
clear.addEventListener('click', clearGrid)

function updateRangeSliderPara(boxCount){
  const p = document.querySelector('.sliderPara');
  p.textContent = `${Math.sqrt(boxCount)} x ${Math.sqrt(boxCount)}`
}

function createGrid(count) {
  container.style.gridTemplateColumns = `repeat(${Math.sqrt(count)}, 1fr`;
  container.style.gridTemplateRows = `repeat(${Math.sqrt(count)}, 1fr`;
  
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.classList.add("gridBox");
    container.appendChild(div);
  }
}

createGrid(boxCount)
assignEventListeners()
function paintBlack(e){
  e.target.classList.add('black');
}

function assignEventListeners(){
  let gridBoxes = document.querySelectorAll('.gridBox')
  gridBoxes.forEach(gridBox => {
    gridBox.addEventListener('mouseover', paintBlack)
  });
}
