if(localStorage.shoppingCart) {
    shoppingCart = JSON.parse(localStorage.shoppingCart);
}

/* Printing out cards */
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

/* Add to cart button */
function addPhones(cartItem) {  
    shoppingCart.push(cartItem)
   
    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.shoppingCart = phoneArray;
}

/* On site load */
function initSite() {
    /* if array empty or does not exist */
    if (localStorage.shoppingCart === undefined || shoppingCart.length == 0) {
    document.querySelector(".containerForFaCheck").style.opacity = "0.5"
    document.getElementById("sumOfProducts").innerHTML = "Hoppsan, din varukorg är tom!" 
    }

    document.querySelector(".number-of-orders").innerHTML = shoppingCart.length

    printProductsInCart();
}

var phoneArray = JSON.parse(localStorage.getItem("shoppingCart"));

/* here is a printProductsInCart function that I call in i initSite to count the sum of phones added */
function printProductsInCart() {
    document.getElementById("shoppingCartWrapper").innerHTML = ""
    
    var totalPrice = 0;
    for (var i = 0; i < phoneArray.length; i++) { 
        totalPrice += phoneArray[i].product.price;
        $('#sumOfProducts').text("Totalt pris: " + totalPrice + " kr");
    }
   
    for (i = 0; i < phoneArray.length; i++) {
        var createPhone = shoppingCards(phoneArray[i])
        document.getElementById("shoppingCartWrapper").appendChild(createPhone)
    }
}

/* Delete button, will remove product with unique date */
function deletePhone(cartItem) {
    localStorage.shoppingCart = phoneArray;

    for (var i = 0; i < phoneArray.length; i++) {
        if (cartItem.dateOfClick == phoneArray[i].dateOfClick) {
            phoneArray.splice(i, 1)
            document.querySelector(".number-of-orders").innerHTML = phoneArray.length
            location.reload()

            /* If cart empty.. */
            if (!phoneArray.length) {
                document.querySelector(".containerForFaCheck").style.opacity = "0.5"
                document.getElementById("sumOfProducts").innerHTML = "Hoppsan, din varukorg är tom!" 
            } 
            break;
        }
    }

    localStorage.shoppingCart = JSON.stringify(phoneArray);
    printProductsInCart();
}


var orders = [];

/* Complete purchase button */
function purchaseComplete() {
    /* Check if user logged in */
    if (localStorage.loggedinUser) {
        if (localStorage.shoppingCart) {
            localStorage.removeItem("shoppingCart");
            $('.purchasePopup').show();
            $('.popupCloseButton').click(function(){
            $('.purchasePopup').hide();
            location.reload()
        }); 
        }
        
    } else {
        alert("Logga in först") 
       
    }


    /* Push shoppingCart array to new order array with current user logged in. */
    if (localStorage.orders) {
        orders = JSON.parse(localStorage.orders);
        }
    var user = JSON.parse(localStorage.getItem("loggedinUser"))
    var order = {
        "products": shoppingCart,
        "customer": user.username,
        /* create date for every order, we failed to print out */
        "createDate": new Date().toLocaleString()
    }
    orders.push(order)      

    localStorage.setItem("orders", JSON.stringify(orders))
}

    


    
