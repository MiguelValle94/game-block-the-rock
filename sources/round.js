class Round {

    constructor(ctx) {
        this._ctx = ctx;
        this._round = 4;
        this._counter = 0;

        this.state = 0;

        this.obstacle = [];

        this._img = new Image();
        this._img.src = './img/sky.jpg';

        this.sword = new Sword(this._ctx);
        this.usedSword = false;
    }

    newObstacle() {
        const obstacles = [new Apple(this._ctx), new Rock(this._ctx), new GiantRock(this._ctx), new House(this._ctx)];
        
        if (!(this._counter % 3000) && this._counter) {
            this.state = 2;
        }
        
        if (this.usedSword) {
            this.state = 0;
            this.obstacle = [];
            this._round++;
            this.usedSword = false;
        }

        if (this.state === 0) {
            setTimeout(() => {
                this.state = 1;
            }, 5000);
        }

        if (this.state >= 1){
            // if (this._round === 5) {
            //     if (!(this._counter % 20)) {
            //         const randomNumber = Math.floor(Math.random() * obstacles.length);
            //         this.obstacle.push(obstacles[randomNumber]);
            //     }   
            // }

            if (!(this._counter % obstacles[this._round - 1].apparitionRate)) {
                this.obstacle.push(obstacles[this._round - 1]);
            } 
        } 
    }

    draw() {
        this._ctx.font = "30px Black Ops One";
        this._ctx.fillStyle = 'black'
        if (this.state === 0) {
            this._ctx.font = "38px Black Ops One";
            this._ctx.fillStyle = 'red'
        };
        this._ctx.textAlign = "center";
        this._ctx.fillText(`Round ${this._round}`, this._ctx.canvas.width / 2, 30);
        this._counter++;
        this._deleteObstacle();
        if (this.state === 2) {
            this.sword.draw();
        }
    }

    drawGameOver() {
        this._ctx.drawImage(
            this._img, 
            0, 
            0, 
            this._ctx.canvas.width, 
            this._ctx.canvas.height
        )

        this._ctx.font = "40px Black Ops One";
        this._ctx.fillStyle = 'red'
        this._ctx.textAlign = "left";
        this._ctx.fillText('Game over!', 40, 400);

        const divs = [...document.getElementsByClassName('deletable')];
        divs.forEach(el => el.innerHTML = '')

        const button = document.getElementById('try');
        button.className = 'end'
    }


    drawYouWin() {
        this._ctx.drawImage(
            this._img, 
            0, 
            0, 
            this._ctx.canvas.width, 
            this._ctx.canvas.height
        )

        this._ctx.font = "40px Black Ops One";
        this._ctx.fillStyle = 'green'
        this._ctx.textAlign = "left";
        this._ctx.fillText('You win!', 60, 400);

        const divs = [...document.getElementsByClassName('deletable')];
        divs.forEach(el => el.innerHTML = '')

        const button = document.getElementById('next');
        button.className = 'win'
    }


    _deleteObstacle() {
        this.obstacle = this.obstacle.filter( obs => obs.noFloor && obs.noCrash);
    }
}