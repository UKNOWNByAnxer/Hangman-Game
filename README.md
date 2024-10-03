+++markdown
# Hangman Game Documentation

## English Version

### Overview
This is a simple web-based implementation of the classic **Hangman Game** using HTML, CSS, and JavaScript. The game randomly selects a word from a predefined list, and the player must guess the word by selecting letters before running out of attempts.

### Files Structure
1. **index.html** - The main HTML file for the game layout.
2. **styles.css** - The stylesheet providing visual styling for the game.
3. **script.js** - The main JavaScript file containing the logic for the Hangman game.
4. **wordlist.js** - Contains the list of words and hints for the game.
5. **Images** - Hangman images and modal GIFs (`img/hangman-*.svg`, `img/lost.gif`, and `img/victory.gif`).

### Features
- **Random Word Selection**: The game randomly selects a word from a word list (defined in `wordlist.js`).
- **Visual Hangman**: The game displays a hangman figure that updates as the player makes incorrect guesses.
- **Keyboard Interaction**: Players use an on-screen keyboard to make guesses.
- **Hint Display**: A hint is displayed to help the player guess the word.
- **Game Over and Victory Modal**: If the player wins or loses, a modal appears with the final result.

### Code Breakdown

#### HTML (`index.html`)
- The HTML file sets up the structure for the game including:
    - A modal for the "Game Over" or "Victory" message.
    - Containers for the hangman image, word display, hint, and keyboard.
    - External CSS and JavaScript files are linked at the bottom of the document.

#### CSS (`styles.css`)
- Defines styles for the game layout:
    - **Responsive Design**: The game layout adapts to different screen sizes.
    - **Modal**: Styles the game-over modal with animation and transparency.
    - **Keyboard**: Styles the on-screen keyboard for letter selection.

#### JavaScript (`script.js`)
- Handles the game logic:
    - **getRandomWord**: Selects a random word and hint from the word list.
    - **initGame**: Manages the gameplay, updating the hangman image and checking if the guess is correct or wrong.
    - **gameOver**: Displays the modal for game completion (win or lose).
    - **Event Listeners**: Listens for button clicks to interact with the game (keyboard input and restart button).

### How to Play
1. The game displays a number of blanks representing the word to be guessed.
2. Use the on-screen keyboard to guess letters.
3. For each incorrect guess, the hangman figure appears piece by piece.
4. You lose if you reach 6 incorrect guesses before completing the word.
5. If you guess all the letters correctly, you win the game!

---

## Versión en Español

### Descripción General
Este es un juego clásico de **Ahorcado** implementado en la web utilizando HTML, CSS y JavaScript. El juego selecciona una palabra aleatoria de una lista predefinida y el jugador debe adivinar la palabra seleccionando letras antes de quedarse sin intentos.

### Estructura de Archivos
1. **index.html** - El archivo principal de HTML para el diseño del juego.
2. **styles.css** - La hoja de estilo que proporciona el diseño visual del juego.
3. **script.js** - El archivo principal de JavaScript que contiene la lógica del juego.
4. **wordlist.js** - Contiene la lista de palabras y pistas para el juego.
5. **Imágenes** - Imágenes del ahorcado y GIFs del modal (`img/hangman-*.svg`, `img/lost.gif`, y `img/victory.gif`).

### Funcionalidades
- **Selección Aleatoria de Palabra**: El juego selecciona aleatoriamente una palabra de una lista de palabras (definida en `wordlist.js`).
- **Ahorcado Visual**: El juego muestra una figura del ahorcado que se actualiza con cada intento incorrecto.
- **Interacción con el Teclado**: Los jugadores utilizan un teclado en pantalla para adivinar letras.
- **Mostrar Pista**: Se muestra una pista para ayudar al jugador a adivinar la palabra.
- **Modal de Fin del Juego y Victoria**: Si el jugador gana o pierde, aparece un modal con el resultado final.

### Desglose del Código

#### HTML (`index.html`)
- El archivo HTML configura la estructura del juego, incluyendo:
    - Un modal para el mensaje de "Game Over" o "Victoria".
    - Contenedores para la imagen del ahorcado, la palabra, la pista y el teclado.
    - Archivos externos de CSS y JavaScript enlazados al final del documento.

#### CSS (`styles.css`)
- Define los estilos para el diseño del juego:
    - **Diseño Responsivo**: El diseño del juego se adapta a diferentes tamaños de pantalla.
    - **Modal**: Estilos para el modal de fin de juego, con animación y transparencia.
    - **Teclado**: Estilos para el teclado en pantalla para la selección de letras.

#### JavaScript (`script.js`)
- Gestiona la lógica del juego:
    - **getRandomWord**: Selecciona una palabra y pista aleatoria de la lista de palabras.
    - **initGame**: Administra el juego, actualizando la imagen del ahorcado y verificando si la letra es correcta o incorrecta.
    - **gameOver**: Muestra el modal para finalizar el juego (ganar o perder).
    - **Event Listeners**: Escucha los clics de los botones para interactuar con el juego (teclado y botón de reinicio).

### Cómo Jugar
1. El juego muestra una serie de espacios en blanco que representan la palabra a adivinar.
2. Utiliza el teclado en pantalla para adivinar letras.
3. Por cada intento incorrecto, la figura del ahorcado aparece parte por parte.
4. Pierdes si alcanzas los 6 intentos incorrectos antes de completar la palabra.
5. Si adivinas todas las letras correctamente, ¡ganas el juego!

+++
