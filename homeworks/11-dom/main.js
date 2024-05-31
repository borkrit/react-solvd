const gridTable = document.querySelector('#grid-table');


for(let row =1; row<=30; row++ ){
    for(let col =1; col<=20; col++ ){
        const createDiv = document.createElement('div');
        createDiv.classList.add('cell');
        createDiv.dataset.row = row;
        createDiv.dataset.col = col;
        gridTable.append(createDiv)
    }
}

gridTable.addEventListener('click', (event) => {

    const {row,col} =event.target.dataset
    if(!event.shiftKey) {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.innerText=''
            cell.classList.remove('selected');
        });
    }

    event.target.innerText=`${col}/${row}`;
    event.target.classList.add('selected')

    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove( 'active-row', 'active-column');
    });

    document.querySelectorAll(`.cell[data-row="${row}"]`).forEach(cell => cell.classList.add('active-row'));
    document.querySelectorAll(`.cell[data-col="${col}"]`).forEach(cell => cell.classList.add('active-column'));
})