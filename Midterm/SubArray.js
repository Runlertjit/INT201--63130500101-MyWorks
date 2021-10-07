// Slice เป็นการสร้าง Array ใหม่
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let sliceF1 = fruits.slice(1);
console.log(sliceF1)
let sliceF2 = fruits.slice(2,4);
console.log(sliceF2); // [ 'Lemon', 'Apple' ]
// Syntax : array.slice(begin, end)
/*  begin เริ่มต้นที่ Index
    end จบที่ index สังเกตที่ Output sliceF2 ด้านบน
*/
// ปล. slice ยังสามารถใช้งานร่วมกับ string ได้อีกด้วยนะ
let str = 'Team Avenger';
let sliceStr = str.slice(2,10);
console.log(sliceStr);


/*splice แม้ว่า splice นั้นจะมีชื่อคล้ายๆ กับ slice แต่ว่า splice จะทำการเปลี่ยนแปลง 
array ตัวเก่า ไม่ได้สร้าง array ใหม่เหมือนกับ slice โดยมันสามารถที่จะนำมาใช้ใน 
การเพิ่มค่าเข้า หรือดึงค่าออก จาก array*/
// Syntax : array.splice(start, deleteCount, item1, item2, ...)
//start คือตัวเริ่มต้น
//deleteCount จำนวนที่ต้องการลบ
//เช่น splice(1,3) ความหมาย เริ่มตั้งแต่ Index ที่ 1 แล้วลบไป 3 ค่า
let movie = [
    'Captain America', //0
    'Iron man', // 1 เริ่มตั้งแต่ตัวนี้ =1
    'Thor', // 2
    'Hulk', // 3 ถึงตัวนี้
    'Doctor Strange' // 4
]

//let spliceMovie1 = movie.splice(1,3); // อันนี้หมายถึงค่าที่ตัดออก
movie.splice(1,3); //ถ้าอันนี้จะหมายถึงค่าปัจจุบันที่ตัดออกไปแล้ว
console.log(movie);
//สามารถ Add ค่าใหม่เข้าไปได้
//Ref : https://medium.com/@rennerwin/%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%81%E0%B8%95%E0%B8%81%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%B0%E0%B8%AB%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87-slice-%E0%B8%81%E0%B8%B1%E0%B8%9A-splice-%E0%B8%82%E0%B8%AD%E0%B8%87-array-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-e2edc45b322d

//Fill คล้ายๆการ Replace
/*
Syntax
fill(value)
fill(value, start)
fill(value, start, end)
*/
//REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill