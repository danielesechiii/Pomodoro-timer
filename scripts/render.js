/* IMPORTED MODULES */

import { tick, resetTimer } from './timer.js';

/* RENDER */

function rendering() {
    setInterval(() => {
        /* TIMER ELEMENT */
    
        let timer = document.getElementById('timer');
    
        /* TICK RESULT */
    
        let result = tick();

        if (result == null) {
            return;
        } else {
            /* CONVERSION */
        
            let secondi = Math.ceil(result.remaining / 1000);
            let mm = Math.floor(secondi / 60);
            let ss = secondi % 60;
        
            /* DOM MANIPULATION */
            timer.textContent = `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
        }

        if (result.state == 'FINISH') {
            resetTimer();
        }

    }, 1000);   
}

export { rendering };

