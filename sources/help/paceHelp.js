class PaceHelp extends Help {
    
    constructor(ctx) {
        super(ctx, './img/pacePotion.png');
    }

    power(warrior) {
        this._helpAudio.play();
        
        warrior.vx *= 2;
        warrior.vy *= 2;
        setTimeout(() =>  {
            warrior.vx /= 2;
            warrior.vy /= 2;
        }, 10000);
    }

}