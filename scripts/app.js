/* IMPORTED MODULES */


import { startTimer, resetTimer } from './timer.js';
import { rendering } from './render.js';

/* INDEX ELEMENTS */

let start = document.getElementById('start');
let reset = document.getElementById('reset');
let timer = document.getElementById('timer');

/* EVENT LISTENERS */

start.addEventListener('click', () => {
    startTimer();
});

rendering();

reset.addEventListener('click', () => {
    resetTimer();
    timer.textContent = '25:00';
});