class Game {

    constructor(ctx) {
        this._ctx = ctx;

        this._background = new Background(this._ctx);
        this._giant = new Giant(this._ctx);
        this._warrior = new Warrior(this._ctx);
        this._obstacle = new GiantRock(this._ctx);
        this._console = new Console(this._ctx);

        this._setListeners();
    }

    start() {
        
        setInterval(() => {
            this._clear();
            this._draw();
            this._checkLimits();
            this._move();
        }, 1000 / 60); 
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }

    _draw() {
        this._background.draw()
        this._giant.draw();  
        this._warrior.draw();
        this._obstacle.draw();
        this._drawMenu();
        this._console.draw();
    }

    _drawMenu() {
        this._ctx.fillStyle = "black";
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, 40);
        this._ctx.fillStyle = "rgb(246, 208, 132)";
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, 38);
    }

    _move() {
        this._obstacle.move();
    }

    _checkLimits() {
        this._warrior._checkLimits();
    }

    _setListeners() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === UP) {
                this._warrior.move('back');
                this._warrior.animate();
            } else if (e.keyCode === RIGHT) {
                this._warrior.move('right');
                this._warrior.animate();
            } else if (e.keyCode === LEFT) {
                this._warrior.move('left');
                this._warrior.animate();
            } else if (e.keyCode === DOWN) {
                this._warrior.move('front');
                this._warrior.animate();
            }
        });
    }
}