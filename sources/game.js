class Game {

    constructor(ctx) {
        this._ctx = ctx;

        this._background = new Background(this._ctx);
        this._giant = new Giant(this._ctx);
        this._warrior = new Warrior(this._ctx)
    }

    start() {
        this._fixedraw()
        setInterval(() => {
            this._dinamicDraw()
        }, 1000 / 60); 
    }

    move(direction) {
        this._warrior.move(direction)
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }

    _fixedraw() {
        this._background.drawStatic()
        this._giant.draw();  
    }

    _dinamicDraw() {
        this._background._drawGrassDinamic();
        this._warrior.draw()
    }
}