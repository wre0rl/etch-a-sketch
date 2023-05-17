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

// Change the div color by hovering the mouse
const trail = document.querySelectorAll('.grid');

trail.forEach(el => {
  el.addEventListener('mouseover', () => {
    el.classList.add('trail');
  });
});