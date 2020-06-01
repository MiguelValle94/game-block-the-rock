class Background {

    constructor(ctx) {
        this._ctx = ctx;

        this._w = this._ctx.canvas.width;
        this._h = this._ctx.canvas.height;

        // this._img = new Image();
        // this._img.src = './img/grass.jpg';

        // this._limitsImg = new Image();
        // this._limitsImg.src = './img/tree.png';

        this._limitX = -40;
        this._limitY = 20;
        this._limitW = 80;
        this._limitH = DINAMIC_BACKGROUND_Y;
    }

    drawStatic() {
        this._drawGrass();
        this._drawLimits();
        this._drawMenu();
    }

    _drawGrassDinamic() {
        this._ctx.fillStyle = "green"
        this._ctx.fillRect(0, DINAMIC_BACKGROUND_Y, this._w, this._h);
    }

    _drawGrass() {
        this._ctx.fillStyle = "grey"
        this._ctx.fillRect(0, -this._h + DINAMIC_BACKGROUND_Y, this._w, this._h);
    }

    _drawLimits() {
        this._ctx.fillStyle = "black"
        for (let i = 0; this._limitX < this._w; i++) {
            this._ctx.fillRect(this._limitX, this._limitY, this._limitW, this._limitH);
            this._limitX += 30;
            
        }
    }

    _drawMenu() {
        this._ctx.fillStyle = "black";
        this._ctx.fillRect(0, 0, this._w, 40);
        this._ctx.fillStyle = "rgb(246, 208, 132)";
        this._ctx.fillRect(0, 0, this._w, 38);
    }

}