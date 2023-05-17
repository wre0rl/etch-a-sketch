const ROW = 16;
const COLUMN = 16;

const container = document.querySelector('.container');

for (let i = 1; i <= COLUMN; i++) {
  const column = document.createElement('div');
  column.setAttribute('class', 'column');
  column.setAttribute('id', 'column-' + i);
  container.appendChild(column);
  
  for (let i = 0; i < ROW; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid');
    div.setAttribute('id', 'grid-' + i);
    column.appendChild(div);
  }
}
