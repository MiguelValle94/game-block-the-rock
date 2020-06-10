const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const newG = new Game(ctx);

window.onload = () => {

    newG.background.drawStart();

    const startBtn = document.getElementById('start');
    const startMenu = [...document.getElementsByClassName('start-menu')];
    const bgoundAudio = document.getElementById('bground');
    bgoundAudio.volume = 0.4;
    
    startBtn.onclick = function() {
        newG.start();
        newG.warrior.setName();
        startMenu.forEach(el => el.remove());
        bgoundAudio.play();
    } 
}