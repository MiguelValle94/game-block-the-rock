class Sword {

    constructor(ctx) {
        this._ctx = ctx;

        this._img = new Image();
        this._img.src = './img/sword.png';
        
        this._w = 30;
        this._h = 30;
        this._x = this._ctx.canvas.width / 2 - this._w / 2;
        this._y = this._ctx.canvas.height / 2;

        this.state = 0;
        this._counter = 0;
    }

    draw() {
        this._ctx.drawImage(
            this._img, 
            this._x, 
            this._y, 
            this._w, 
            this._h
        )

        if (!(this._counter++ % 10)){
            this._move();
        }
    }

    _move() {
        if (this._y % 2) {
            this._y += 5
        } else {
            this._y -= 5
        }
    }

}