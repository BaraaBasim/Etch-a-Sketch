const container = document.getElementById("gridContainer");
let boxCount = 100 * 100;
console.log(container.style.width);


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

function paintBlack(e){
    e.target.classList.add('black');
}

let gridBoxes = document.querySelectorAll('.gridBox')
gridBoxes.forEach(gridBox => {
  gridBox.addEventListener('mouseover', paintBlack)
});