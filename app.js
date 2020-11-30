// Get the players buttons objects
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// Get the reset button
const resetButton = document.querySelector('#reset');

// Select the score value
const winningScoreSelect = document.querySelector('#playto');

// Set the variables values
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
// Add score for player 1
p1.button.addEventListener('click', function() {
    updateScore(p1, p2)
})
// Add score for player 2 
p2.button.addEventListener('click', function() {
    updateScore(p2, p1)
})

// Define reset function
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false; 
    }
}

// Get the selected score value and reset the game
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

// Reset the game
resetButton.addEventListener('click', reset)