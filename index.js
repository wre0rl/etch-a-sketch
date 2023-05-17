const ROW = 16;
const COLUMN = 16;

const sketchContainer  = document.querySelector('.sketch-container ');

for (let i = 1; i <= COLUMN; i++) {
  const column = document.createElement('div');
  column.setAttribute('class', 'column');
  column.setAttribute('id', 'column-' + i);
  sketchContainer.appendChild(column);
  
  for (let i = 0; i < ROW; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid');
    div.setAttribute('id', 'grid-' + i);
    column.appendChild(div);
  }
}

// Change the grid color by clicking and hovering the mouse
const grid = document.querySelectorAll('.grid');

let isMouseDown = false;

grid.forEach(el => {
  el.addEventListener('mousedown', () => {
    isMouseDown = true;
  });

  el.addEventListener('mousemove', () => {
    if (isMouseDown) {
      el.classList.add('trail');
    }
  });

  el.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
});

grid

// Clear the grid
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
  grid.forEach(el => {
    el.classList.remove('trail');
  });
});