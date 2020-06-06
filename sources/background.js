class Background {

    constructor(ctx) {
        this._ctx = ctx;

        this._w = this._ctx.canvas.width;
        this._h = this._ctx.canvas.height;

        this._img = new Image();
        this._img.src = './img/grass.jpg';

        this._limitsImg = new Image();
        this._limitsImg.src = './img/tree.png';

        this._startImg = new Image();
        this._startImg.src = './img/startbackground.jpg';

        this._instructionsImg = new Image();
        this._instructionsImg.src = './img/instructions.png';


        this._limitX = 0;
        this._limitY = 20;
        this._limitW = this._w;
        this._limitH = LIMIT_Y - this._limitY;
    }

    draw() {
        this._drawGrass();
        this._drawLimits();
    }

    drawStart() {
        this._ctx.drawImage(this._startImg, 0, 0, this._w, this._h);
        this._ctx.drawImage(this._instructionsImg, 350 - 60, 400, 100, 100);

        this._ctx.font = "20px Roboto";
        this._ctx.fillStyle = 'black'
        this._ctx.textAlign = "center";
        this._ctx.fillText(`${START_PHRASE}`, this._ctx.canvas.width / 2, 200, 600);
    }

    _drawGrass() {
        this._ctx.drawImage(this._img, 0, 0, this._w, this._h);
    }

    _drawLimits() {
        this._ctx.drawImage(this._limitsImg, this._limitX, this._limitY, this._limitW + 100, this._limitH);        
    }
}