window.onload = function () {
  function associateColor() {
    const color = document.getElementsByClassName('color');
    for (let i = 1; i < color.length; i += 1) {
      color[i].style.backgroundColor = generateColors();
    }
    return color;
  }
  console.log(associateColor());

  function generateColors() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = 'rgb' + '(' + r + ', ' + g + ', ' + b + ')';
    return rgb;
  }

  function createBoard() {
    let pai = document.body;
    let board = document.createElement('div');
    board.id = 'pixel-board';
    pai.appendChild(board);
    return board;
  }

  function boardSize(elements) {
    for (let i = 1; i <= elements; i += 1) {
      let boardWidth = document.createElement('div');
      for (let ind = 1; ind <= elements; ind += 1) {
        let boardHeight = document.createElement('div');
        boardHeight.className = 'pixel';
        boardWidth.appendChild(boardHeight);
      }
      createBoard().appendChild(boardWidth);
    }
  }
  boardSize(5);

  function styleChanges() {
    let pixels = document.getElementsByClassName('pixel');
    for (let elements of pixels) {
      elements.style.width = '40px';
      elements.style.height = '40px';
      elements.style.border = '1px solid black';
    }
    return elements;
  }
  console.log(styleChanges());
}
