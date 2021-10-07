// //Sheet Week2
// let str1 = 'Hello';
// let str2 = 'Hello';
// let str3 = str1;
// console.log(`str1 == str2 : ${str1 == str2}`);
// console.log(`str1 === str2 : ${str1 === str2}`);
// console.log(`str1 == str3 : ${str1 == str3}`);
// console.log(`str1 === str3 : ${str1 === str3}`);
// console.log(`str1.charAt(str1.length-1) = ${str1.charAt(str1.length-1)}`);

// console.log('-------------------------')
// let obj1 = {id: 1, name: 'Run'};
// let obj2 = {id: 1, name: 'Run'};
// let obj3 = obj1;
// console.log(`obj1 == obj2 : ${obj1 == obj2}`);
// console.log(`obj1 === obj2 : ${obj1 === obj2}`); //คนละ Address กัน
// console.log(`obj1 == obj3 : ${obj1 == obj3}`);
// console.log(`obj1 === obj3 : ${obj1 === obj3}`);
// // Object เก็บค่าเป็น Address จากตัวอย่างก็ประมาณ Address === Address 

// console.log('--------------------------')
// let a = [];
// let b = a;
// b[0] = 1;
// console.log(`Array B[0] is ${b[0]} and Array A[0] is ${a[0]}`)
// console.log(`a === b : ${a===b}`)
// // Array ก็เป็น Object

// console.log('--------------------------')
// // loop for/of
// // จะใช้กับ iterable objects , arrays, strings, sets, และ maps
// let arr1 = [1,5,4,3,2,6,8,7,9];
// let arr2 = ['mon','tue','wed','sun','fri'];
// let arr3 = [{id: 1, name: 'Run'},{id: 2, name: 'Mix'}];

// for (let n of arr1){
//     console.log(n)
// }

// for (let n of arr3){
//     console.log(n)
// }

// console.log('--------------------------')
// // loop for/in
// // ใช้สำหรับวนรอบ Property ของออบเจ็คที่สามารถวนรอบได้

// for (let n in arr1){
//     console.log(`for/in in Array [Integer]: ${n}`)
// }
// console.log(`----String----`)
// for (let n in arr2){
//     console.log(`for/in in Array [String]: ${n}`)
// }
// console.log(`----Object----`)
// for (let n in arr3){
//     console.log(`for/in in Array [Object]: ${n}`)
// }
// // ความแตกต่างของ for/of และ for/in ในการ loop การใช้ for/of จะแสดงค่าของแต่ละตัวใน Array
// // แต่ถ้าเอา for/in ไปวน loop Array มันจะส่ง index กลับคืนมาให้ 


let answerSet = [3,2,1,4,4]
let selectQuestion = new Array();
for(let j in answerSet){
    if(answerSet[j] == 1 || answerSet[j] == 2 || answerSet[j] == 3 || answerSet[j] == 4){
    //สาเหตุที่ selectQuestion จะต้อง +1 ก่อนใส่ค่าเพราะว่าค่าเดิมของ j จะเป็น index แต่เราต้องการให้เก็บข้อมูลข้อดังนั้นเราจะต้อง +1 ก่อน
     selectQuestion.push(Number(j)+1);
    }
}
