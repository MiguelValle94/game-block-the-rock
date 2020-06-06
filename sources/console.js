class Console {

    constructor(ctx) {
        this._ctx = ctx;

        this._w = this._ctx.canvas.width;
        this._h = 50;
        this._x = 0;
        this._y = this._ctx.canvas.height - 50;

        this._phrases = [
            ['You wanna play?', 'So...you like apples?', 'Tick tock my old friend', 'You are like an ant for me'],
            ['You don\'t like fruit. I see...', 'Let\'s try something bigger', 'HAHAHA Run Forrest Run', 'Imagine that you don´t die'],
            ['OK, now I\'m furious', 'Take care of yout head', 'Play with me', 'It is just half a mountain'],
            ['Prepare to die', 'It is that yout house?', 'A flying house...', 'You are faster tham Usain Bolt'],
            ['It hurts', 'Tsunamiiii...Titititi', 'Shit, shit, shit', 'Ok, I don\'t want to play anymore']           
        ];
        this.phraseIndex = 0;

        this._counter = 0
    }

    draw(round) {
        this._drawBackground();
        this._drawPhrase(round);
        this._counter++
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
        this._ctx.font = "20px Roboto Mono";
        this._ctx.fillStyle = 'black';
        const phrase = this._phrases[round - 1][this.phraseIndex]
        this._ctx.textAlign = "left";
        this._ctx.fillText(`${phrase}`, 20, this._ctx.canvas.height - 20);
        if (this._counter === 800) {
            this._counter = 0;
            if(this.phraseIndex++ >= 3) {
                this.phraseIndex = 3
            }
        }
    }
}