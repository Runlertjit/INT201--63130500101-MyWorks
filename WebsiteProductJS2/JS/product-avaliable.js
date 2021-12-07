// import { showProduct } from "./show-product.js";
// import { products } from "./product-list.js";
// export { queryProduct, onloadQuery };

const divProduct = document.querySelector("#products");
const checkAvl = document.querySelector("#checkAvailable");

let queryProductAvl = {
  queryProduct : () => {
    let productAll = document.getElementsByClassName("sProduct");
    if (checkAvl.checked){
      for (let product of productAll) {
        let name = product.textContent.toLocaleLowerCase();
        if(name.includes("stock: 0")){
          product.style.display = "none";
        } else {
          product.style.display = "inline";
        }
      }
    }else{ // ถ้าปุ่มเป็น false
      for (let product of productAll) {
        product.style.display = "inline"
      }
    }
      localStorage.setItem("Checkbox", JSON.stringify(checkAvl.checked));
  }
};

checkAvl.addEventListener("click", queryProductAvl.queryProduct);


function onloadQuery() {
  let getBtnCheck = JSON.parse(localStorage.getItem("Checkbox"));
  if (getBtnCheck == true) {
    document.querySelector("#checkAvailable").checked = getBtnCheck;
    queryProductAvl.queryProduct();
  }
}
onloadQuery();


// --------------Code เก่า------------------
// function for check Product available
// function queryProduct() {
//   let productList = []; // สร้าง Array ว่างๆ
//   if (btn.checked == true) {
//     divProduct.innerHTML = '';
//     products.forEach(products => {
//         if (products.stock > 0) {
//             productList.push({
//                 id: products.id,
//                 name: products.name,
//                 desc: products.desc,
//                 price: products.price,
//                 stock: products.stock,
//                 img: products.img
//             })
//         }
//     })
//   } else {
//     divProduct.innerHTML = '';
//     products.forEach(products => {
//         productList.push({
//             id: products.id,
//             name: products.name,
//             desc: products.desc,
//             price: products.price,
//             stock: products.stock,
//             img: products.img
//         })
//     })
//   }
//   divProduct.innerHTML = "";
//   showProduct(productList); // เอา Array ที่สร้างไว้เป็น parameter เพื่อให้ function showProduct ทำงาน
//   localStorage.setItem("queryProduct", JSON.stringify(productList)); // เก็บข้อมูลใน Array ทั้งหมดลงใน localStorage
//   localStorage.setItem("Checkbox", JSON.stringify(btn.checked)); // เก็บ button status ลงใน localStorage
// }


// function for check Product available
// function queryProduct() {
//   let productList = []; // สร้าง Array ว่างๆ
//   if (checkAvl.checked == true) {
//     // ถ้าปุ่ม Product avaliable เป็นจริง
//     productList = products.filter((product) => {
//       return product.stock > 0;
//     });
//   } else {
//     productList = products;
//   }
//   divProduct.innerHTML = "";
//   showProduct(productList); // เอา Array ที่สร้างไว้เป็น parameter เพื่อให้ function showProduct ทำงาน
//   localStorage.setItem("queryProduct", JSON.stringify(productList)); // เก็บข้อมูลใน Array ทั้งหมดลงใน localStorage
//   localStorage.setItem("Checkbox", JSON.stringify(checkAvl.checked)); // เก็บ button status ลงใน localStorage
// }

// function onloadQuery() {
//   let getProduct = JSON.parse(localStorage.getItem("queryProduct")); // ดึง queryProduct จากใน localStorage และแปลงค่ากลับมา
//   let getBtnCheck = JSON.parse(localStorage.getItem("Checkbox")); // ดึง Checkbox จากใน localStorage และแปลงค่ากลับมา
//   if (getBtnCheck) {
//     //ถ้า Button เป็น True
//     divProduct.innerHTML = ""; //ลบ ParentNode ทั้งหมดของ #products
//     document.querySelector("#checkAvailable").checked = getBtnCheck; //ตั้งสถานะของปุ่มให้เป็น True
//     showProduct(getProduct); //แสดง Product ทั้งหมดที่ดึงค่ากลับมาจาก localStorage
//   }
// }
// onloadQuery();
