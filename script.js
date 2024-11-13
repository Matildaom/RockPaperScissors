function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
        //^Array??

        //Tells what computers choice is
    document.getElementById("computerChoice").innerHTML= computerChoice;
   

    let outcome = '';

    if (playerChoice == computerChoice) {
        outcome = "That's a draw!!";
    } else if (
        (playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'paper')
    ) {
        outcome = "You win!";
    } else {
        outcome = "You lose!";
    }

    document.getElementById('outcome').textContent = outcome;
}
