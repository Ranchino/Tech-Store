
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

function createPhoneCard(cartItem) {
    var phone = document.createElement("div")
    phone.className = "phoneCardClass"
    
    var getPhoneImage = document.createElement("img")
    getPhoneImage.src = "./assets/" + cartItem.image
    phone.appendChild(getPhoneImage)
    
    var getPhoneName = document.createElement("h2")
    getPhoneName.innerText = cartItem.title
    phone.appendChild(getPhoneName)
    
    var getPhonePrice = document.createElement("h3")
    getPhonePrice.innerText = cartItem.price + " kr"
    phone.appendChild(getPhonePrice)

    var deletePhoneFromCart = document.createElement("button")
    deletePhoneFromCart.className = "fa-trash-alt"
    deletePhoneFromCart.onclick = deletePhone.bind(undefined, cartItem.dateOfClick)
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
    var dateOfClick = new Date().toUTCString();
    shoppingCart.push({product, dateOfClick});;
   
    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;
}


// adds products to cart page//
function initSite() {
    printProductsInCart();
    
}

/* here is a printProductsInCart function that I call in i initSite to count the sum of phones added */
function printProductsInCart(cartItem) {

    var phoneArray = JSON.parse(localStorage.shoppingCart);
    console.log(phoneArray)

    document.getElementById("sumOfProducts").innerHTML = "Din varukorg är tom!" 
    
    var totalPrice = 0;

    for(var i = 0; i < phoneArray.length; i++) { 
        totalPrice += phoneArray[i].price;
        console.log(phoneArray[i].price)
        }
    $('#sumOfProducts').text("Totalt pris: " + totalPrice + " kr");
    
    for (i = 0; i < phoneArray.length; i++) {
        var createPhone = createPhoneCard(phoneArray[i])
        document.getElementById("wrapperForAllPhones").appendChild(createPhone)
        }
    }

/* deletProducts form cart page */
function deletePhone(cartItem) {
    
    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;

    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) - 1;
        document.querySelector(".number-of-orders").innerHTML = localStorage.clickcount;
    }

    //var tempShopingCart = []
    for (var i = 0; i < phoneArray.length; i++) {
        
        if (cartItem.title == phoneArray[i].title) {
            shoppingCart.splice(i, 1)
            break;
        }
    }
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
         
    //Function To Display Popup Login Form
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
/* Reset clickcount and shoppingcart because purchase is completed */

function purchaseComplete() {
    document.querySelector(".number-of-orders").innerHTML = 0;
    localStorage.clickcount = 0
    $('#sumOfProducts').text("Totalt pris: " +  "0" + " kr");
    localStorage.removeItem("shoppingCart");
    printProductsInCart();
    
    /* Save purchase history to login webpage */
}


