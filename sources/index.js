const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const newG = new Game(ctx);

window.onload = () => {

    newG.background.drawStart();

    const startBtn = document.getElementById('start');
    const startMenu = [...document.getElementsByClassName('start-menu')];
    
    startBtn.onclick = function() {
        newG.start();
        startMenu.forEach(el => el.remove());
    } 
}