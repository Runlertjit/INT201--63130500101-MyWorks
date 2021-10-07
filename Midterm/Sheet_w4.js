/*
function distinct (num1,num2){
    console.log(typeof(num1));
    console.log(typeof(num2));
    return Math.sqrt((num1.x - num2.x) **140 + (num1.y - num2.y));
}

let obj = {x:10,y:13};
let obj2 = {x:5,y:8};
let show = distinct(obj,obj2);
console.log(show)
*/
console.log('-----------------------')
//-------Array---------
let arr1 = [5,10,15]
let arr2 = arr1 // เป็นการชี้ไปที่ Obj เดียวกัน
arr2[0] = 4;
console.log(arr1);
console.log(arr2);

let arr3 = [...arr1]; // เป็นแค่การ Copy ค่าของ arr1 แต่คนละ Address กัน
arr3[0] = 100;
console.log(arr1);
console.log(arr3);

//-----------------------
//Array.of() ใช้ในการสร้าง Array อีกวิธีหนึ่ง สมมุติว่า
/*  let arr1 = Array(10) ความหมายของมันคือสร้าง Array ที่สามารถเก็บค่าได้ 6 ค่า นับจาก 0 ถึง 5
    let arr2 = Array.of(10) ความหมายของมันขึ้นสร้าง Array ที่มีค่า Index 0 เท่ากับ 10
*/
console.log('-----------------------')
let arr4 = Array.of(5);
let arr5 = Array(5);

console.log(arr4);
console.log(arr5);
console.log('--------------------')
//Array.from()
let j =  Array.of(1,2,3)
let k = Array.from(j);
console.log(k)
//ทดลองว่า Array.from เหมือน Spread มั้ย
k[0] = 4;
console.log(j)
console.log(k)
//สรุป Array.from ทำงานเหมือน Spread คือ เป็นการ Copy ค่าที่อยู่ใน Array แต่คนละ Address กัน

console.log('--------------------')
let a = ['hello'];
let value = a[0]; // value = hello ไม่เป็น Array
console.log(value);
a[1] = 3.5; //['hello',3.5]
let i = 2;
a[i] = 3; //['hello',3.5,3]
a[i + 1] = 'world'; // ['hello',3.5,3,world]
a[a[i]] = a[0]; // a[i] == i = 2 เท่ากับ ค่าของ Array ที่ช่อง Index เท่ากับ 2 [Index ช่องที่ 2 คือ 3] a[3] = 'hello'
console.log(a)