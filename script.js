const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

container.style.setProperty('--grid-rows', 16);
container.style.setProperty('--grid-cols', 16);
for (c = 0; c < (16 * 16); c++) {
  let cell = document.createElement("div");
  container.appendChild(cell).className = "grid-item";
};


hoverEfekt();


function hoverEfekt(){
  var allCels = document.querySelectorAll('.grid-item' );
  allCels.forEach( element => {
    element.addEventListener('mouseover', changeColor )
  });
};  


function changeColor(){
    this.classList.add('tileHovered')
};

function resetResize(){
  newSize = prompt('Chose a grid size from 1 to 100', '16')
  if(newSize <= 0 || newSize > 100){prompt('Error! Chose a grid size from 1 to 100', '16') }
  else{
    document.getElementById('container').textContent = '';   //removes all Divs in a parent Div
    makeRows(newSize, newSize);
    hoverEfekt();
  };
};    

