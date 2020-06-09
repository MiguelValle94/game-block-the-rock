class Sword {

    constructor(ctx) {
        this._ctx = ctx;

        this._img = new Image();
        this._img.src = './img/sword.png';
        
        this._w = 30;
        this._h = 30;
        this.x = this._ctx.canvas.width / 2 - this._w / 2;
        this.y = this._ctx.canvas.height / 2;

        this._counter = 0;
    }

    draw() {
        this._ctx.drawImage(
            this._img, 
            this.x, 
            this.y, 
            this._w, 
            this._h
        )

        if (!(this._counter++ % 10)){
            this._move();
        }
    }

    _move() {
        if (this.y % 2) {
            this.y += 5;
        } else {
            this.y -= 5;
        }
    }

}