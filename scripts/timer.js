let state = 'IDLE'
let remaining = 1_500_000;          
let endTime = 0;  

/* START TIMER */

function startTimer() {  
    state = 'RUNNING';
    endTime = Date.now() + remaining;
};

/* TICK */

function tick() {
    if (state !== 'RUNNING') return null;

    remaining = endTime - Date.now();

    if (remaining <= 0) {
        state = 'FINISH';
        remaining = 0;
    }
        
    return { state, remaining };
};

/* RESET TIMER */

function resetTimer() {
    state = 'IDLE'
    endTime = 0;
    remaining = 1_500_000;
    return;
};

/* FUNCTIONS EXPORT */

export { startTimer, tick, resetTimer };

