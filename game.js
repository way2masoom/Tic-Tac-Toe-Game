console.log("game is on");

document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector("#reset-btn");
    let msgContainer = document.querySelector(".msg-container");
    let msg = document.querySelector("#msg");
    let newGameBtn = document.querySelector("#new-btn");

    let turnO = true; // Player O, Player X


    // Wining pattern of The Game
    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];


    // Function to reset the btn
    const resetGame = () => {
        turnO = true;
        enableBoxes();
        msgContainer.classList.add("hide")

    }

    // Box click Function
    boxes.forEach((box) => {
        box.addEventListener("click", () => {

            if (turnO) { // player O turn
                box.innerText = "O"
                turnO = false;

            } else {
                box.innerText = "X" // Player X
                turnO = true;
            }

            box.disabled = true;
            checkWinner();
        });
    });


    // function to disable the boxes after winner is found
    const disableBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = true; // Disable all boxes
        });
    }

    const enableBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = false; // Enable all boxes
            box.innerHTML = "";
        });
    }
    // Function to show the winner
    const showWinner = (winner) => {
        msg.innerText = `Congratulations! You are the Winner ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

    // Check Winner
    const checkWinner = () => {
        for (let pattern of winPatterns) {

            // console.log(
            //     pattern[0],
            //     pattern[1],
            //     pattern[2]
            // );

            // console.log(
            //     boxes[pattern[0]].innerText,
            //     boxes[pattern[1]].innerText,
            //     boxes[pattern[2]].innerText
            // );

            // Finding the position of the boxes
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            // checking the condition for winner 
            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    console.log("Winner", pos1Val);
                    showWinner(pos1Val);
                }
            }
        }

    }

    // Button functionality
    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);

});

