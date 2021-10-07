
let arr1 = [1,2,3,4,5,6];

arr1.forEach(function(num,index,count,num1){
    console.log(`${index} : ${num} : ${count} : ${num1}`)
});

console.log('-----------------------------------------')
/*
forEach มี parameter เป็น function ที่รับ parameter 3 ตัว
1 = ข้อมูลในลำดับนั้นๆ
2 = ลำดับ
3 = ข้อมูล array ทั้งหมด ดังตัวอย่าง
ถัดจากนี้ไม่มี
*/

arr1.forEach(function(num,index){
    if(index === 2){
        console.log(`Found number ${num} at Array ${index}`)
    }else{console.log(`Not found number is ${num} at Array ${index}`)}
})
console.log('-----------------------------------------')

//ArrowFunction
arr1.forEach(num => (num === 2 ? console.log(`Found number ${num}`) : console.log(`Not found number is ${num}`)));
//Ref: (ForEach) https://lnwquiz.com/post/239
// สำคัญมากกกกกกกก ########ForEach(ไม่สามารถ Return ผลลัพธ์ ออกมาได้ ถ้า Return ออกมาจะเป็น undefined)

// Map() การทำงานเหมือน ForEach แต่ ###สามารถ return ผลลัพธ์ออกมาได้

//Map #####method creates a new array######
let mapArr = arr1.map(function(num,index,arr){
    return arr;
})
console.log(mapArr)
// ทดลองกับ ForEach
let eachArr = arr1.forEach(function(num){
    return num*2;
})
console.log(`Test forEach : ${eachArr}`)


console.log('--------------------------');
//Syntax ----filter((element, index, array) => { ... } )----
//filter() มีหน้าที่ไว้คัดกรองถ้าสมาชิกใน Array ตัวไหนที่เงื่อนไขได้ตามที่ทำหนดไว้ใน Function 
//จะถูกนำมาใส่รวมกันใน Array ใหม่ที่เป็นผลลัพธ์ (สำคัญมาก) Return อาร์เรย์ใหม่ เมื่อผ่านเงื่อนไขที่กำหนด
const member = [
    {name : 'Eva', age : 24},
    {name : 'Adam', age : 48},
    {name : 'Chris', age : 18},
    {name : 'Danny', age : 30},
]

let mem = member.filter((value,index,array) => {
    return value.age > 25;
})
console.log(mem);
// return เป็น Array ตัวใหม่
let arr6 = [1,2,3,6,4,5,8,];
let numArr6 = arr6.filter(a => {
    return a <= 4
});
console.log(numArr6);

let arr7 = ['Hello','Run','World'];
let showArr7 = arr7.filter (function (a){
    return /hello/gi.test(a); //regular expression
})
console.log(showArr7);

// find() Method Find นั้นแทบจะเหมือนกับ Method Filter เลยแต่ต่างกันตรงที่ Method Find 
// นั้น return ค่าออกมาเฉพาะผลลัพธ์ตัวแรกที่ทำได้ตามเงื่อนไขเท่านั้น ถ้าหาไม่เจอเลยจะ Return undefined
// Syntax find((element, index, array) => { ... } )
let arr8 = [1,2,3,6,4,5,8];
let numArr8 = arr8.find(value => {
    return value > 9;
})
console.log(numArr8);

// findIndex จะคล้ายๆ กับของ find แต่ว่าสิ่งที่ return กลับมาคือ [เลข index ของ array แรกที่ผ่าน]
// testing function แทนที่จะเป็นค่าแรก ถ้าไม่เจอจะ return ค่า -1
arr = [1,3,4,5,6];

let numArr9 = arr.findIndex(item =>{
    return item > 5;
})

console.log(numArr9);


console.log('----------------------------------')
// Every & Some มันจะ Return ออกมาเป็น Boolean
const members = [ 
    {name: "Eve", age: 24}, 
    {name: "Adam", age: 48}, 
    {name: "Chris", age: 18}, 
    {name: "Danny", age: 30}
 ]
 // Every Method เป็นการนำค่าที่ได้มาต่อกันโดยใช้ Operator &&(มันคือ And) 
 // จากตัวอย่างโค้ดก็คือ Obj ที่อยู่ใน array อายุ 24และ48และ18และ30 ทั้งหมดอายุมากกว่า 25 
 const everyResult = members.every((member) => {
   return member.age > 25
 })
 console.log(everyResult) // false
 // Some Method คล้ายๆ every แต่เชื่อมด้วย ||(มันคือ Or)
 const someResult = members.some((member) => {
   return member.age > 25
 })
 console.log(someResult)  // true

 //reduce()
 //Syntax : reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
//  Accumulator (ค่าสะสม) 
//  Current Value (ค่าปัจจุบัน) 
//  Current Index (ตำแหน่งปัจจุบัน) 
//  Source Array (ที่มาของ Array) 
//  initialValue (ค่าเริ่มต้น)
let numbers = [0, 1, 2, 3, 4];
let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log("Sum:", sum);

// Ref (reduce): http://marcuscode.com/lang/javascript/array-filter-map-reduce-methods 
// และ https://blog.2my.xyz/2021/02/28/js-map-filter-find-reduce-foreach-every-some/
