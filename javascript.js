const container = document.getElementById("gridContainer");

// this global variable gets updated by the getRangeSliderValue function
let boxCount = 30 * 30;
let isShadow = false;
let isRainbow = false;
function getRangeSliderValue(e) {
  boxCount = e.target.value ** 2;
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  updateRangeSliderPara(boxCount);
  createGrid(boxCount);
  return boxCount;
}
// Update the grid size according to the range slider
let range = document.getElementById("myRange");
range.addEventListener("click", getRangeSliderValue);

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  createGrid(boxCount);
}

const clear = document.getElementById("clear");
clear.addEventListener("click", clearGrid);

function updateRangeSliderPara(boxCount) {
  const p = document.querySelector(".sliderPara");
  p.textContent = `${Math.sqrt(boxCount)} x ${Math.sqrt(boxCount)}`;
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

createGrid(boxCount);
function paintBlack(e) {
  e.target.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
}

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgb(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

function paintRainbow(e) {
  let color = random_rgba();
  // set background color of element to rainbow
  e.target.style.backgroundColor = color;
}

// function paintShadow(e) {
//   let style = window.getComputedStyle(e.target);
//   let color = style.backgroundColor

//   let alpha = parseFloat(color.split(',')[3]);
//   if (alpha < 1.0){
//     color = 'rgba(0, 0, 0, ' + (alpha = alpha + 0.1) + ')';
//     e.target.style.backgroundColor = color
//   }
// }

function paintShadow(e) {
  let style = window.getComputedStyle(e.target);
  let color = style.backgroundColor;
  let alpha = 0.1;
  if (color.startsWith("rgba")) {
    alpha = parseFloat(color.split(",")[3]);
  } else {
    alpha = 0.1;
  }
  if (alpha < 1.0) {
    alpha += 0.1;
    color = color.replace(/[\d\.]+\)$/g, alpha + ")");
    e.target.style.backgroundColor = color;
  }
}

// TODO: Event Delegation
// function assignEventListeners() {
//   let gridBoxes = document.querySelectorAll(".gridBox");
//   gridBoxes.forEach((gridBox) => {
//     if (isRainbow) {
//       gridBox.removeEventListener("mouseover", paintShadow);
//       gridBox.removeEventListener("mouseover", paintBlack);
//       gridBox.addEventListener("mouseover", paintRainbow);
//     } else if (isShadow) {
//       gridBox.removeEventListener("mouseover", paintRainbow);
//       gridBox.removeEventListener("mouseover", paintBlack);
//       gridBox.addEventListener("mouseover", paintShadow);
//     } else {
//       gridBox.removeEventListener("mouseover", paintShadow);
//       gridBox.removeEventListener("mouseover", paintRainbow);
//       gridBox.addEventListener("mouseover", paintBlack);
//     }
//   });
// }
function assignEventListeners() {
  let container = document.getElementById("gridContainer");
  container.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("gridBox")) return;
    if (isRainbow) {
      paintRainbow(e);
    } else if (isShadow) {
      paintShadow(e);
    } else {
      paintBlack(e);
    }
  });
}
// toggle isRainbow
// maybe there's a better way to do this using the toggle event property
const rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener("click", () => {
  if (isRainbow) {
    isRainbow = false;
  } else {
    isShadow = false;
    isRainbow = true;
  }
});

const shadowBtn = document.getElementById("shadow");
shadowBtn.addEventListener("click", () => {
  if (isShadow) {
    isShadow = false;
  } else {
    isRainbow = false;
    isShadow = true;
  }
});

assignEventListeners();

// const gameStatus = {
//   status: 'black', // 'black' || 'shadow' || ''
//   boxCount:
// }

// function init() {
//   assignEventListeners()

// }

// function play() {
//   gameStatus.status = ''
// }

// function destroy() {

// }

// export const etchGame = {
//   init,
//   play,
//   destroy
// }
