class Round {

    constructor(ctx) {
        this._ctx = ctx;
        this._round = 1;
        this._counter = 0;

        this.obstacle = [];
    }

    newObstacle() {
        const obstacles = [new Apple(this._ctx), new Rock(this._ctx), new GiantRock(this._ctx), new Hand(this._ctx)];
        
        if (this._counter === 1000) {
            this._counter = 0;
            this.obstacle = [];
            this._round++;
        }

        if (this._round === 5) {
            const randomObstacle = Math.floor(Math.random * obstacles.length);
            this.obstacle.push(obstacles[randomObstacle]);
            return
        }

        if (!(this._counter % 50)) {
            this.obstacle.push(obstacles[this._round - 1]);
        } 
    }

    draw() {
        this._ctx.font = "30px Black Ops One";
        this._ctx.fillStyle = 'black'
        this._ctx.textAlign = "center";
        this._ctx.fillText(`Rond ${this._round}`, this._ctx.canvas.width / 2, 30);
        this._counter++;
        this._deleteObstacle();
    }

    _deleteObstacle() {
        this.obstacle = this.obstacle.filter( obs => obs.noFloor && obs.noCrash);
    }

}