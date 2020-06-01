class Game {

    constructor(ctx) {
        this._ctx = ctx;

        this._background = new Background(this._ctx);
        this._giant = new Giant(this._ctx);
        this._warrior = new Warrior(this._ctx);
    }

    start() {
        this._fixedraw();
        this._setListeners();
        setInterval(() => {
            this._dinamicDraw();
            this._checkLimits();
        }, 1000 / 60); 
    }

    move(direction) {
        this._warrior.move(direction);
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }

    _fixedraw() {
        this._background.drawStatic();
        this._giant.draw();  
    }

    _dinamicDraw() {
        this._background._drawGrassDinamic();
        this._warrior.draw();
    }

    _setListeners() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === UP) {
                this._warrior.move('back');
            } else if (e.keyCode === RIGHT) {
                this._warrior.move('right');
            } else if (e.keyCode === LEFT) {
                this._warrior.move('left');
            } else if (e.keyCode === DOWN) {
                this._warrior.move('front');
            }
        })
    }

    _checkLimits() {
        this._warrior._checkLimits();
    }
}