/* IMPORTED MODULES */

import { startTimer, tick, resetTimer } from './timer.js';

/* RENDER */

function rendering() {

    let intervalId = setInterval(tick, 1000);   
    let clearId = 1_500;
    
    /* TIMER ELEMENT */

    let timer = document.getElementById('timer');

    /* TICK RESULT */

    let result = tick();
    
    /* CONVERSION */

    let mm = result.remaining / 1000 / 60;
    let ss = result.remaining / 1000 % 60;

    /* DOM MANIPULATION */

    timer.textContent = `${mm}:${ss}`


    if (intervalId == clearId) {
        resetTimer()
    }
}

