const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const newG = new Game(ctx);

window.onload = () => {

    newG._background.drawStart();

    const startBtn = document.getElementById('start');
    const bgoundAudio = document.getElementById('bground');
    bgoundAudio.volume = 0.4;
    
    startBtn.onclick = function() {
        newG.start();
        startBtn.remove();
        bgoundAudio.play();
    } 
}

