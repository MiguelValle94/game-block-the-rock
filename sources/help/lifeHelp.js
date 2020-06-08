class LifeHelp extends Help {
    
    constructor(ctx) {
        super(ctx, './img/lifePotion.png');
    }

    power(warrior) {
        if (warrior.health <= 87.5) {
            warrior.health += 12.5;
        }
    }

}