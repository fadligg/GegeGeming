val_c1 = 1;
val_c2 = 1;
val_c3 = 1;
val_c4 = 1;
val_c5 = 1;
val_c6 = 1;
val_c7 = 1;
turn = 1;

function check(player) {
    setTimeout(() => {

        let winnerFound = false;

        // Check vertical win
        for (i = 1; i <= 7; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    location.reload();
                    winnerFound = true;
                    return;
                }
            }
        }

        // Check horizontal win
        for (i = 1; i <= 6; i++) {
            for (j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}`
                && document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}`
                && document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    location.reload();
                    winnerFound = true;
                    return;
                }
            }
        }

        // Check diagonal (bottom-left to top-right) win
        for (i = 1; i <= 4; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    location.reload();
                    winnerFound = true;
                    return;
                }
            }
        }

        // Check diagonal (top-left to bottom-right) win
        for (i = 1; i <= 4; i++) {
            for (j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` 
                && document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    location.reload();
                    winnerFound = true;
                    return;
                }
            }
        }

        // Check for draw
        if (!winnerFound) {
            checkForDraw();
        }
    }, 100);
}

function checkForDraw() {
    let allCellsFilled = true;
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 6; j++) {
            if (document.getElementById(`c${i}r${j}`).style.backgroundColor == "") {
                allCellsFilled = false;
                break;
            }
        }
    }
    if (allCellsFilled) {
        alert("It's a draw!");
        location.reload();
    }
}


document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {

        sum = eval(`val_${e.id}`);
        eval(`val_${e.id}++`);
        let element = document.getElementById("whosturn");


        if (sum <= 6 && turn % 2 != 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red";
            turn++;
            check('red');
            element.style.color = 'yellow';
            document.getElementById("whosturn").innerText = "Yellow's Turn";
        }
        
        else if (sum <= 6 && turn % 2 == 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "yellow";
            turn++;
            check('yellow');
            element.style.color = 'red';
            document.getElementById("whosturn").innerText = "Red's Turn";
        }
    })
})

