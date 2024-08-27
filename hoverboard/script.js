const container = document.getElementById('container');
const colors = [
    '#e74c3c', // Red
    '#8e44ad', // Purple
    '#3498db', // Blue
    '#e67e22', // Orange
    '#2ecc71', // Green
    '#f1c40f', // Yellow
    '#9b59b6', // Amethyst
    '#1abc9c', // Turquoise
    '#d35400', // Carrot
    '#34495e'  // Dark Blue Grey
  ];  
const SQUARES = 500;
const transitionDuration = 400;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));


    square.addEventListener('click', () => {
        setColor(square);
        square.style.transform = 'scale(1.5)';
        setTimeout(() => square.style.transform = 'scale(1)', transitionDuration);
    });

    container.appendChild(square);
}

function setColor(element) {
   const color = getRandomColor();
   element.style.background = color;
   element.style.boxShadow = `0 0 10px ${color}, 0 0 25px ${color}`;
}

function removeColor(element) {
   element.style.background = '#1d1d1d';
   element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('dblclick', resetColors);

function resetColors() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => removeColor(square));
}
