
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
    getPhoneImage.src = "./assets/" + product.image
    phone.appendChild(getPhoneImage)
    
    var getPhoneName = document.createElement("h2")
    getPhoneName.innerText = product.title
    phone.appendChild(getPhoneName)
    
    var getPhonePrice = document.createElement("h3")
    getPhonePrice.innerText = product.price + " kr"
    phone.appendChild(getPhonePrice)

    var deletePhoneFromCart = document.createElement("button")
    deletePhoneFromCart.className = "fa-trash-alt"
    deletePhoneFromCart.onclick = deletePhone.bind(undefined, product)
    deletePhoneFromCart.innerText = " Ta bort";

    phone.appendChild(deletePhoneFromCart)
    
    return phone
}

/* here it will be a confirmation purchase with jquery */


/* creating localstorage and storing products */
var shoppingCart = [];
var ulElement;

if(localStorage.shoppingCart) {
    shoppingCart = JSON.parse(localStorage.shoppingCart);
}

function addPhones(product) {  
    shoppingCart.push(product);
   
    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;
}


// adds products to cart page//
function initSite() {
    printProductsInCart();
    
}

/* here is a printProductsInCart function that I kallar på i initSite för att räkna ut produkten man väljer och priser */
function printProductsInCart() {
    document.getElementById("wrapperForAllPhones").innerHTML = ""
    document.getElementById("sumOfProducts").innerHTML = "Din varukorg är tom!" 
    
    var totalPrice = 0;
    var shoppingCartItems = JSON.parse(localStorage.shoppingCart);
    
    for(var i = 0; i < shoppingCartItems.length; i++) { 
        totalPrice += shoppingCartItems[i].price;
        
    }
    $('#sumOfProducts').text("Totalt pris: " + totalPrice + " kr");
    
    for (i = 0; i < shoppingCart.length; i++) {
        var createPhone = createPhoneCard(shoppingCart[i])
        document.getElementById("wrapperForAllPhones").appendChild(createPhone)
    }
}

/* deletProducts form cart page */
function deletePhone(product) {
    shoppingCart.splice();
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) - 1;
        document.querySelector(".number-of-orders").innerHTML = localStorage.clickcount;
    }
    //var tempShopingCart = []
    for (var i = 0; i < shoppingCart.length; i++) {

        if (product.title == shoppingCart[i].title) {
            shoppingCart.splice(i, 1)
            break;
        }
    }

    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;
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
    localStorage.removeItem("shoppingCart")
    printProductsInCart();

    /* Save purchase history to login webpage */
}