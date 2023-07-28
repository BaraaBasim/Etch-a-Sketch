const container = document.getElementById("gridContainer");
let boxCount = 8 * 8;
console.log(container.style.width);



container.style.gridTemplateColumns = `repeat(${Math.sqrt(boxCount)}, 1fr`;
container.style.gridTemplateRows = `repeat(${Math.sqrt(boxCount)}, 1fr`;

for (let i = 0; i < boxCount; i++) {
  const div = document.createElement("div");
  console.log(div.style.width);
  console.log(div.style.height);
  div.classList.add("gridBox");
  container.appendChild(div);
}

function paintBlack(e){
    e.target.style.backgroundColor = 'black';
}

let gridBoxes = document.querySelectorAll('.gridBox')
gridBoxes.forEach(gridBox => {
  gridBox.addEventListener('mousedown', paintBlack)
  
});