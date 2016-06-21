

// the vars
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() *5 + 1);
var totalDamage = 0;

//while loop
while(slaying) {
    // if loop
    if(youHit = 1) {
        console.log("You hit the dragon")
        totalDamage += damageThisRound;
        //if happend for times the game ends
        if(totalDamage >= 4 ) {
                console.log("You slew the dragon");
                slaying = false;
                //if not it repeats
                } else {
                    youHit = Math.floor(Math.random() * 2);
                    }
            //else
            }else {
        console.log("The dragon defeated you!")
    }
}