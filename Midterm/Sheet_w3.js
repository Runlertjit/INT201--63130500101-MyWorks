function operater (a,b,fn){
    return fn(a,b);
}
// Arrow Function >> let operater = (a,b,fn) => fn(a,b)


function plus(a,b){
    return a+b
}

console.log(operater(2,3,plus))

function obj (mObj1,fn){
    return fn(mObj1);
}

function sort (a){
        return a.sort(function (a,b){
            return a-b;
        });
}

let myObj = {id:1,name:'Run',id:3,name:'Run',id:2,name:'Run'}
let arr1 = [1,5,4,3,2,6,58,7,9];
let show = obj(arr1,sort);
console.log(show);

let greeting = 'Hello';
greeting = 'Ho Ho';
greeter = () => {greeting = 'Good morning'; return console.log(`greeting in function is ${greeting}`)};
// greeter() ถ้าเขียนแบบ Arrow Function ต้องมี { } คลุม ไม่งั้น Greeting จะไปเรียกใช้ตัวที่มีค่าคือ Ho Ho 
// แต่ถ้าเขียนแบบ Function ปกติก็ไม่มีปัญหา
console.log(greeting);
greeter();

console.log('-----------------------------')
// Explicit เหมือนเป็นการแปลงค่าโดยที่เราเป็นคนกำหนดเอง
let test = '1';
let nhm = Number(test);
console.log(typeof(nhm));

// Implicit เป็นการแปลงค่าโดย Auto
console.log(`This is number : + 1 : ${typeof('This is number : ' + 1)}`);
console.log('y' + 1);
console.log(true + 1);
console.log(false + 1);
console.log([] + true);
console.log(null + 1);

let sum = 25+60+120+240+400+700
console.log(sum)
