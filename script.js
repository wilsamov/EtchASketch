//global variables
const container = document.querySelector('#container');
let gridSize = 16;

//function that creates specified number of
function addDivs (gridSize) {

}

for (let i = 0; i < gridSize * gridSize; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  container.appendChild(div);
}

//80's colors
let eightiesColor = function() {
  let colorList = ["00ffbf", "#00ffff", "#00bfff", "#0080ff", "#0040ff", "#0000ff", "#4000ff", "#8000ff", "#bf00ff", "#ff00ff", "#ff00bf", "#ff0080"];
  let color;
  let randomIndex = Math.floor(Math.random() * 11);
  color = colorList[randomIndex];
  console.log(color)
  return color;
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

//function that changes div color uponed being hovered
function hoverColor() {
  let item = document.querySelector('.grid-item');
  item.addEventListener('hover', (e) => {
    item.style.backgroundColor = `${randomColor}`;
  });
}

eightiesColor();