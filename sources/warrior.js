class Warrior {

    constructor(ctx) {
        this._ctx = ctx;

        this.health = 100;

        this._img = new Image();
        this._img.src = './img/LeviSpriteC.png';
        this._img.frames = 3;
        this._img.frameIndex = 0;
        this._img.stay = 4;
        this._img.stayIndex = 0 //0:front 1:left 2:right 3:back
        
        this.w = 30;
        this.h = 40;
        this.x = this._ctx.canvas.width / 2 - this.w / 2;
        this.y = this._ctx.canvas.height / 2;

        this._vx = 2;
        this._vy = 2;

        this._count = 0;
    }

    draw() {
        this._ctx.drawImage(
            this._img, 
            this._img.frameIndex * this._img.width / this._img.frames,
            this._img.stayIndex * this._img.height / this._img.stay,
            this._img.width / this._img.frames,
            this._img.height / this._img.stay,
            this.x, 
            this.y, 
            this.w, 
            this.h
        );
    }

    move(direction) {
        switch (direction) {
            case 'front':
                this.y += this._vx;
                this._img.stayIndex = 0;
                break;
            case 'back':
                this.y -= this._vx;
                this._img.stayIndex = 3;
                break;
            case 'right':
                this.x += this._vx;
                this._img.stayIndex = 2;
                break;
            case 'left':
                this.x -= this._vx;
                this._img.stayIndex = 1;
                break; 
        }
    }

    animate() {
        if (!(this._count % 10)) {
            if (this._img.frameIndex++ === 2) {
                this._img.frameIndex = 0;
            };
        };

        if (this._count++ === 100) {
            this._count = 0;
        };
    }

    _checkLimits() {
        if (this.x <= 10) {
            this.x = 10;
        } else if (this.x + this.w >= this._ctx.canvas.width - 10) {
            this.x = this._ctx.canvas.width - 10 - this.w;
        } else if (this.y <= LIMIT_Y + 10) {
            this.y = LIMIT_Y + 10;
        } else if (this.y + this.h >= this._ctx.canvas.height - 60 ) {
            this.y = this._ctx.canvas.height - 60 - this.h;
        }
    }
 }