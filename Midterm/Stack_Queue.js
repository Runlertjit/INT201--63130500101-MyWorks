let arr = [1,2,3];
let arr2 = [...arr,4]
console.log(arr);
arr.push(4);
console.log(arr);
delete arr2[arr2.length-1]
console.log(`อันนี้ใช้ Delete`)
console.log(arr2)
console.log(`อันนี้ใช้ pop`)
console.log(arr + ` ค่าที่ return ออกมา ${arr.pop()}`)
// ข้อแตกต่างของการใช้ delete และ pop ถ้าใช้ delete มันจะไม่ลบ Index แค่ลบค่า value ใน Index นั้น 
// เช่น [ 1, 2, 3, <1 empty item> ] ซึ่งแตกต่างจาก pop() เพราะ มันลบซะเกลี้ยงเลย