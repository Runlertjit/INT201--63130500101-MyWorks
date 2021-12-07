// export { searching, showSearch };


//Fliped Search Bar.
const divWrap = document.querySelector('#divWrap');
const searchBar = document.querySelector('#Simg');
searchBar.addEventListener('click', showSearch);
function showSearch() {
  if (divWrap.style.display != "none") {
    divWrap.style.display = "none";
  } else {
    divWrap.style.display = "inline";
  }
}

//Searching product.
const search = document.querySelector('#buttonSch');
search.addEventListener('click', searching);
function searching() {
  const productAll = document.getElementsByClassName("sProduct");
  const searchString = document.querySelector("#SearchProduct");
  const filter = searchString.value.toLowerCase();
  console.log(filter)
  for (let product of productAll) {
    let name = product.textContent.toLocaleLowerCase();
    console.log(name)
    if (name.includes(filter)) {
      product.style.display = "inline";
    } else {
      product.style.display = "none";
    }
  }
}




//----------- Code เก่า ------------------ 
//let count = 0;
// function showSearch() {
// count++
//   if (count % 2 == 0) {
//     divWrap.setAttribute('style', 'display: none;');
//   } else {
//     divWrap.setAttribute('style', 'display: inline;');
//   }
// }
