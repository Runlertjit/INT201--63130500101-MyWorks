let products = [
    {id:1, price:10},
    {id:2, price:20}
];

console.log(products);

let newProducts = {id:1, price:10};
products = [...products, {...newProducts}];
console.log(products);

products = [...products,{id : newProducts.id , price : newProducts.price}]
console.log(products)

newProducts.price = 100;
console.log(products)
console.log('--------------------------------------')
let a,b,rest;
[a,b] = [5,10];
[a,b,c,...rest] = [a,b,15,20,25]
// [a,b,...rest] = [...products,{...newProducts}];
console.log(a);
console.log(b);
rest[rest.length-1] = 30; 
console.log(rest);

let par = num =>{
    return num+num
}
console.log(par(52))

let sort = (srt,...dest) => {
    return dest.sort();
}

console.log(sort(5,6,3,4,5,6));
