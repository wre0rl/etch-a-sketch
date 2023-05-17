const sketchContainer  = document.querySelector('.sketch-container');

let grids ;

function drawGrids(row, col) {
  for (let i = 1; i <= col; i++) {
    const column = document.createElement('div');
    column.setAttribute('class', 'column');
    column.setAttribute('id', 'column-' + i);
    sketchContainer.appendChild(column);
    
    for (let i = 0; i < row; i++) {
      const div = document.createElement('div');
      div.setAttribute('class', 'grid');
      div.setAttribute('id', 'grid-' + i);
      column.appendChild(div);
    }
  }
}

// Change the grid color by clicking and hovering the mouse
function getGrids() {
  grids = document.querySelectorAll('.grid');

  let isMouseDown = false;

  grids.forEach(grid => {
    grid.addEventListener('mousedown', () => {
      isMouseDown = true;
      grid.classList.add('trail');
    });

    grid.addEventListener('mousemove', () => {
      if (isMouseDown) {
        grid.classList.add('trail');
      }
    });

    grid.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  });
}

function loadGrids(row, col) {
  drawGrids(row, col);
  getGrids();
}

loadGrids(32, 32); // First load


// Resize the grids
const resize = document.querySelector('#resize');

resize.addEventListener('click', () => {
  let size = +(prompt('Type the grid sizes. Max: 64'));
  if (size) { // Check if it's a number
    if (size > 64) {
      alert("You can't have more than 64 grids!")
    } else {
      sketchContainer.textContent = ''; // Remove the sketch child element DOM
      loadGrids(size, size);
    }
  } else {
    alert('NaN');
  }
});

// Clear the grids
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
  grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.classList.remove('trail');
  });
});