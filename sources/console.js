class Console {

    constructor(ctx) {
        this._ctx = ctx;

        this._w = this._ctx.canvas.width;
        this._h = 50;
        this._x = 0;
        this._y = this._ctx.canvas.height - 50;

        this.phraseIndex = 0;

        this.counter = 0
    }

    draw(round) {
        this._drawBackground();
        this._drawPhrase(round);
        this.counter++
    }

    _drawBackground() {
        this._ctx.fillStyle = 'black';
        this._ctx.fillRect(this._x, this._y, this._w, this._h);
        this._ctx.fillStyle = 'rgb(217,231,240)';
        this._ctx.fillRect(this._x, this._y + 2, this._w, this._h - 2);
        this._ctx.strokeStyle = 'black';
        this._ctx.strokeRect(this._x + 10, this._y + 10, this._w - 20, this._h - 20);
    }

    _drawPhrase(round) {
        if (round < 6) {
            this._ctx.font = "20px Roboto Mono";
            this._ctx.fillStyle = 'black';
            const phrase = PHRASES[round - 1][this.phraseIndex];
            this._ctx.textAlign = "left";
            this._ctx.fillText(`${phrase}`, 20, this._ctx.canvas.height - 20);
            if (this.counter === 800) {
                this.counter = 0;
                if(this.phraseIndex++ >= 3) {
                    this.phraseIndex = 3;
                }
            }
        }   
    }
}