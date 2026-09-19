let state = 'IDLE'
let remaining = 1_500_000;          
let endTime = 0;                    

function startTimer() {  
    state = 'RUNNING';
    endTime = Date.now() + remaining;
};

function reset() {
    state = 'IDLE'
    endTime = 0;
    remaining = 1_500_000;
    return;
};