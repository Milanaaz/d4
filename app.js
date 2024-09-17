// Задание 1:

let count = 0;
const counterElement = document.getElementById('counter');

function updateDisplay() {
    counterElement.textContent = count;
}

function increment() {
    count++;
    counterElement.style.color = 'green';
    updateDisplay();
}
function decrement() {
    if (count > 0) {
        count--;
        counterElement.style.color = 'red';
        updateDisplay();
    }
}





// Задание 2:

const box = document.getElementById('box');
const coordinates = document.getElementById('coordinates');

box.addEventListener('mousemove', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    coordinates.textContent = `X: ${x}, Y: ${y}`;
});







// Задание 3: Светофор

function changeLight() {
    const color = prompt("Введите цвет (Красный, Желтый или Зеленый):").toLowerCase();
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');
    const status = document.getElementById('status');


    redLight.style.backgroundColor = 'gray';
    yellowLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'gray';

    if (color === 'красный') {
        redLight.style.backgroundColor = 'red';
        status.textContent = 'STOP';
    } else if (color === 'желтый') {
        yellowLight.style.backgroundColor = 'yellow';
        status.textContent = 'WAIT';
    } else if (color === 'зеленый') {
        greenLight.style.backgroundColor = 'green';
        status.textContent = 'GO';
    } else {
        alert('Неверный цветэ попробуйте снова.');
    }
}
