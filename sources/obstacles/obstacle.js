class Obstacle {

    constructor(ctx, src, w, h) {
        this._ctx = ctx;

        this._img = new Image();
        this._img.src = src;
        
        this._w = w;
        this._h = h;

        this._x = Math.random() * this._ctx.canvas.width;
        this._y = 0;

        this._finalX = this._x;
        this._finalY = Math.random() * this._ctx.canvas.height + LIMIT_Y;

        this._vy = 0;
        this._ay = 0.1;
    }

    draw() {
        this._ctx.drawImage(this._img, this._x, this._y, this._w, this._h);
    }

    move() {
        this._vy += this._ay;
        this._y += this._vy;
    }
}


