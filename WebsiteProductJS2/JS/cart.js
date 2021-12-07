import { products } from "./product-list.js";
import { cookie } from "./cookie.js";
export { cartFn,loadCart }

let cart = [];
let numCart = document.querySelector("#num"); //รับ id numCart
let getUser = JSON.parse(localStorage.getItem('user'))

let cartFn = {
    addCart : (event) => {
        let id = event.target.id;
        let check = cart.find(value => { return value.id == id })
        if(getUser != null){
            if (check != undefined) {
                let checkStock = products.find(value => {return value.id == check.id}) 
                if(check.quantity < checkStock.stock){
                    check.quantity++
                    cartFn.saveCart(getUser);
                }else{
                    alert('Out of Stock')
                }
            } else {
                let firstAdd = products.find(value =>{return value.id == id})
                cart.push({ id: firstAdd.id, name : firstAdd.name,quantity: 1 })
                alert(` " ${id} " added in your cart`);
                cartFn.saveCart(getUser);
            }
        }else{
            if (check != undefined) {
                let checkStock = products.find(value => {return value.id == check.id}) 
                if(check.quantity < checkStock.stock){
                    check.quantity++
                    cartFn.saveCart('shoppingCart');
                }else{
                    alert('Out of Stock')
                }
            } else {
                let firstAdd = products.find(value =>{return value.id == id})
                cart.push({ id: firstAdd.id, name : firstAdd.name,quantity: 1 })
                alert(` " ${id} " added in your cart`);
                cartFn.saveCart('shoppingCart');
            }
        }
        numCart.innerHTML = cartFn.numProductInCart();
    },
    

    saveCart: (user = String) => {
        localStorage.setItem(user,JSON.stringify(cart)); 
    },


    numProductInCart: () => {
        if(getUser != null){
            let getCartUser = JSON.parse(localStorage.getItem(getUser));
            getCartUser.reduce((count,item) => {count + item.quantity},0);
            location.reload();
            return getCartUser
        }else{
            let numProduct = JSON.parse(localStorage.getItem('shoppingCart'))
            numProduct.reduce((count,item) => {count + item.quantity},0);
            location.reload();
            return numProduct;
        }
    },


    remove : () => {
        cart = [];
        if(getUser != null){
            localStorage.removeItem(getUser);
        }else{
            localStorage.removeItem('shoppingCart');
        }
        alert('Remove product in cart.')
        numCart.textContent = cart.length;
    },


    showCart : () => {
        if (cart.length == 0) {
            alert('Cart is empty!!')
        } else {
            let alertText = '';
            cart.forEach(product => { alertText += `ID: ${product.id} Name: ${product.name} Unit: ${product.quantity} \n`})
            alert("this is your product\n" + alertText);
        }
    }
}

function loadCart() {
    if (getUser != null){
        let cartLoad = JSON.parse(localStorage.getItem(getUser));
        cart = cartLoad != null ? cartLoad : [];
        numCart.innerHTML = cartLoad != null ? cartLoad.reduce((count, item) => count + item.quantity, 0) : 0;
    }else{
        let cartLoad = JSON.parse(localStorage.getItem('shoppingCart'));
        cart = cartLoad != null ? cartLoad : [];
        numCart.innerHTML = cartLoad != null ? cartLoad.reduce((count, item) => count + item.quantity, 0) : 0;
    }
}
loadCart();


//Clear Product.
const del = document.querySelector('#delete');
del.addEventListener('click',cartFn.remove);


//Show product in cart.
const showProduct = document.querySelector('#show');
showProduct.addEventListener('click',cartFn.showCart);

