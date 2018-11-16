/* creating localstorage and storing products */
var shoppingCart = [];
var historyX = [];

if(localStorage.shoppingCart) {
    shoppingCart = JSON.parse(localStorage.shoppingCart);
}

/* Reset clickcount and shoppingcart because purchase is completed */
if(localStorage.history) {
    history = JSON.parse(localStorage.history);
}

function shoppingCards(cartItem) {
    var phone = document.createElement("div")
    phone.className = "shoppingCardClass"
    
    var getPhoneImage = document.createElement("img")
    getPhoneImage.src = "./assets/" + cartItem.product.image
    phone.appendChild(getPhoneImage)
    
    var getPhoneName = document.createElement("h2")
    getPhoneName.innerText = cartItem.product.title
    phone.appendChild(getPhoneName)
    
    var getPhonePrice = document.createElement("h3")
    getPhonePrice.innerText = cartItem.product.price + " kr"
    phone.appendChild(getPhonePrice)

    var deletePhoneFromCart = document.createElement("button")
    deletePhoneFromCart.className = "fa-trash-alt"
    deletePhoneFromCart.onclick = deletePhone.bind(undefined, cartItem)
    deletePhoneFromCart.innerText = " Ta bort";

    phone.appendChild(deletePhoneFromCart)
    
    return phone
}


function addPhones(cartItem) {  
    shoppingCart.push(cartItem)
   
    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;
}

// adds products to cart page//
function initSite() {
    printProductsInCart();
}

/* here is a printProductsInCart function that I call in i initSite to count the sum of phones added */
function printProductsInCart() {
    var phoneArray = JSON.parse(localStorage.shoppingCart);

    document.getElementById("shoppingCartWrapper").innerHTML = ""
    document.getElementById("sumOfProducts").innerHTML = "Din varukorg är tom!" 
    
    var totalPrice = 0;
    console.log(phoneArray)
    for (var i = 0; i < phoneArray.length; i++) { 
        totalPrice += phoneArray[i].product.price;
    }

    $('#sumOfProducts').text("Totalt pris: " + totalPrice + " kr");
    
    for (i = 0; i < phoneArray.length; i++) {
        var createPhone = shoppingCards(phoneArray[i])
        document.getElementById("shoppingCartWrapper").appendChild(createPhone)
    }
}


/* deletProducts form cart page */
function deletePhone(cartItem) {
    
    var phoneArray = JSON.parse(localStorage.shoppingCart);
    localStorage.shoppingCart = phoneArray;

    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) - 1;
        document.querySelector(".number-of-orders").innerHTML = localStorage.clickcount;
    }

    //var tempShopingCart = []
    for (var i = 0; i < phoneArray.length; i++) {
        console.log(cartItem.dateOfClick, phoneArray[i].dateOfClick)
        if (cartItem.dateOfClick == phoneArray[i].dateOfClick) {
            phoneArray.splice(i, 1)
            break;
        }
    }

    console.log(phoneArray)
    localStorage.shoppingCart = JSON.stringify(phoneArray);
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
    $('#sumOfProducts').text("Ojsan, din varukorg är tom!");
    //Function To Display Popup Login Form

});
/* Reset clickcount and shoppingcart because purchase is completed */


function purchaseComplete() {
    if (localStorage.loggedinUser) {
        localStorage.removeItem("shoppingCart");
        localStorage.setItem("historyX", JSON.stringify(shoppingCart));
        document.querySelector(".number-of-orders").innerHTML = 0;
        localStorage.clickcount = 0
        $('.purchasePopup').show();
        $('.popupCloseButton').click(function(){
            $('.purchasePopup').hide();
            location.reload()
        }); 
        console.log("ewfw")
    } else {
        alert("LOGGA IN först")
       
    }


    var orders = [];
    if (localStorage.orders) {
        orders = JSON.parse(localStorage.orders);
    }
    var user = JSON.parse(localStorage.getItem("loggedinUser"))

    var order = {
        "products": shoppingCart,
        "customer": user.username
    }
    console.log(order)

    orders.push(order)

    console.log(orders)
    
    localStorage.setItem("orders", JSON.stringify(orders))
    

    /* Save purchase history to the loggedin user */

    var historyDone = JSON.parse(localStorage.getItem("historyX"));
   

    }
    


    
