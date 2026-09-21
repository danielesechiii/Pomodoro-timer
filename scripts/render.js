/* IMPORTED MODULES */

import { startTimer, tick, resetTimer } from './timer.js';

/* RENDER */

function rendering() {

    let intervalId = setInterval(() => {
        
        /* TIMER ELEMENT */

        let timer = document.getElementById('timer');

        /* TICK RESULT */

        let result = tick();
        
        /* CONVERSION */
    
        let mm = result.remaining / 60;
        let ss = result.remaining % 60;

        /* DOM MANIPULATION */

        timer.textContent = `${mm}:${ss}`
    }, 1000);
    
    let clearId = 1_500;


    if (intervalId == clearId) {
        resetTimer()
    }
}

