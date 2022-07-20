const grid = document.querySelector('.container');

let size = prompt('How big of grid');

for(let i = 0; i < size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
    console.log(`${i} time.`);

    cell.addEventListener('click', () => {
        cell.classList.add('black');
    });
}