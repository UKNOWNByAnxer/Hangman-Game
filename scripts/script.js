const hangmanImage = document.querySelector('.hangman-box img');
const keyboardDiv = document.querySelector('.keyboard');
const wordDisplay = document.querySelector('.word-display');
const guessesText = document.querySelector('.guesses-text b');
const gameModal = document.querySelector('.game-modal');
const playAgainBtn = document.querySelector('.play-again');

const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    document.querySelector('.hint-text b').innerText = hint;
    wordDisplay.innerHTML = word.split('').map(() => `<li class="letter"></li>`).join('');
    return word;
    //    console.log(currentWord);
}

let currentWord = getRandomWord(), wrongGuestCount = 0, correctLetters = [];
const maxWrongGuestCount = 6;

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? 'You found the word!' : 'Game Over! The word was ' + currentWord;
        gameModal.querySelector('img').src = `./img/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector('h4').innerText = `${isVictory ? 'Congrats!' : 'Game Over!'}`;
        gameModal.querySelector('p').innerHTML = `${modalText} <b>${currentWord}</b>`;

        gameModal.classList.add('show');
    }, 300);
}

const initGame = (button, letter) => {
    if (currentWord.includes(letter)) {
        [...currentWord].forEach((l, i) => {
            if (l === letter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll('li')[i].innerText = letter;
                wordDisplay.querySelectorAll('li')[i].classList.add('guessed');
            }
        });
    }else{
        wrongGuestCount++;
        hangmanImage.src = `./img/hangman-${wrongGuestCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuestCount} / ${maxWrongGuestCount}`;
    if (wrongGuestCount === maxWrongGuestCount) return gameOver(false)
    if (correctLetters.length === currentWord.length) return gameOver(true)
}


// Creando botones de teclado
for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => {
        initGame(e.target, String.fromCharCode(i));
    })
}

playAgainBtn.addEventListener('click', () => {
    currentWord = getRandomWord();
    wrongGuestCount = 0;
    correctLetters = [];
    hangmanImage.src = './img/hangman-0.svg';
    guessesText.innerText = '0 / 6';
    [...wordDisplay.querySelectorAll('li')].forEach(li => li.classList.remove('guessed'));
    keyboardDiv.querySelectorAll('button').forEach(button => button.disabled = false);
    gameModal.classList.remove('show');
})