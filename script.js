const bod = document.querySelector('.container');
const sizeButton = document.querySelector('.changeSize');
let currentSize = 16;
const handleSizeButton = () => {
    let newSize = prompt("choose a size, max value is 100");
    clearGrid();
    setUpGrid(newSize);
    currentSize = newSize;
}
sizeButton.addEventListener('click', handleSizeButton);
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);



const colorOnClick = (event) => {
    event.preventDefault();
    if (event.type === 'mouseover' && !mouseDown) return
    event.currentTarget.style.backgroundColor = 'black';
}

const changeSize = (size) => {
    clearGrid();
}


const clearGrid = () => {
    bod.innerHTML = '';
}

const resetGrid = () => {
    clearGrid();
    setUpGrid(currentSize);
}
const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', resetGrid);
const setUpGrid = (size) => {
    for (let i = 1; i <= size; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('row');
        bod.appendChild(newDiv);

        for (let i = 1; i <= size; i++) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.addEventListener('mouseover', colorOnClick);
            cellDiv.addEventListener('mousedown', colorOnClick);
            newDiv.appendChild(cellDiv);
        }
    }
}

setUpGrid(16);