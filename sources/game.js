class Game {

    constructor(ctx) {
        this._ctx = ctx;

        this.background = new Background(this._ctx);
        this._giant = new Giant(this._ctx);
        this.warrior = new Warrior(this._ctx);
        this._console = new Console(this._ctx);
        this._round = new Round(this._ctx);

        this._intervalID = null;

        this._setListeners();

        this._painAudio = document.getElementById('pain');
    }

    start() {
        this._drawStartLife();

        this._intervalID = setInterval(() => {
            this._checkLimits();
            this._checkDeath();
            this._checkColisions();
            this._round.changeRound();

            this._clear();
            this._draw();
            this._move();

            this._round.helpChecker(this.warrior);
            this._attackChecker();
            
        }, 1000 / 60); 
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }

    _draw() {
        this.background.draw();
        this._giant.draw();  
        this._round.obstacle.forEach( obs => obs.drawShadow());
        this.warrior.draw();
        this._round.obstacle.forEach( obs => obs.draw());
        this.background.drawMenu();
        this._round.draw();
        this._console.draw(this._round.round);
    }

    _move() {
        this._round.obstacle.forEach( obs => obs.move());
    }

    _checkLimits() {
        this.warrior.checkLimits();
    }

    _checkColisions() {
        this._round.obstacle.forEach(o => {
           if (o.damage) {
                const colisionY = this.warrior.y <= o.y + o.h && this.warrior.y >= o.y + o.h / 3  && o.y >= o.finalY - this.warrior.h;
                const colisionX = this.warrior.x < o.x + o.w && this.warrior.x + this.warrior.w > o.x;
                if (colisionY && colisionX) {
                    this._decreaseLife(o);
                }
           }
        })
    }

    _decreaseLife(obstacle) {
        this._painAudio.play()
        obstacle.noCrash = false;
        this.warrior.health -= obstacle.damage;
    }

    _attackChecker() {
        this.warrior.drawAttack();
        if (this._round.state === 2 && this.warrior.centerPosition()) {
                this.warrior.attackCheck = true;
                this.warrior.attack(this._giant);
                this._round.state = 0;
                this._round.usedSword = true;
                this._console.phraseIndex = 0;
        }  
    }

    _checkDeath() {
        if (this.warrior.health <= 0) {
            this._gameOver();
        } else if (this._giant.health <= 0) {
            this._youWin();
        }
    }

    _gameOver() {
        clearInterval(this._intervalID);
        setTimeout (() => {this._round.drawGameOver()}, 1000);
    }

    _youWin() {
        clearInterval(this._intervalID);
        setTimeout (() => {this._round.drawYouWin()}, 1000);
    }

    _drawStartLife() {
        const lifeBoxes = [...document.getElementsByClassName('hiden')];
        lifeBoxes.forEach(el => el.className = 'displayed');

        const names = [...document.getElementsByClassName('start-name')];
        names.forEach(el => el.className = '');
    }

    _setListeners() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === UP) {
                this.warrior.move('back');
                this.warrior.animate();
            } else if (e.keyCode === RIGHT) {
                this.warrior.move('right');
                this.warrior.animate();
            } else if (e.keyCode === LEFT) {
                this.warrior.move('left');
                this.warrior.animate();
            } else if (e.keyCode === DOWN) {
                this.warrior.move('front');
                this.warrior.animate();
            }
        });
    }
}