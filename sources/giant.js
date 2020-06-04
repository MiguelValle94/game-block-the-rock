class Giant {

    constructor(ctx) {
        this._ctx = ctx;

        this.life = 100;

        this._img = new Image();
        this._img.src = './img/legs.png';

        this.finalImg = new Image();
        this.finalImg.src = './img/giant.png'

        this._w = 150;
        this._h = LIMIT_Y - 30;
        this._x = this._ctx.canvas.width / 2 - this._w / 2;
        this._y = 40;
    }

    draw() {
        this._ctx.drawImage(this._img, this._x, this._y, this._w, this._h);
    }
 }