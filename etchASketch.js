

function createGrid (rows, columns){
   const container = document.querySelector('.container');

    for (let i = 0; i < rows; i ++){
    const gridSquareRow = document.createElement('div');
    gridSquareRow.classList.add('row');
    container.appendChild(gridSquareRow);
    
for (let j = 0; j  < columns; j++){
    const gridSquareColumn = document.createElement('div');
    gridSquareColumn.classList.add('column');
    gridSquareColumn.textContent = "Colum";
    gridSquareRow.appendChild(gridSquareColumn);}
}}



createGrid(100,100)

document.querySelectorAll('.row, .column').forEach(element =>{
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = 'black';
    });
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'black';
    });
});