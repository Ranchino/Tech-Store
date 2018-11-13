
/* creating phones for the cartpage */
function addProductsToWebpage() {
    for(var i = 0; i < listOfProducts.length; i++)
    {
        var createPhone = createPhoneCard(listOfProducts[i])
        wrapperForAllPhones.appendChild(createPhone)
    }
    document.getElementById("main").appendChild(wrapperForAllPhones)
}
/* this creates the wrapperForAllPhones */
var wrapperForAllPhones = document.createElement("div")
wrapperForAllPhones.className = "wrapperForAllPhones"

function createPhoneCard(product) {
    var phone = document.createElement("div")
    phone.className = "phoneCardClass"
    
    var getPhoneImage = document.createElement("img")
<<<<<<< HEAD
    getPhoneImage.src = "./assets/" + cartItem.image
    phone.appendChild(getPhoneImage)
    
    var getPhoneName = document.createElement("h2")
    getPhoneName.innerText = cartItem.title
    phone.appendChild(getPhoneName)
    
    var getPhonePrice = document.createElement("h3")
    getPhonePrice.innerText = cartItem.price + " kr"
=======
    getPhoneImage.src = "./assets/" + product.image
    phone.appendChild(getPhoneImage)
    
    var getPhoneName = document.createElement("h2")
    getPhoneName.innerText = product.title
    phone.appendChild(getPhoneName)
    
    var getPhonePrice = document.createElement("h3")
    getPhonePrice.innerText = product.price + " kr"
>>>>>>> parent of 4d5d31a... fixing bugs
    phone.appendChild(getPhonePrice)

    var deletePhoneFromCart = document.createElement("button")
    deletePhoneFromCart.className = "fa-trash-alt"
    deletePhoneFromCart.onclick = deletePhone.bind(undefined, product)
    deletePhoneFromCart.innerText = " Ta bort";

    phone.appendChild(deletePhoneFromCart)
    
    return phone
}



/* creating localstorage and storing products */
var shoppingCart = [];
var ulElement;

if(localStorage.shoppingCart) {
    shoppingCart = JSON.parse(localStorage.shoppingCart);
}

function addPhones(product) {  
    shoppingCart.push({product, DateOfClick});;
   
    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;
}


// adds products to cart page//
function initSite() {
    printProductsInCart();
    
}

/* here is a printProductsInCart function that I call in i initSite to count the sum of phones added */
function printProductsInCart() {

    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;

    document.getElementById("wrapperForAllPhones").innerHTML = ""
    document.getElementById("sumOfProducts").innerHTML = "Din varukorg är tom!" 
    
    var totalPrice = 0;
    var shoppingCartItems = JSON.parse(localStorage.shoppingCart);
    
<<<<<<< HEAD
    for(var i = 0; i < phoneArray.length; i++) { 
        totalPrice += phoneArray[i].price;
=======
    for(var i = 0; i < shoppingCartItems.length; i++) { 
        totalPrice += shoppingCartItems[i].price;
>>>>>>> parent of 4d5d31a... fixing bugs
        }
    $('#sumOfProducts').text("Totalt pris: " + totalPrice + " kr");
    
    for (i = 0; i < shoppingCart.length; i++) {
        var createPhone = createPhoneCard(shoppingCart[i])
        document.getElementById("wrapperForAllPhones").appendChild(createPhone)
        }
    }

/* deletProducts form cart page */
<<<<<<< HEAD
function deletePhone(cartItem) {

    var phoneArray = JSON.parse(localStorage.shoppingCart);
    localStorage.shoppingCart = phoneArray;

    console.log(phoneArray)

=======
function deletePhone(product) {
    shoppingCart.splice();
>>>>>>> parent of 4d5d31a... fixing bugs
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) - 1;
        document.querySelector(".number-of-orders").innerHTML = localStorage.clickcount;
    }

    //var tempShopingCart = []
<<<<<<< HEAD
    for (var i = 0; i < phoneArray.length; i++) {
        console.log(phoneArray)
        if (cartItem.dateOfClick == phoneArray[i].dateOfClick) {
            phoneArray.splice(i, 1)
            break;
        }
    }
=======
    for (var i = 0; i < shoppingCart.length; i++) {
        
        if (product.title == shoppingCart[i].title) {
            shoppingCart.splice(i, 1)
            break;
        }
    }
    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;
>>>>>>> parent of 4d5d31a... fixing bugs
    printProductsInCart();
}


$(document).ready(function() {
    /* Amount times clicked button */
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount);
    } else {
        localStorage.clickcount = 0;
    }
    document.querySelector(".number-of-orders").innerHTML = localStorage.clickcount;
});
/* Reset clickcount and shoppingcart because purchase is completed */

function purchaseComplete() {
    document.querySelector(".number-of-orders").innerHTML = 0;
    localStorage.clickcount = 0
    $('#sumOfProducts').text("Totalt pris: " +  "0" + " kr");
    localStorage.removeItem("shoppingCart");
    printProductsInCart();
    
    /* Save purchase history to login webpage */
}
