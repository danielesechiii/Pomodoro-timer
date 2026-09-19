let state = 'IDLE'
let remaining = 1_500_000;          
let endTime = 0;                    

function startTimer() {  
    state = 'RUNNING';
    endTime = Date.now() + remaining;
};

function tick() {
    if (state !== 'RUNNING') return null;

    remaining = endTime - Date.now();

    if (remaining <= 0) {
        state = 'FINISH';
        remaining = 0;
    }
        
    return { state, remaining };
}

function reset() {
    state = 'IDLE'
    endTime = 0;
    remaining = 1_500_000;
    return;
};

export { startTimer, tick, reset };

