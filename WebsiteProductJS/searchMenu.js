import { searching } from './event.js'
import { products } from './product.js'
import {showProduct} from './script.js'

const search = document.querySelector('#buttonSch');
search.addEventListener('click', searching);

const searchBtn = document.querySelector('#Simg');
searchBtn.addEventListener('click', myClick, false)
let ClickCount = 0;
function myClick() {
    ClickCount++;
    if (ClickCount % 2 == 0) {
        divWrap.setAttribute('style', 'display: none;');
    } else {
        divWrap.setAttribute('style', 'display: inline;');
    }
}

//function for searching product------------------------
const btn = document.querySelector('#checkAvailable');
btn.addEventListener('click', queryProduct);
function queryProduct(){
let productList = []
let divProduct = document.querySelector('#products');
if (btn.checked == true){
    divProduct.innerHTML = '';
    products.forEach(products => {
    if(products.stock > 0){
        productList.push({id:products.id,
            name:products.name,
            desc:products.desc,
            price:products.price,
            stock:products.stock,
            img:products.img})
        }
    })
}else{
    divProduct.innerHTML = '';
    products.forEach(products => { 
        productList.push({
            id:products.id,
            name:products.name,
            desc:products.desc,
            price:products.price,
            stock:products.stock,
            img:products.img
        })
    })
}
showProduct(productList);
localStorage.setItem('queryProduct',JSON.stringify(productList));
localStorage.setItem('Checkbox',JSON.stringify(btn.checked));
}

function onloadQuery(){
    let divProduct = document.querySelector('#products');
    let getProduct = JSON.parse(localStorage.getItem('queryProduct'));
    let getBtnCheck = JSON.parse(localStorage.getItem('Checkbox'))
    if(getBtnCheck == true){
        divProduct.innerHTML = '';
        document.querySelector('#checkAvailable').checked = getBtnCheck;
        showProduct(getProduct);
    }
    divProduct.innerHTML = '';
    showProduct(getProduct);
}
onloadQuery();


