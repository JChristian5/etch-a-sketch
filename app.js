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
    console.log(eraseButton);
    console.log(drawButton);
    console.log(rainbowButton);
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
    console.log(eraseButton);
    console.log(drawButton);
    console.log(rainbowButton);
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
    console.log(eraseButton);
    console.log(drawButton);
    console.log(rainbowButton);
});

// This allows grid to automatically be created once the application is open
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
    
        cell.addEventListener('click', () => {
            cell.classList.add('black');
        });
    }

    slideText.textContent = `${size} x ${size}`;
}