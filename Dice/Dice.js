function randomDice(nb){
    let random = Math.floor(Math.random() * 11);
    if(nb > random){return `Too High, The answer is ${random}`;
    }else if (nb < random){return `Too Low, The answer is ${random}`;
    }else if(nb === random){return `You WIN!!`;}}
