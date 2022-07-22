const grid = document.querySelector('.container');

let slideText = document.querySelector('.slidetext');

let startBoxes = 256;
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
for(let i = 0; i < startBoxes; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);

    cell.addEventListener('click', () => {
        cell.classList.add('black');
    });
}

function slideValue(newVal) {
    grid.innerHTML = '';
    let size = document.getElementById('slider').value;
    let boxes = size * size;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < boxes; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    
        cell.addEventListener('click', () => {
            cell.classList.add('black');
        });
    }

    slideText.textContent = `${size} x ${size}`;
}