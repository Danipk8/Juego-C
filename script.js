const fibonacciQuestion = document.getElementById("fibonacciQuestion");
const answerInput = document.getElementById("answerInput");
const checkAnswer = document.getElementById("checkAnswer");
const binaryCode = document.getElementById("binaryCode");
const finalMessage = document.getElementById("finalMessage");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const contract = document.getElementById("contract");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");
const acceptContract = document.getElementById("acceptContract");
const acceptButton = document.getElementById("acceptButton");

const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21];
const binaryFibonacci = fibonacciSequence.map(num => num.toString(2));
const decodedMessage = "¿Quieres ser mi novia?";

let currentStep = 0;

function displayFibonacciQuestion() {
    if (currentStep < fibonacciSequence.length) {
        fibonacciQuestion.textContent = `¿Cuál es el siguiente número de Fibonacci después de ${fibonacciSequence[currentStep - 1] || 0}?`;
    } else {
        revealFinalMessage();
    }
}

function revealFinalMessage() {
    binaryCode.textContent = binaryFibonacci.join(" ");
    fibonacciQuestion.hidden = true;
    answerInput.hidden = true;
    checkAnswer.hidden = true;
    finalMessage.hidden = false;
}

checkAnswer.addEventListener("click", () => {
    const answer = parseInt(answerInput.value);
    if (answer === fibonacciSequence[currentStep]) {
        binaryCode.textContent += binaryFibonacci[currentStep] + " ";
        currentStep++;
        answerInput.value = ""; 
        displayFibonacciQuestion();
    } else {
        alert("¡Incorrecto! Intenta de nuevo.");
    }
});

// Evento para mover el botón "No" a una posición aleatoria (inicio)
noButton.addEventListener("click", () => {
    moveButton(noButton);
});

// Evento para saltar la sección de Fibonacci
skipButton.addEventListener("click", () => {
    currentStep = fibonacciSequence.length; // Avanza a la última pregunta
    revealFinalMessage(); // Revela el mensaje final
});

// Evento para mover el botón "No" a una posición aleatoria (contrato)
confirmNo.addEventListener("click", () => {
    moveButton(confirmNo);
});

// Función para mover el botón a una posición aleatoria
function moveButton(button) {
    const randomX = Math.random() * (window.innerWidth - 100); // Ajusta el valor para el ancho del botón
    const randomY = Math.random() * (window.innerHeight - 50); // Ajusta el valor para la altura del botón
    button.style.position = "absolute"; // Cambiar la posición a absoluta
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Evento para mostrar confirmación de "Sí"
yesButton.addEventListener("click", () => {
    finalMessage.hidden = true;
    contract.hidden = false; // Muestra el contrato
});

// Evento para confirmar que está segura
confirmYes.addEventListener("click", () => {
    contract.hidden = true; // Oculta la confirmación
    acceptContract.hidden = false; // Muestra el contrato
});

// Evento para aceptar el contrato
acceptButton.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>¡Gracias por aceptar!</h1>
            <p>Ahora me aguantas, te amo. ❤️</p>
        </div>
    `;
});

displayFibonacciQuestion();
