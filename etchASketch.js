


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
    let isDrawing = false;
    document.querySelectorAll('.column').forEach(element => {
        element.addEventListener('mousedown', () => {
            isDrawing = true;
            element.style.backgroundColor = 'black';
        });
        element.addEventListener('mouseup', () => {
            isDrawing =false;
            element.style.backgroundColor = 'black';
        });
        element.addEventListener('mousemove',() => {
            if(isDrawing){
                element.style.backgroundColor = 'black';
            }
        })
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
let isDrawing = false;
    document.querySelectorAll('.column').forEach(element => {
        element.addEventListener('mousedown', () => {
            isDrawing = true;
            element.style.backgroundColor = getRandomColor();
        });
        element.addEventListener('mouseup', () => {
            isDrawing = false;
            element.style.backgroundColor = getRandomColor();
        });
        element.addEventListener('mousemove',() =>{
            if(isDrawing){
                element.style.backgroundColor = getRandomColor();
            }
        })
    });
    


}
//eraser
function eraser(){
    let isDrawing =false;
    document.querySelectorAll('.column').forEach(element => {
        element.addEventListener('mousedown', () => {
            isDrawing = true;
            element.style.backgroundColor = '#C0C0C0';
        });
        element.addEventListener('mouseup', () => {
            isDrawing = false;
            element.style.backgroundColor = '#C0C0C0';
        });
        element.addEventListener('mousemove',() => {
            if(isDrawing){
                element.style.backgroundColor ='#C0C0C0';
        }
        })
    });
}

// Initialize the grid
createGrid(10);

//color wheel
//shading
//slider
var slider = document.getElementById("myRange");
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    createGrid(this.value)
  }