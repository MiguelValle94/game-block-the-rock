class ProtectionHelp extends Help {
    
    constructor(ctx) {
        super(ctx, './img/protectionPotion.png');
    }

    power(warrior) {
        warrior.w /= 1.5;
        warrior.h /= 1.5;
        setTimeout(() =>  {
            warrior.w *= 1.5;
            warrior.h *= 1.5;
        }, 10000);
    }

}