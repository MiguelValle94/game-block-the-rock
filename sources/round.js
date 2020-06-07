class Round {

    constructor(ctx) {
        this._ctx = ctx;
        this.round = 2;
        this._counter = 0;
        this._objectCounter = 0;

        this.state = 0;

        this.obstacle = [];
        
        this.sword = new Sword(this._ctx);
        this.usedSword = false;

        this._imgYW = new Image();
        this._imgYW.src = './img/youwin.jpg';

        this._imgGO = new Image();
        this._imgGO.src = './img/gameover.jpg';

        this._laughAudio = document.getElementById('laugh');
    }

    newObstacle() {
        const obstacles = [new Apple(this._ctx), new Rock(this._ctx), new GiantRock(this._ctx), new House(this._ctx)];
        
        if (!(this._objectCounter % 3000) && this._objectCounter) {
            this.state = 2;
        }
        
        if (this.usedSword) {
            this.state = 0;
            this.obstacle = [];
            this.round++;
            this.usedSword = false;
            this._counter = 0;
            this._objectCounter = 0;
        }

        if (this.state === 0) {
            setTimeout(() => {
                this.state = 1;
                this._laughAudio.play();
            }, 5000);
        }

        if (this.state >= 1){
            this._objectCounter++;
            if (this.round === 5) {
                if (!(this._counter % 20)) {
                    const randomNumber = Math.floor(Math.random() * obstacles.length);
                    this.obstacle.push(obstacles[randomNumber]);
                }   
            } else if (!(this._counter % obstacles[this.round - 1].apparitionRate)) {
                this.obstacle.push(obstacles[this.round - 1]);
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
        this._ctx.fillText(`Round ${this.round}`, this._ctx.canvas.width / 2, 30);
        this._counter++;
        this._deleteObstacle();
        if (this.state === 2) {
            this.sword.draw();
        }
    }

    drawGameOver() {
        this._ctx.drawImage(
            this._imgGO, 
            0, 
            0, 
            this._ctx.canvas.width, 
            this._ctx.canvas.height
        )

        this._ctx.font = "50px Black Ops One";
        this._ctx.fillStyle = 'rgb(204, 33, 33)'
        this._ctx.textAlign = "left";
        this._ctx.fillText('Game over!', 40, 480);

        const divs = [...document.getElementsByClassName('deletable')];
        divs.forEach(el => el.innerHTML = '')

        const button = document.getElementById('end-div');
        button.innerHTML = '<a id="end" href="">Try again?</a>'
    }


    drawYouWin() {
        this._ctx.drawImage(
            this._imgYW, 
            0, 
            0, 
            this._ctx.canvas.width, 
            this._ctx.canvas.height
        );

        this._ctx.font = "50px Black Ops One";
        this._ctx.fillStyle = 'rgb(30, 138, 2)'
        this._ctx.textAlign = "left";
        this._ctx.fillText('You win!', 40, 480);

        const divs = [...document.getElementsByClassName('deletable')];
        divs.forEach(el => el.innerHTML = '')

        const button = document.getElementById('next-div');
        button.innerHTML = '<a id="win" href="">Who wanna fight?</a>'
    }


    _deleteObstacle() {
        this.obstacle = this.obstacle.filter( obs => obs.noFloor && obs.noCrash);
    }
}