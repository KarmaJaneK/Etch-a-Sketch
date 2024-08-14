

function createGrid (rows, columns){
   const container = document.querySelector('.container');

    for (let i = 0; i < rows; i ++){
    const gridSquareRow = document.createElement('div');
    gridSquareRow.classList.add('row');
    gridSquareRow.textContent = "row";
    container.appendChild(gridSquareRow);
    }
for (let j = 0; j  < columns; j++){
    const gridSquareColumn = document.createElement('div');
    gridSquareColumn.classList.add('column');
    gridSquareColumn.textContent = "Column";
    container.appendChild(gridSquareColumn);}
}
createGrid(3,4);