const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const newG = new Game(ctx);

window.onload = () => {
    newG.start();
}

document.addEventListener('keydown', e => {
    if (e.keyCode === UP) {
        newG.move('back')
    } else if (e.keyCode === RIGHT) {
        newG.move('right')
    } else if (e.keyCode === LEFT) {
        newG.move('left')
    } else if (e.keyCode === DOWN) {
        newG.move('front')
    }
})