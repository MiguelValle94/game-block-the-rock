class Round {

    constructor(ctx) {
        this._ctx = ctx;
        this._round = 1;
        this._counter = 0;

        this._state = 1;

        this.obstacle = [];
    }

    newObstacle() {
        const obstacles = [new Apple(this._ctx), new Rock(this._ctx), new GiantRock(this._ctx), new Hand(this._ctx)];
        
        if (this._counter === 2000) {
            this._counter = 0;
            this._state = 1;
            this.obstacle = [];
            this._round++;
        }

        if (this._state === 1) {
            setTimeout(() => {this._state = 0}, 5000)
        }



        if (this._state === 0){
            // if (this._round === 5) {
            //     if (!(this._counter % 20)) {
            //         const randomNumber = Math.floor(Math.random() * obstacles.length);
            //         this.obstacle.push(obstacles[randomNumber]);
            //         return
            //     }   
            // }

            if (!(this._counter % 20)) {
                this.obstacle.push(obstacles[this._round - 1]);
            } 
        } 
    }

    draw() {
        this._ctx.font = "30px Black Ops One";
        this._ctx.fillStyle = 'black'
        this._ctx.textAlign = "center";
        this._ctx.fillText(`Round ${this._round}`, this._ctx.canvas.width / 2, 30);
        this._counter++;
        this._deleteObstacle();
    }

    _deleteObstacle() {
        this.obstacle = this.obstacle.filter( obs => obs.noFloor && obs.noCrash);
    }

}