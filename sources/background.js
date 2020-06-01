class Background {

    constructor(ctx) {
        this._ctx = ctx;

        this._w = this._ctx.canvas.width;
        this._h = this._ctx.canvas.height;

        this._img = new Image();
        this._img.src = './img/grass.jpg'

        this._limitsImg = new Image();
        this._limitsImg.src = './img/tree.png'

        this._limitX = 0;
        this._limitY = 20;
        this._limitW = this._w;
        this._limitH = LIMIT_Y - this._limitY;
    }

    draw() {
        this._drawGrass();
        this._drawLimits();
    }

    _drawGrass() {
        this._ctx.drawImage(this._img, 0, 0, this._w, this._h);
    }

    _drawLimits() {
        this._ctx.drawImage(this._limitsImg, this._limitX, this._limitY, this._limitW, this._limitH);        
    }
}