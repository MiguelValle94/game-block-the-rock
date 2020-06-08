class Help {

    constructor(ctx, src) {
        this._ctx = ctx;

        this._img = new Image();
        this._img.src = src;
        
        this._w = 20;
        this._h = 20;
        this._x = 20 + Math.random() * (this._ctx.canvas.width - 20);
        this._y = LIMIT_Y + Math.floor(Math.random() * (this._ctx.canvas.height - LIMIT_Y - 100)); 

        this._counter = 0;
    }

    draw() {
        this._ctx.drawImage(
            this._img, 
            this._x, 
            this._y, 
            this._w, 
            this._h
        );

        if (!(this._counter++ % 10)){
            this._move();
        }
    }

    colisionChecker(warrior) {
        const colisionX = warrior.x <= this._x + this._w && warrior.x + warrior.w >= this._x;
        const colisionY = warrior.y <= this._y + this._h && warrior.y + warrior.h >= this._y

        return colisionX && colisionY;
    };

    _move() {
        if (this._y % 2) {
            this._y += 5;
        } else {
            this._y -= 5;
        }
    }

}