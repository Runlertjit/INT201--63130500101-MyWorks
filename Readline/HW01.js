

/*-------------------------------------------------------------------------------------
const readline = require('readline');
const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readInterface.question('Input String :', String => {
        str = String;  
        console.log(str);
        readInterface.question('Enter Choice 1-3: ', number => {
            num = parseInt(number); 
            console.log(X(num,str)); 
            readInterface.close();    
        });
    });
--------------------------------------------------------------------------------------*/
function X (num, st){
    const str = st;
    let Vowals = /[aeiou]/gi;
    let Ans = "";
    switch (num){
        case 1 :
            Ans = str.split("") .reverse()  .join("");
            break;
        case 2 :
            Ans = str.replace(Vowals,'*');
            break;
        case 3 :
            Ans = str.match(Vowals).length;
            break;
        }
    return Ans;
    }

    
    