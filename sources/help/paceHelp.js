class PaceHelp extends Help {
    
    constructor(ctx) {
        super(ctx, './img/pacePotion.png');
    }

    power(warrior) {
        warrior.vx *= 2;
        warrior.vy *= 2;
        setTimeout(() =>  {
            warrior.vx /= 2;
            warrior.vy /= 2;
        }, 5000);
        console.log('pace', warrior);
    }

}