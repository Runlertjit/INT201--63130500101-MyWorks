
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

