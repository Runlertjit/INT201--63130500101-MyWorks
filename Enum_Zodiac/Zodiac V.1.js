function zodiac(year){
    let result = year % 12;
    let text = 'ZODIAC : '
    switch(result){
      case 0 : console.log(text + 'MONKEY')
        break;
      case 1 :  console.log(text + 'ROOSTER')
        break;  
      case 2 :  console.log(text + 'DOG')
        break;
      case 3 :  console.log(text + 'PIG')
        break;
      case 4 :  console.log(text + 'RAT')
        break;
      case 5 :  console.log(text + 'OX')
        break;
      case 6 :  console.log(text + 'TIGER')
        break;
      case 7 :  console.log(text + 'RABBIT')
        break;
      case 8 :  console.log(text + 'DRAGON')
        break;
      case 9 :  console.log(text + 'SNAKE')
        break;
      case 10 :  console.log(text + 'HORSE')
        break;
      case 11 :  console.log(text + 'SHEEP')
        break;
    }
  }