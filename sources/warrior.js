class Warrior {

    constructor(ctx) {
        this._ctx = ctx;

        this.life = 100;

        this._img = new Image();
        this._img.src = './img/LeviSpriteC.png';
        this._img.frames = 3;
        this._img.frameIndex = 0;
        this._img.stay = 4;
        this._img.stayIndex = 0 //0:front 1:left 2:right 3:back
        
        this._w = 30;
        this._h = 40;
        this._x = this._ctx.canvas.width / 2 - this._w / 2;
        this._y = this._ctx.canvas.height / 2;

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
            this._x, 
            this._y, 
            this._w, 
            this._h
        );
    }

    move(direction) {
        switch (direction) {
            case 'front':
                this._y += this._vx;
                this._img.stayIndex = 0;
                break;
            case 'back':
                this._y -= this._vx;
                this._img.stayIndex = 3;
                break;
            case 'right':
                this._x += this._vx;
                this._img.stayIndex = 2;
                break;
            case 'left':
                this._x -= this._vx;
                this._img.stayIndex = 1;
                console.log(this._x);
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
        if (this._x <= 10) {
            this._x = 10;
        } else if (this._x + this._w >= this._ctx.canvas.width - 10) {
            this._x = this._ctx.canvas.width - 10 - this._w;
        } else if (this._y <= LIMIT_Y + 10) {
            this._y = LIMIT_Y + 10;
        } else if (this._y + this._h >= this._ctx.canvas.height - 60 ) {
            this._y = this._ctx.canvas.height - 60 - this._h;
        }
    }
 }