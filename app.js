const grid = document.querySelector('.container');

let slideText = document.querySelector('.slidetext');

let drawButton = document.getElementById('draw');
let eraseButton = document.getElementById('erase');
let rainbowButton = document.getElementById('rainbow');

eraseButton.addEventListener('click', () => {
    drawButton.value = "inactive";
    drawButton.classList.add('inactive');
    drawButton.classList.remove('active');
    eraseButton.value = "active";
    eraseButton.classList.add('active');
    eraseButton.classList.remove('inactive');
    rainbowButton.value = "inactive";
    rainbowButton.classList.add('inactive');
    rainbowButton.classList.remove('active');
});

rainbowButton.addEventListener('click', () => {
    drawButton.value = "inactive";
    drawButton.classList.add('inactive');
    drawButton.classList.remove('active');
    eraseButton.value = "inactive";
    eraseButton.classList.add('inactive');
    eraseButton.classList.remove('active');
    rainbowButton.value = "active";
    rainbowButton.classList.add('active');
    rainbowButton.classList.remove('inactive');
});

drawButton.addEventListener('click', () => {
    drawButton.value = "active";
    drawButton.classList.add('active');
    drawButton.classList.remove('inactive');
    eraseButton.value = "inactive";
    eraseButton.classList.add('inactive');
    eraseButton.classList.remove('active');
    rainbowButton.value = "inactive";
    rainbowButton.classList.add('inactive');
    rainbowButton.classList.remove('active');
});

// This allows grid to automatically be created once the application is open
let startBoxes = 256;
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
for(let i = 0; i < startBoxes; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);

    // function blackCell() {
    //     cell.classList.add('black');
    // }

    // function whiteCell() {
    //     cell.classList.remove('black');
    // }
    cell.addEventListener('click', colorChange);
    
    // if(drawButton.value === "active" && eraseButton.value === "inactive") {
    //     cell.addEventListener('click', blackCell);
    // } else if(eraseButton.value === "active" && drawButton.value === "inactive") {
    //     cell.removeEventListener('click', blackCell);
    //     cell.addEventListener('click', whiteCell);
    // }
    
}

// Once the slider value in HTML is switched, this function changes grid size and allows
// user to draw in grid
function slideValue(newVal) {
    grid.innerHTML = '';
    let size = document.getElementById('slider').value;
    let boxes = size * size;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < boxes; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    
        cell.addEventListener('click', colorChange);
    }

    slideText.textContent = `${size} x ${size}`;
}

// Three different color options depending on which button is active.
function colorChange(e) {
    if(eraseButton.value === 'active') {
        e.target.style.backgroundColor = '#F5F5F5';
    } else if(drawButton.value === 'active') {
        e.target.style.backgroundColor = '#222222';
    } else if(rainbowButton.value === 'active') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}