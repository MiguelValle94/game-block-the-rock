class Round {

    constructor(ctx) {
        this._ctx = ctx;
        this.round = 1;
        this._tick = 0;
        this._objectCounter = 0;
        this.state = 0; //0-Nothing 1-Objects 2-Sword

        this.obstacle = [];

        this.help = null;
        
        this.sword = new Sword(this._ctx);
        this.usedSword = false;

        this._imgYW = new Image();
        this._imgYW.src = './img/youwin.jpg';

        this._imgGO = new Image();
        this._imgGO.src = './img/gameover.jpg';

        this._laughAudio = document.getElementById('laugh');
    }

    draw() {
        this._tick++;
        this._deleteObstacle();
        this._drawRoundMenu();
        this._newObstacle();
        if (this.state === 2) {
            this.sword.draw();
        }
    }

    changeRound() {
        if (!(this._objectCounter % 3500) && this._objectCounter) {
            this.state = 2;
        }

        if (this.usedSword) {
            this.round++;
            this.state = 0;
            
            this.obstacle = [];
            this._tick = 0;
            this._objectCounter = 0;
            this.usedSword = false;
        }

        if (this.state === 0) {
            setTimeout(() => {
                this.state = 1;
                this._laughAudio.play();
            }, 5000);
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
        this._ctx.fillStyle = 'rgb(204, 33, 33)';
        this._ctx.textAlign = "left";
        this._ctx.fillText('Game over!', 40, 480);

        const divs = [...document.getElementsByClassName('deletable')];
        divs.forEach(el => el.innerHTML = '');

        const button = document.getElementById('end-div');
        button.innerHTML = '<a id="end" href="">Try again?</a>';

        this._laughAudio.play();
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
        this._ctx.fillStyle = 'rgb(30, 138, 2)';
        this._ctx.textAlign = "left";
        this._ctx.fillText('You win!', 40, 480);

        const divs = [...document.getElementsByClassName('deletable')];
        divs.forEach(el => el.innerHTML = '');

        const button = document.getElementById('next-div');
        button.innerHTML = '<a id="win" href="">Who wanna fight?</a>';
    }

    helpChecker(warrior) {
        if (this.round > 1) {
            if (!this.help) {
                if (!(this._objectCounter % 1500) && this._objectCounter) {
                    const helps = [new LifeHelp(this._ctx), new ProtectionHelp(this._ctx), new PaceHelp(this._ctx)];
                    this.help = helps[Math.floor(Math.random() * helps.length)];
                }   
            } else {
                this.help.draw();
                if (this.help.colisionChecker(warrior)) {
                    this.help.power(warrior);
                    this.help = null;
                }       
            }
        }
    }

    _newObstacle() {
        const obstacles = [new Apple(this._ctx), new Rock(this._ctx), new GiantRock(this._ctx), new House(this._ctx)];

        if (this.state >= 1){
            this._objectCounter++;
            if (this.round === 5) {
                if (!(this._tick % 20)) {
                    const randomNumber = Math.floor(Math.random() * obstacles.length);
                    this.obstacle.push(obstacles[randomNumber]);
                }   
            } else if (!(this._tick % obstacles[this.round - 1].apparitionRate)) {
                this.obstacle.push(obstacles[this.round - 1]);
            } 
        } 
    }

    _drawRoundMenu() {
        this._ctx.font = "30px Black Ops One";
        this._ctx.fillStyle = 'black'
        if (this.state === 0) {
            this._ctx.font = "38px Black Ops One";
            this._ctx.fillStyle = 'red'
        };
        this._ctx.textAlign = "center";
        this._ctx.fillText(`Round ${this.round}`, this._ctx.canvas.width / 2, 30);
    }

    _deleteObstacle() {
        this.obstacle = this.obstacle.filter( obs => obs.noFloor && obs.noCrash);
    }
}