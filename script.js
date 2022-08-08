window.onload = function() {
  const colorBlack = document.querySelector('#color-black');
  colorBlack.classList.add('selected');
  //const colorPalette = document.querySelector('#color-palette'); 
  //colorPalette.addEventListener('click', send);
  
  //function send(event) {
    //let colorSelected = event.target.classList.replace('color', 'selected');

  //}

  
  function generateColors() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255); 
    const rgb = 'rgb' + '(' + r + ', ' + g + ', ' + b + ')';
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

  function createBoard() {
    const pai = document.body;
    const board = document.createElement('div');
    board.id = 'pixel-board';
    pai.appendChild(board);
    return board;
  }

  function boardSize(size) {
    for (let i = 1; i <= size; i += 1) {
      const boardWidth = document.createElement('div');
      for (let ind = 1; ind <= size; ind += 1) {
        const boardHeight = document.createElement('div');
        boardHeight.className = 'pixel';
        boardWidth.appendChild(boardHeight);
      }
      createBoard().appendChild(boardWidth);
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

}
