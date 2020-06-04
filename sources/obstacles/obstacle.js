class Obstacle {

    constructor(ctx, src, w, h, damage) {
        this._ctx = ctx;

        this._img = new Image();
        this._img.src = src;
        
        this.w = w;
        this.h = h;

        this.x = Math.random() * (this._ctx.canvas.width - this.w);
        this.y = 0;

        this.finalX = this.x;
        this.finalY = LIMIT_Y + Math.random() * (this._ctx.canvas.height - this.h - LIMIT_Y- 50);

        this._vy = 0;
        this._ay = 0.05;

        this.noFloor = true;
        this.noCrash = true;
        this.damage = true;

        this.damage = damage;
    }

    draw() {
        this._drawShadow();
        this._drawObtsacle();

        

        this._positionChecker();
    }

    move() {
        this._vy += this._ay;
        this.y += this._vy;
        this._positionChecker();
    }

    _drawShadow() {
        this._ctx.fillStyle = 'rgba(46, 38, 38, 0.4)'
        this._ctx.beginPath();
        this._ctx.ellipse(this.finalX + this.w / 2, this.finalY + this.h * 2 / 3, this.w - this.w / 3, this.h / 2 - this.h / 4, 0, 0, 2 * Math.PI);
        this._ctx.fill();
        this._ctx.closePath();
    }

    _drawObtsacle() {
        this._ctx.drawImage(this._img, this.x, this.y, this.w, this.h);
    }


    _positionChecker () {
        if (this.y >= this.finalY) {
            this.y = this.finalY
        }

        if(this.y >= this.finalY) {
            this.damage = false;
            setTimeout(() => {this.noFloor = false}, 2000)
        }
    }
}


