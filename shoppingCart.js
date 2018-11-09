
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
    
    return phone
}

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
    

function printProductsInCart() {
    var totalPrice = 0;
    var shoppingCartItems = JSON.parse(localStorage.shoppingCart);
    
    for(var i = 0; i < shoppingCartItems.length; i++) { 
        totalPrice += shoppingCartItems[i].price;
    }
    $('#sumOfProducts').append(totalPrice);
    console.log("test")

    for (i = 0; i < shoppingCart.length; i++) {
        var createPhone = createPhoneCard(shoppingCart[i])
        console.log(shoppingCart)
        document.getElementById("wrapperForAllPhones").appendChild(createPhone)
    }
}

