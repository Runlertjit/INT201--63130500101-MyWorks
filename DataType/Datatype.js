
/*
//-----------------var-----------------  
var greeting = 'Hey';
var greeting = 'Ho Ho';

function greeter(){
    var msg = 'hello'
}

console.log(greeting);
console.log(greeter)
*/

/*
var year = 'leap';
function test1(){
    if (year ==='leap')
 var year = 'Hey 366 days'; //re-decleard

}
console.log(year);
console.log(test1);

//-----------------let------------------
let greeting = 'Hey';
greeting ='Ho Ho'
function greeter(){
    let greeting = 'Good morning';
    console.log(`greeting in function is ${greeting}`);
}
greeter(); console .log(greeting ); //Ho Ho

//-----------------const-----------------
const greeting = 'Hey';
//const greeting = 'Hello'; //Error
//greeting = 'Say Hi' // Error
function greeter(){
    const greeting = 'Good morning'; 
    console.log(`greeting in function is ${greeting}`);
}
greeter(); console .log(greeting ); //Ho Ho*/

/*function myFunction(){
    var myVar = 'Run';
    console.log(myVar);
}
console.log(myVar);*/


/*
//--- Var จะ Scope Function
var myVar = 'Mix';
function myFunction() {
  var myVar = "Nick";
  if (true) {
    var myVar = "John";
    console.log(myVar); // "John"
    // จริงๆ แล้ว myvar เป็นตัวแปร function scoped เราแค่ได้ลบค่าตัวแปร myVar จาก "Nick" และเปลี่ยนเป็น "John"
  }
  console.log(myVar); // "John" - จะเห็นได้ว่าค่าได้ถูกเปลี่ยนไปแล้ว
}
myFunction();
console.log(myVar); // จะเกิด ReferenceError เพราะ myVar ไม่สามารถเข้าถึงได้จากภายนอก function
*/


/*
// เกิดเป็น Undefined คือประกาศตัวแปรไว้แต่ไม่ได้ assign ค่าเอาไว้
console.log(myVar);
var myVar = 2;
*/

//---------------let---------------
//ข้อสำคัญในการใช้ let
// ไม่สามารถสร้างตัวแปรที่ชื่อเหมือนเดิมขึ้นมาได้ แต่สามารถแทนค่าใหม่ลงไปได้ เช่น
// let a = 5; let a = 4; แบบนี้จะถือว่าผิด
// let a = 5; a = 4; แบบนี้สามารถทำได้
//  เป็น block scoped
//  จะไม่สามารถเข้าถึงก่อนที่มันจะถูก assign ค่าได้
//  ไม่สามารถประกาศตัวแปรซ้ำใน scope เดียวกันได้
/*
function myFunction() {
    let myVar = "Nick";
  if (true) {
    let myVar = "John";
    console.log(myVar); // "John"
    // จริงๆ แล้ว myVar เป็น block scoped เราสามารถสร้างตัวแปร myVar ใหม่ได้
    // ตัวแปรนี้จะไม่สามารถเข้าถึงได้จากภายนอก block นี้และเป็นอิสระจากกัน
    // กับตัวแปร myVar ตัวแรกที่เราสร้าง !
  }
  console.log(myVar); // "Nick", จะเห็นตามที่อธิบายข้างต้นว่าภายใน block ไม่ส่งผลกระทบกับค่านี้
}
myFunction();
console.log(myVar); // จะเกิด ReferenceError เพราะ myVar จะไม่สามารถเข้าถึงได้จากภายนอก function
*/

//---------------const---------------
// สรุปสั้นๆ สำหรับตัวแปรที่ประกาศแบบ const:
/*
1.เป็น block scoped
2.ไม่สามารถเข้าถึงได้ก่อนถูก assign ค่า
3.ไม่สามารถประกาศซ้ำได้ใน scope เดียวกัน
4.ไม่สามารถ assign ซ้ำได้
*/
/*
const myVar = "Nick";
myVar = "John" // เกิด error เพราะไม่สามารถ assign ค่าซ้ำได้

const myVar = "Nick";
const myVar = "John" // เกิด error เพราะไม่สามารถประกาศตัวแปรซ้ำได้

const myConst = 'Run';
function testMyConst(){
    const myConst = 'LJT';
    if(true){
        const myConst = 'Mix';
        console.log(myConst);
    }
    console.log(myConst);// ยึดค่า assign ตัวแรกถ้าลบ myConst = LJT ออกจะมีค่าเป็น Run
}
console.log(myConst);
testMyConst();
*/

/*ความเหมือนและแตกต่างระหว่าง let กับ Const
-- อยู่ใน Block Scope เหมือนกัน
-- ไม่สามารถประกาศตัวแปรซ้ำกันได้ใน Block Scope เดียวกัน
-- let สามารถแทนค่าใหม่ลงไปในตัวแปรที่เคยประกาศมาแล้วได้ใน Block Scope เดียวกัน
-- const ไม่สามารถประกาศหรือแทนค่าตัวแปรใหม่ได้เลยใน Block Scope เดียวกัน
*/
