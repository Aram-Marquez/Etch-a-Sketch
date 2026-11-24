const baseGrid = document.getElementById("drawingArea");
const input = document.getElementById("input");
const drawingArea = document.getElementById("drawingArea");
const form = document.getElementById("form");

let isGridActive = false;

form.addEventListener("submit", makeGrid);
drawingArea.addEventListener("mouseover", colorChange);

function makeGrid(event) {
  event.preventDefault();
  const size = input.value > 101 ? 100 : +input.value;
  input.value = "";
  input.focus();

  switch (isGridActive) {
    case true:
      drawingArea.innerHTML = "";
    case false:
      isGridActive = true;

      for (i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("rows");
        drawingArea.appendChild(row);

        for (j = 0; j < size; j++) {
          const pixel = document.createElement("div");
          pixel.classList.add("pixels");

          row.appendChild(pixel);
        }
      }
      break;
  }
}

function colorChange(event) {
  div = event.target.closest("div");
  if (!div.classList.contains("pixels")) return;
  div.style.background = `${random_rgba()}`;
  div.style.opacity = `${+div.style.opacity + 0.1}`;
}

function random_rgba() {
  const r = 0;
  const g = Math.round(Math.random() * 255);
  const b = 0;
  const a = 1;
  return `rgba(${r},${g},${b},${a})`;
}
