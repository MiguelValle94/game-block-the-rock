class Background {

    constructor(ctx) {
        this._ctx = ctx;

        this._w = this._ctx.canvas.width;
        this._h = this._ctx.canvas.height;

        this._img = new Image();
        this._img.src = './img/grass.jpg';

        this._limitsImg = new Image();
        this._limitsImg.src = './img/trees.png';

        this._startImg = new Image();
        this._startImg.src = './img/startbackground.jpg';

        this._instructionsImg = new Image();
        this._instructionsImg.src = './img/instructions.png';

        this._htpImg = new Image();
        this._htpImg.src = './img/howplay.png';
        this._drawHTP()

        this._limitX = 0;
        this._limitY = 20;
        this._limitW = this._w;
        this._limitH = LIMIT_Y - this._limitY;
    }

    draw() {
        this._drawGrass();
        this._drawLimits();
    }

    drawMenu() {
        this._ctx.fillStyle = "black";
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, 40);
        this._ctx.fillStyle = "rgb(246, 208, 132)";
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, 38);
    }

    drawStart() {
        this._ctx.drawImage(this._startImg, 0, 0, this._w, this._h);
        this._ctx.drawImage(this._instructionsImg, 350 - 60, 380, 100, 100);

        this._ctx.font = "20px Roboto";
        this._ctx.fillStyle = 'black'
        this._ctx.textAlign = "center";
        this._ctx.fillText(`${START_PHRASE}`, this._ctx.canvas.width / 2, 150, 600);
    }

    _drawGrass() {
        this._ctx.drawImage(this._img, 0, 0, this._w, this._h);
    }

    _drawLimits() {
        this._ctx.drawImage(this._limitsImg, this._limitX, this._limitY, this._limitW + 100, this._limitH);        
    }

    _drawHTP() {
        const inst = document.getElementById('instructions')
        inst.onclick = () => {
            this._ctx.drawImage(this._htpImg, 0, 0, this._w, this._h);
            const deleteStart = [...document.getElementsByClassName('start-menu')];
            deleteStart.forEach(el => el.remove());
            const button = document.getElementById('back-to-menu-div');
            button.innerHTML = '<a id="back-to-menu" href="">--Back to Menu--</a>';
        }        
    }
}