// console.log('JS FUNZIONA');

const gridElement = document.querySelector('.grid');
// console.log(gridElement);

const size = 10;
const numOfCells = size * size;

const playBtnElement = document.querySelector('.play');
playBtnElement.addEventListener('click', function () {
    
    for(let i = 0; i < numOfCells; i++) {
        const num = i + 1;
        // console.log(num);
        
        // per poter utilizzare l'addEventListener bisogna creare l'elemento div
        // come oggetto, non come stringa:
        const cellElement = document.createElement('div'); //object
        cellElement.className = 'cell';
        cellElement.innerHTML = num;
        
        //appendo tutto questo all'elemento grid
        gridElement.append(cellElement);

        //creiamo l'evento per cui al click sulla casella, modifica
        //il colore di questa e stampa in console il numero della cella cliccata

        cellElement.addEventListener('click', function(){
            //stampiamo in console il numero della cella cliccata
            console.log('Hai cliccato la cella numero: ' + num);

            //aggiungo la classe all'html per cambiare il colore alla cella
            cellElement.classList.add('bg-blue');
        })
    }
})