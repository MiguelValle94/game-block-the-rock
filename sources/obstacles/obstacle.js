class Obstacle {

    constructor(ctx, src, w, h) {
        this._ctx = ctx;

        this._img = new Image();
        this._img.src = src;
        
        this._w = w;
        this._h = h;

        this._x = Math.random() * (this._ctx.canvas.width - this._h);
        this._y = 0;

        this._finalX = this._x;
        this._finalY = LIMIT_Y + Math.random() * (this._ctx.canvas.height - this._h - LIMIT_Y- 50);

        this._vy = 0;
        this._ay = 0.1;
    }

    draw() {
        this._ctx.fillStyle = 'rgba(46, 38, 38, 0.4)'
        this._ctx.beginPath();
        this._ctx.ellipse(this._finalX + this._w / 2, this._finalY + this._h * 2 / 3, this._w - this._w / 3, this._h / 2 - this._h / 4, 0, 0, 2 * Math.PI);
        this._ctx.fill();
        this._ctx.closePath();

        this._ctx.drawImage(this._img, this._x, this._y, this._w, this._h);
    }

    move() {
        this._vy += this._ay;
        this._y += this._vy;
        this._positionChecker();
        console.log(this._finalY)
    }

    _positionChecker () {
        if (this._y >= this._finalY) {
            this._y = this._finalY
        }
    }
}


