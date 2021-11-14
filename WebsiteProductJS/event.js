export {addCart,remove,searching}
let cart = [];
let numCart = document.querySelector("#num"); //รับ id numCart
//Function for adding product---------------------
function addCart(event){
    let id = event.target.id; // รับ Id ของ button
    let check = cart.find(value => { return value.id == id}) //ใช้ find ในการหาสินค้าในตะกร้า
        if(check != undefined){ //ถ้าไม่พบสินค้าในตะกร้า
            check.quantity++ // ถ้าเป็น True ให้เพิ่มจำนวนสินค้า
            saveCart();
        }else{
            cart.push({id : id,quantity : 1}) //กรณีเป็น False ให้เพิ่ม id และจำนวนสินค้าภายในตะกร้า
            alert(` " ${id} " added in your cart`); // แสดง alert
            saveCart();
    }
    console.log(cart)

    numCart.innerHTML = numProductInCart() //ส่ง numCart ให้แสดง DOM 
}

function saveCart(){
    console.log(JSON.stringify(cart));
    localStorage.setItem('shoppingCart',JSON.stringify(cart));
}

function loadCart(){
    let cartLoad = localStorage.getItem('shoppingCart');
    let InCart = localStorage.getItem('InCarts');
    cart = cartLoad != null ? JSON.parse(cartLoad) : [];
    console.log(InCart)
    numCart.innerHTML = InCart != null ? InCart : 0;
}
loadCart();

function numProductInCart(){
    let numProduct = cart.reduce((count, cartItem) => count + cartItem.quantity, 0); //นับจำนวนสินค้าในตะกร้า
    // document.cookie = `${encodeURIComponent('count')}=${encodeURIComponent(numProduct)};expires=${new Date('January 1, 2022')}`;
    // localStorage.setItem("numProductInCart",numProduct)
    localStorage.setItem('InCarts',numProduct)
    return numProduct;
}

function remove(){
    let remove = document.querySelector('#num')
    cart = [];
    localStorage.removeItem('InCarts');
    localStorage.removeItem('shoppingCart');
    alert('Cart is empty!!!')
    remove.textContent = cart.length;
}

function searching() {
    const productAll = document.getElementsByClassName('sProduct') 
    const searchString = document.querySelector('#SearchProduct');
    const filter = searchString.value.toLowerCase();
    for (let product of productAll){
        let name = product.textContent.toLocaleLowerCase();
        if(name.includes(filter)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }
    }
}


const alertProduct = document.querySelector('#show')
alertProduct.addEventListener('click',showCart);
function showCart(){
    if(cart.length == 0){
        alert('Cart is empty!!')
    }else{
        let alertText = '';
        for(let read of cart){
            alertText +="ProductID: "+ read.id +"  "
            alertText +="Unit: "+ read.quantity +"\n";
             }
    alert("this is your product\n" + alertText);
    }
}

