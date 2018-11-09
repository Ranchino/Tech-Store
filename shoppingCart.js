
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
    document.getElementById("sumOfProducts").innerHTML = ""

    var totalPrice = 0;
    var shoppingCartItems = JSON.parse(localStorage.shoppingCart);
    
    for(var i = 0; i < shoppingCartItems.length; i++) { 
        totalPrice += shoppingCartItems[i].price;
    }
    $('#sumOfProducts').append(totalPrice);
    
    for (i = 0; i < shoppingCart.length; i++) {
        var createPhone = createPhoneCard(shoppingCart[i])
        console.log(shoppingCart)
        document.getElementById("wrapperForAllPhones").appendChild(createPhone)
    }
}

/* deletProducts form cart page */
function deletePhone(product) {
    shoppingCart.shift(product);
    
    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;
    printProductsInCart();
    console.log(product)
}


/* localStorage cookies number of orders in shopping cart */

$(document).ready(function() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount);
    } else {
        localStorage.clickcount = 0;
    }
    document.querySelector(".number-of-orders").innerHTML = localStorage.clickcount;

    $(".add-to-cart").click(function() {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.querySelector(".number-of-orders").innerHTML = localStorage.clickcount;
        $(".fa-shopping-cart").effect("bounce", "slow")
   
    }); 


    //Function To Display Popup
    $("#userclick").click(function(){
        $("#popUp").fadeIn(500)
    })

    $("#userclose").click(function(){
        $("#popUp").hide()
    })

    //Change between popup forms
    $(".message").click(function(){
        $("form").animate({height: "toggle", opacity: "toggle"}, "slow");
    });
}); 