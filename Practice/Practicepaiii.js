let str = 'Hello';
console.log(str.charAt(1));

for(let i = 0; i < str.length; i++){
    console.log(str.charAt[i]);
}

str = 'Hello';
let tex = 'World'
for(let i = 0; i < str.length; i++){
    console.log(str.charAt(i));
}

console.log(str.charCodeAt())
console.log(str.concat(tex + "Run"))

str = "Hello world, welcome to the universe.";
console.log (str.endsWith("world",11)) 

str = "Hello world, welcome to the universe.";
str.indexOf("welcome")   // Returns 13
str.indexOf("Welcome")   // Returns -1

str = "Hello planet earth, you are a great planet.";
console.log(str.lastIndexOf("planet", 20))