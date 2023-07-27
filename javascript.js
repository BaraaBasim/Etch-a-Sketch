const container = document.getElementById("gridContainer");
let boxCount = 60 * 60;
let incremental = boxCount / 60;
console.log(container.style.width);

for (let i = 0; i < boxCount; i++) {
  const div = document.createElement("div");
  let width = (660 / boxCount) * incremental - 1; // minus 1 to make the box smaller than the container
  let height = (660 / boxCount) * incremental - 1;
  div.style.width = `${width}px`;
  div.style.height = `${height}px`;
  console.log(div.style.width);
  console.log(div.style.height);
  div.classList.add("gridBox");
  container.appendChild(div);
}
