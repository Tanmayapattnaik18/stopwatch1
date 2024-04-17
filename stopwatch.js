let startTime;
let elapsedTime = 0; 
let timerInterval; 
let isRunning = false; 

function formatTime(time) {
    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);

    let formattedTime = `${(minutes < 10 ? '0' : '')}${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;

    return formattedTime;
}

function printTime() {
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function toggleStopwatch() {
    let startButton = document.getElementById('startButton');
    let stopButton = document.getElementById('stopButton');

    if (!isRunning) {
        // Start the stopwatch
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            printTime();

            if (elapsedTime >= 60000) {
                document.getElementById('display').classList.add('show-minutes');
            }

            if (elapsedTime >= 3600000) {
                document.getElementById('display').classList.add('show-hours');
            }
        }, 10);

        
        startButton.style.display = 'none';
        stopButton.style.display = 'inline-block';

        isRunning = true;
    } else {
        
        clearInterval(timerInterval);

        
        stopButton.style.display = 'none';
        startButton.style.display = 'inline-block';

        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    document.getElementById('display').classList.remove('show-minutes', 'show-hours');
    
    let startButton = document.getElementById('startButton');
    let stopButton = document.getElementById('stopButton');

    
    startButton.style.display = 'inline-block';
    stopButton.style.display = 'none';

    elapsedTime = 0;
    printTime();
    isRunning = false;
}
