const container = document.getElementById("gridContainer");
let boxCount = 64;
// let range = document.getElementById("myRange");
// range.addEventListener('click', setBoxCount)
// function setBoxCount(e){
//   e.target.value = parseInt(range.getAttribute("value"));
// }
// let boxCount = document.addEventListener('click', setBoxCount);

let range = document.getElementById("myRange");
range.addEventListener('click', function(e) {
  let boxCount = e.target.value;
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createGrid(boxCount)
})







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