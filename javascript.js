const container = document.getElementById("gridContainer");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("gridBox");
  container.appendChild(div);
}
