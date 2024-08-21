//buttons

const buttons = document.querySelectorAll('button');

//remove the active class
function removeActiveClass(){
    buttons.forEach(button => button.classList.remove('active'));

}

//click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClass();
        button.classList.add('active');
    });
});

const container = document.querySelector('.container');

function createGrid() {
    container.innerHTML = '';

    const gridSize = parseInt(prompt("Please enter the number of squares per side (max 100):", 10));

    // Validate the input
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a valid positive number.");
        return;
    }
     // Set the CSS variable for grid size
     container.style.setProperty('--grid-size', gridSize);

    // Create grid squares
    const totalSquares = gridSize * gridSize; // Total number of squares in the grid
    for (let i = 0; i < totalSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('column');
        container.appendChild(gridSquare);
    }

    blackAndWhite(); // Call blackAndWhite after the grid is created
}

// Black and White mode function
function blackAndWhite() {
    document.querySelectorAll('.column').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = 'black';
        });
        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = 'black';
        });
    });
}

// Rainbow mode function
function rainbow() {
    const rainbowColors = [
        '#FF0000', // Red
        '#FF7F00', // Orange
        '#FFFF00', // Yellow
        '#00FF00', // Green
        '#0000FF', // Blue
        '#4B0082', // Indigo
        '#8B00FF'  // Violet
    ];

    function getRandomColor() {
        return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    }

    document.querySelectorAll('.column').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = getRandomColor();
        });
        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = getRandomColor();
        });
    });
    
    

}

// Initialize the grid
createGrid();

