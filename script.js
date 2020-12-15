const container = document.querySelector('#container');
let gridSize;
const sixteen = document.getElementById('size16');
const thirtytwo = document.getElementById('size32');
const clearGrid = document.getElementById('clearSelect');

sixteen.addEventListener('click', (e) => {
    gridSize = 16;
    addDivs(gridSize);
});

thirtytwo.addEventListener('click', (e) => {
    gridSize = 32;
    addDivs(gridSize);
});

clearGrid.addEventListener('click', (e) => {
    clearSquares();
});

function addDivs (gridSize) {
  container.style.setProperty('--grid-rows', gridSize);
  container.style.setProperty('--grid-cols', gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
  }hoverColor();
}

function hoverColor() {
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = `${randomColor()}`;
    });
  });
}

//function that creates a random color
let randomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
