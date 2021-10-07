// const myFunc = function (instructor = undefined, numsOfStd = 0) {
//   console.log(instructor);
//   console.log(numsOfStd);
//   return instructor;
// };

// myFunc();

myFunc = theObject => theObject.model = 'A9999';
let mycar = {model: 'A1001',price: 199}
console.log(mycar.model);

myFunc(mycar);
console.log(mycar.model);

square(3); //hoisting
function square (side){
return side * side;
}