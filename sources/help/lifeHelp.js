class LifeHelp extends Help {
    
    constructor(ctx) {
        super(ctx, './img/lifePotion.png');
    }

    power(warrior) {
        if (warrior.health <= 75) {
            warrior.health += 25;
        } else {
            warrior.health = 100;
        }
    }

}