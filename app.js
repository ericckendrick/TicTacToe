let cells = document.querySelectorAll('.row > div'), clickCounter = 0;
let resetBtn = document.getElementById('reset');

cells.forEach(cell => {
    cell.addEventListener('click', cellClicked);
})

resetBtn.addEventListener('click', resetGame);

function cellClicked(event) {
    if (clickCounter >= 9) {
        resetGame();
    }
    else {
        if (event.target.classList.contains('clicked') == false) {
            clickCounter++;
            event.target.classList.add('clicked');

            if (clickCounter % 2 == true) {
                event.target.innerHTML = 'X';
            }
            else if (clickCounter % 2 == false) {
                event.target.innerHTML = 'O';
            }
            checkWinArr('X');
            checkWinArr('O');
        }
    }
}

function checkWinArr(mark) {
    let winningArr = [
        [cells[0], cells[1], cells[2]],
        [cells[3], cells[4], cells[5]],
        [cells[6], cells[7], cells[8]],
        [cells[0], cells[3], cells[6]],
        [cells[1], cells[4], cells[7]],
        [cells[2], cells[5], cells[8]],
        [cells[0], cells[4], cells[8]],
        [cells[6], cells[4], cells[2]]
    ];

    for (let i = 0; i < winningArr.length; i++) {

        [one, two, three] = [winningArr[i][0], winningArr[i][1], winningArr[i][2]];

        if (one.innerHTML == mark && two.innerHTML == mark && three.innerHTML == mark) {
            let winMess = 'congrats, player ' + mark + ' wins!';
            document.querySelector('.message').innerHTML = winMess;
        }
    }
    if (clickCounter == 9) {
        if (document.querySelector('.row > div').classList.contains('win') == false) {
            let winMess = 'draw! press reset to play again.';
            document.querySelector('.message').innerHTML = winMess;
        }
    }
}
function resetGame() {
    cells.forEach(cell => {
        cell.innerHTML = "";
    })
    cells.forEach(cell => {
        cell.classList.remove('win');
    })
    clickCounter = 0;
    document.querySelector('.message').textContent = "";

    let tile = document.querySelectorAll('.row > div');
    tile.forEach(element => {
        element.classList.remove('clicked');
    })
}




