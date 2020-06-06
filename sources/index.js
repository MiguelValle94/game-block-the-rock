const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const newG = new Game(ctx);

// window.onload = () => {
//     
// }

const startBtn = document.getElementById('start')
startBtn.onclick = function() {
    newG.start();
    startBtn.remove();
}