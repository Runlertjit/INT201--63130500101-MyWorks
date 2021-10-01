/*
let per1 = {id: 1 ,  name: 'Run'};
let per2 = {id: 1 ,  name: 'Run'};

console.log(per1 == per2);
//----------------------------------
let arr1 = [0,2,4,6]
let arr2 = [0,1,4,6]
console.log(arr1 == arr2) //false
arr2 = arr1; // memory address of arr1 to arr2
console.log(arr2)
console.log(arr1 == arr2) //true
console.log(arr1 === arr2) //true
arr2[1] = 5
console.log(arr1[1]); // 5
console.log(arr1); // [0,5,4,6]
console.log(arr2); // [0,5,4,6]
//-------------------------------

function doSomething(value){
    value.name = 'unknown'
}
let item = {name:'ABC'}
doSomething(item)
console.log(item.name);
//-----------------------
function doSomething2(value){
    value = 100;
}
let item1 = true;
doSomething2(item1);
console.log(item1);
//----------------------

let num = 100;
function doSomething3(num){
    num == 200;
}
doSomething3(num);
console.log(num);
//----------------------
*/
let book1 = {isbn: 123456789,title: "JavaScript"};
let book2 = {isbn: 123456789,title: "JavaScript"};

function shallowEquality(object1, object2){
    const keys1=Object.keys(object1);
    const keys2=Object.keys(object2);
    if(keys1.length !== keys2.length){
        return false;
    }for(let key of keys1){
        if(object1[key] !== object2[key] ){
            return false;
        }
    }
    return true;
}
console.log("shallow equality: " + shallowEquality(book1, book2));
//-----------------------------------------
let arr1 = []; //array
let obj = {}; //object
console.log(typeof arr1);
console.log(arr1.length);
arr1 = [10, true, 1, 'unknown', ['A', 'B', 'C'], { id: 1, name: 'Adam' }]; //array is untyped
console.log(arr1[arr1.length - 1]);
console.log(arr1[arr1[2]]); // [integer expression]
console.log(arr1[4][2]);
console.log(arr1[4][arr1[4].length-1]);
console.log(arr1[arr1.length-1]['name'])
arr1[4][arr1[4].length - arr1[4].length] = 'X';
console.log(arr1[4][0]);

arr2 = ["confirm",...arr1];
console.log(arr2);

let arr3 = "hello"
let arr4 = [...arr3]
console.log(arr4);
console.log(arr4.join(''));
 /*
//include object variable  in array with spread operator
let per1 = [{ id: 1, name: 'Adam' }];
let arr1 = [...per1];

arr1[0].name = 'Joe';
console.log(per1);

//include primitive variable in array with spread operator
let num1 = [10];
let arr2 = [...num1];

arr2[0] = 20;
console.log(num1);
*/
//--------------------------------------
let a = Array.of(1,'A',true)
console.log(a)
let b = Array.from(a);
console.log(b)

({ a, b, ...rest } = { a: true, b: 20, c: 30, d: 40 });

console.log(a); // 10

console.log(b); // 20

console.log(typeof a);

console.log(typeof b);

console.log(typeof rest); // {c: 30, d: 4