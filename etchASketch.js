


//button interactivity
const buttons = document.querySelectorAll('button');

function removeActiveClass(){
    buttons.forEach(button => button.classList.remove('active'));

}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClass();
        button.classList.add('active');
    });
});

const container = document.querySelector('.container');
//default grid
function createGrid(gridSize) {
    container.innerHTML = '';

    
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
//new grid
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const newSize = prompt("Enter a new grid size (max 100):");
        const gridSize = parseInt(newSize, 10);
        // Validate the input
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a valid positive number.");
        return;
    }
        createGrid(gridSize);
    } );
})

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
//rainbow 
    document.querySelectorAll('.column').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = getRandomColor();
        });
        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = getRandomColor();
        });
    });
    


}
//erasor
function eraser(){
    document.querySelectorAll('.column').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = '#C0C0C0';
        });
        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = '#C0C0C0';
        });
    });
}

// Initialize the grid
createGrid(10);