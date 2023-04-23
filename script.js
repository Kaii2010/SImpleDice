//Random num generator

function roll() {
    renderImg();
    // winnerDisplay();


}

function renderImg() {
    let randomNum1 = Math.floor((Math.random() * 6 + 1));
    let randomNum2 = Math.floor((Math.random() * 6) + 1);

    //control flow, DOM
    switch (randomNum1) {
        case 1:
            document.querySelector(".img1").setAttribute("src", "images/dice1.png");
            break;
        case 2:
            document.querySelector(".img1").setAttribute("src", "images/dice2.png");
            break;
        case 3:
            document.querySelector(".img1").setAttribute("src", "images/dice3.png");
            break;
        case 4:
            document.querySelector(".img1").setAttribute("src", "images/dice4.png");
            break;
        case 5:
            document.querySelector(".img1").setAttribute("src", "images/dice5.png");
            break;
        case 6:
            document.querySelector(".img1").setAttribute("src", "images/dice6.png");
            break;
    }

    //Img for player2
    switch (randomNum2) {
        case 1:
            document.querySelector(".img2").setAttribute("src", "images/dice1.png");
            break;
        case 2:
            document.querySelector(".img2").setAttribute("src", "images/dice2.png");
            break;
        case 3:
            document.querySelector(".img2").setAttribute("src", "images/dice3.png");
            break;
        case 4:
            document.querySelector(".img2").setAttribute("src", "images/dice4.png");
            break;
        case 5:
            document.querySelector(".img2").setAttribute("src", "images/dice5.png");
            break;
        case 6:
            document.querySelector(".img2").setAttribute("src", "images/dice6.png");
            break;
    }

    if (randomNum1 === randomNum2) {
        document.querySelector(".winner-text").textContent = "Draw!"
    }
    else if (randomNum1 > randomNum2) {
        document.querySelector(".winner-text").textContent = "🚩 Player 1 wins!"
    }
    else {
        document.querySelector(".winner-text").textContent = "Player 2 wins! 🚩"
    }
}



//Comparing two nums and render winner text


