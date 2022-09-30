const bod = document.querySelector('.container');
for (let i = 1; i <= 16; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('row');
    bod.appendChild(newDiv);
    for (let i = 1; i <= 16; i++) {
        let cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.style.backgroundColor = 'black';
        newDiv.appendChild(cellDiv);
    }
}