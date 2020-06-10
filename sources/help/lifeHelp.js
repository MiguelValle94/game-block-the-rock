class LifeHelp extends Help {
    
    constructor(ctx) {
        super(ctx, './img/lifePotion.png');
    }

    power(warrior) {
        this._helpAudio.play();
        
        if (warrior.health <= 75) {
            warrior.health += 25;
        } else {
            warrior.health = 100;
        }
    }

}