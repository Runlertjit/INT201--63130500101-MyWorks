let a = 4;
let b = 3;
let c = a => a + 100
console.log(c(a))


// const myFunc = (instructor,ta, ...student) => {let a = 0; return student};
// console.log(myFunc(1,2,3))

const echo = text => text;

const sayHi = (greeting,name) => `${greeting},${name}`;
console.log(sayHi('Hello','World'))

const getClass = () => `INT201`;
console.log(getClass());

console.log('------------------------')
const myFunc = function (instructor = 'unknown', numsOfStd = 0) {
    console.log(instructor);
    console.log(numsOfStd);
  };
myFunc();