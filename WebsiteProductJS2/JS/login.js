import { loadCart } from "./cart.js";
const button = document.querySelector('#button-login');
let loginBox = document.querySelector('#login-box')
let logoutBox = document.querySelector('#logout-box')
let user = document.querySelector('#user');
const textWelcome = document.querySelector('#user-text');
let numCart = document.querySelector("#num"); //รับ id numCart

const login = {
    clickLogin : function() {
        if (user.value == null || user.value == ""){
            alert('Please Login')
        }else{
            logoutBox.style.display = 'inline'
            loginBox.style.display = 'none'
            textWelcome.textContent = user.value
            alert(`Welcome ${user.value}`)
            login.save(user.value);
            location.reload();
            loadCart();
        }
    },
    save : function(username) {
        localStorage.setItem('user',JSON.stringify(username));
    },
    loadUser : function(){
        let getUser = JSON.parse(localStorage.getItem('user'));
        console.log(getUser);
        if (getUser == null){
            loginBox.style.display = 'inline'
            logoutBox.style.display = 'none'
            textWelcome.textContent = ''
        }else{
            logoutBox.style.display = 'inline'
            loginBox.style.display = 'none'
            textWelcome.textContent = getUser
        }
    }
}


function logout(){
    localStorage.removeItem('user');
    numCart.innerHTML = 0;
    login.loadUser();
    location.reload();
    loadCart();
}

logoutBox.addEventListener('click',logout);

button.addEventListener('click',login.clickLogin);
login.loadUser();