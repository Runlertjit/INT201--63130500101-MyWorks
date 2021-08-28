const item = {
    MAMA : 'mama',
    DRINK : {
        COKE : 'coke',
        PEPESI : 'pepesi',
        MINERE : 'minere',
    }
}

function menuItem(num){
    switch(num){
        case 1 : console.log(item.MAMA);
        break;
        case 2 : console.log(item.DRINK.COKE);
        break;
        case 3 : console.log(item.DRINK.MINERE);
        break;
        case 4 : console.log(item);
    }
}

menuItem(1)
menuItem(2)
menuItem(3)
menuItem(4) // undefined