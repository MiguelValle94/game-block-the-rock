class Game {

    constructor(ctx) {
        this._ctx = ctx;

        this._background = new Background(this._ctx);
        this._giant = new Giant(this._ctx);
        this._warrior = new Warrior(this._ctx);
        this._console = new Console(this._ctx);
        this._round = new Round(this._ctx);

        this._counter = 0;
        this._intervalID = null;

        this._setListeners();
    }

    start() {
        this._intervalID = setInterval(() => {
            this._checkLimits();
            this._checkDeath();
            this._checkColisions();
            this._round.newObstacle();

            this._clear();
            this._draw();
            this._move();

            this._attackChecker();
            
        }, 1000 / 60); 
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }

    _draw() {
        this._background.draw();
        this._giant.draw();  
        this._round.obstacle.forEach( obs => obs.drawShadow());
        this._warrior.draw();
        this._round.obstacle.forEach( obs => obs.draw());
        this._drawMenu();
        this._round.draw();
        this._console.draw(this._round.round);
    }

    _drawMenu() {
        this._ctx.fillStyle = "black";
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, 40);
        this._ctx.fillStyle = "rgb(246, 208, 132)";
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, 38);
    }

    _move() {
        this._round.obstacle.forEach( obs => obs.move());
    }

    _checkLimits() {
        this._warrior._checkLimits();
    }

    _checkColisions() {
        this._round.obstacle.forEach(o => {
           if (o.damage) {
                const colisionY = this._warrior.y <= o.y + o.h && this._warrior.y >= o.y && o.y >= o.finalY - this._warrior.h;
                const colisionX = this._warrior.x < o.x + o.w && this._warrior.x + this._warrior.w > o.x;
                if (colisionY && colisionX) {
                    this._decreaseLife(o);
                }
           }
        })
    }

    _decreaseLife(obstacle) {
        obstacle.noCrash = false;
        this._warrior.health -= obstacle.damage;
    }

    _attackChecker() {
        this._warrior.drawAttack();
        if (this._round.state === 2) {
            if (this._warrior.centerPosition()) {
                this._warrior.attackCheck = true;
                this._warrior.attack(this._giant);
                this._round.state = 0;
                this._round.usedSword = true;
                this._console.phraseIndex = 0;
            }
        }  
    }

    _checkDeath() {
        if (this._warrior.health <= 0) {
            this._gameOver();
        } else if (this._giant.health <= 0) {
            this._youWin();
        }
    }

    _gameOver() {
        clearInterval(this._intervalID);
        setTimeout (() => {
            this._round.drawGameOver();
            this._giant.drawFinal();
        }, 1000);
    }

    _youWin() {
        clearInterval(this._intervalID);
        setTimeout (() => {
            this._round.drawYouWin();
            this._warrior.drawFinal();
        }, 1000);
    }

    _setListeners() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === UP) {
                this._warrior.move('back');
                this._warrior.animate();
            } else if (e.keyCode === RIGHT) {
                this._warrior.move('right');
                this._warrior.animate();
            } else if (e.keyCode === LEFT) {
                this._warrior.move('left');
                this._warrior.animate();
            } else if (e.keyCode === DOWN) {
                this._warrior.move('front');
                this._warrior.animate();
            }
        });
    }
}