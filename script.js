window.onload = function colorBlack() {
  const colorBlack = document.querySelector('#color-black');
  colorBlack.classList.add('selected');
}

function send(event) {
  for (const elements of colorPalette) {
    if (elements.classList.contains('selected')) {
      elements.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

const colorPalette = document.querySelectorAll('.color');
for (const color of colorPalette) {
  color.addEventListener('click', send);
}

function generateColors() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r},${g}, ${b})`;
  return rgb;
}

function associateColor() {
  const color = document.querySelectorAll('.color');
  for (let i = 1; i < color.length; i += 1) {
    color[i].style.backgroundColor = generateColors();
  }
  return color;
}
console.log(associateColor());

function createBtn() {
  const pai = document.body;
  const btn = document.createElement('button');
  btn.id = 'clear-board';
  btn.innerText = 'Limpar';
  btn.type = 'reset';
  pai.appendChild(btn);
}
console.log(createBtn());

function createBoard() {
  const pai = document.body;
  const board = document.createElement('div');
  board.id = 'pixel-board';
  pai.appendChild(board);
  return board;
}
createBoard();

function boardSize(size) {
  const board = document.querySelector('#pixel-board');
  for (let i = 1; i <= size; i += 1) {
    const boardWidth = document.createElement('div');
    for (let ind = 1; ind <= size; ind += 1) {
      const boardHeight = document.createElement('div');
      boardHeight.className = 'pixel';
      boardWidth.appendChild(boardHeight);
    }
    board.appendChild(boardWidth);
  }
}
boardSize(5);

function styleChanges() {
  const pixels = document.querySelectorAll('.pixel');
  for (const elements of pixels) {
    elements.style.width = '40px';
    elements.style.height = '40px';
    elements.style.border = '1px solid black';
  }
  return pixels;
}
console.log(styleChanges());

const boardPixels = document.querySelectorAll('.pixel');
for (let pixels of boardPixels) {
  pixels.addEventListener('click', coloredBoard);
}

function coloredBoard(event) {
  const pixel = document.querySelector('.selected');
  const bgPixelSelected = getComputedStyle(pixel).backgroundColor;
  event.target.style.backgroundColor = bgPixelSelected;
}

const btn = document.getElementById('clear-board');
btn.addEventListener('click', function () {
  const colorWhite = document.querySelectorAll('.pixel');
  for (const white of colorWhite) {
    white.style.backgroundColor = 'white';
  }
});
