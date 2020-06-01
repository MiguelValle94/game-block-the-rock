class Giant {

    constructor(ctx) {
        this._ctx = ctx;

        // this._img = new Image();
        // this._img.src = './img/legs.png';

        this._w = 150;
        this._h = DINAMIC_BACKGROUND_Y ;
        this._x = this._ctx.canvas.width / 2 - this._w / 2;
        this._y = 40;
    }

    draw() {
        this._ctx.fillStyle = "pink"
        this._ctx.fillRect(this._x, this._y, this._w, this._h);
    }
 }