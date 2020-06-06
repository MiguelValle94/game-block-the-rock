class Warrior {

    constructor(ctx) {
        this._ctx = ctx;

        this.health = 100;

        this.w = 30;
        this.h = 40;
        this.x = this._ctx.canvas.width / 2 - this.w / 2;
        this.y = this._ctx.canvas.height / 2;
        this._vx = 2;
        this._vy = 2;

        this._img = new Image();
        this._img.src = './img/LeviSpriteC.png';
        this._img.frames = 3;
        this._img.frameIndex = 0;
        this._img.stay = 4;
        this._img.stayIndex = 0 //0:front 1:left 2:right 3:back

        this._cutImg = new Image();
        this._cutImg.src = './img/cut.png';
        this._cutX = this._ctx.canvas.width;
        this._cutY = 0 - this._ctx.canvas.height;

        this.attackCheck = false;
        
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
            
            this._drawLife()
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

    attack(giant) {
        setTimeout(() => giant.health -= 20, 2000);
    }

    drawAttack() {
        this._attackPreparation();
        this._ctx.fillStyle = 'black';
        if (this.attackCheck) {
            this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
            this._ctx.drawImage(
                this._cutImg, 
                this._cutX, 
                this._cutY, 
                this._ctx.canvas.width, 
                this._ctx.canvas.height
            );

            this._deleteLifeWhenAttack();

            if (!(this.count % 5)){
                this._cutX -= 50.9;
                this._cutY += 40;
            }
            setTimeout(() => {
                this.attackCheck = false;
                this._drawLifeAfterAttack();
            }, 1500);
        }
    }

    centerPosition() {
        const colisionX = this.x <= this._ctx.canvas.width / 2 + 15 && this.x + this.w >= this._ctx.canvas.width / 2 - 15;
        const colisionY = this.y <= this._ctx.canvas.height / 2 + 20 && this.y + this.h >= this._ctx.canvas.height / 2;

        return colisionX && colisionY;
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

    _drawLife() {
        const warriorLife = document.getElementById('warrior');
        warriorLife.value = this.health;
    }

    _deleteLifeWhenAttack() {
        const lifeBoxes = [...document.getElementsByClassName('displayed')];
        lifeBoxes.forEach(el => el.className = 'hiden');
    }

    _drawLifeAfterAttack() {
        const lifeBoxes = [...document.getElementsByClassName('hiden')];
        lifeBoxes.forEach(el => el.className = 'displayed');
    }

    _attackPreparation() {
        if (this._cutX <= -4080) { 
            this._cutX = this._ctx.canvas.width
            this._cutY = -this._ctx.canvas.height
        }
    }
 }