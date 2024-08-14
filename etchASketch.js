

function createGrid (rows, columns){
   const container = document.querySelector('.container');
   container.innerHTML = '';

   const rowSize= parseInt(prompt("Please enter row size:", 10));
   const columnSize= parseInt(prompt("Please enter column size:", 10));
    
   // Validate the input
   if (isNaN(rowSize) || rowSize <= 0 || rowSize > 100) {
    alert("Please enter a valid positive number.");
    return;
   }
   if (isNaN(columnSize) || columnSize <= 0 || columnSize > 100) {
    alert("Please enter a valid positive number.");
    return;
   }

 for (let i = 0; i < rowSize; i ++){
    const gridSquareRow = document.createElement('div');
    gridSquareRow.classList.add('row');
    container.appendChild(gridSquareRow);
    
for (let j = 0; j  < columnSize; j++){
    const gridSquareColumn = document.createElement('div');
    gridSquareColumn.classList.add('column');
    gridSquareColumn.textContent = "Colum";
    gridSquareRow.appendChild(gridSquareColumn);}
} 
//black & white
function blackAndWhite(){
document.querySelectorAll('.column').forEach(element =>{
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = 'black';
    })
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'black';
        
    })
});}

function rainbow(){
//rainbow mode
// Define rainbow colors
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
document.querySelectorAll(' .column').forEach(element =>{
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = getRandomColor();
    });
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = getRandomColor()
    })})}};
