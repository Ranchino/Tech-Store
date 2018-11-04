/* if we put a function in javascript the problem would be that when hitting referesh customer looses his basket */

/* Getting json files ready */
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        listOfProducts = data.phones;
        addProductsToWebpage();
    });

/* Creating one parent div for all */
var wrapperForAllPhones = document.createElement("div")
wrapperForAllPhones.className = "wrapperForAllPhones"

/* Telling json objects to go into our div #main,
Loop will always add new product automatically and display on html
Example when adding new phone  */
function addProductsToWebpage() {
    for(var index = 0; index < listOfProducts.length; index++)
    {
        var createPhone = createPhoneCard(listOfProducts[index])
        wrapperForAllPhones.appendChild(createPhone)
    }
    document.getElementById("main").appendChild(wrapperForAllPhones)
}
  
 /* This makes json objects visual on website */
function createPhoneCard(listOfProducts) {
    var phone = document.createElement("div")
    phone.className = "phoneCardClass"

    var getPhoneName = document.createElement("h1")
    getPhoneName.innerText = listOfProducts.title
    phone.appendChild(getPhoneName)

    var getDescription = document.createElement("h5")
    getDescription.innerText = listOfProducts.description
    phone.appendChild(getDescription)

    var getPhoneImage = document.createElement("img")
    getPhoneImage.src = "/assets/" + listOfProducts.image
    phone.appendChild(getPhoneImage)

    var getPhonePrice = document.createElement("h3")
    getPhonePrice.innerText = listOfProducts.price + " kr"
    phone.appendChild(getPhonePrice)

    var addToCart = document.createElement("button")
    addToCart.className = "add-to-cart"
    addToCart.innerText = " Lägg till i kundvagnen"
    phone.appendChild(addToCart)
    
    /* Shopping cart site */
    var getPhoneClearButton = document.createElement("thrash")
    getPhoneClearButton.className = "far fa-trash-alt"
    getPhoneClearButton.setAttribute('href', "#tabort")
    getPhoneClearButton.innerText = " Ta bort"

    phone.appendChild(getPhoneClearButton)
    return phone
    
}



$(document).ready(function() {
    $(".add-to-cart").click(function() {
        if(typeof(Storage)) {
            if (localStorage.ordersInCart) {
                localStorage.ordersInCart = Number(localStorage.ordersInCart) + 1;  
            } 
            } else {
            console.log("testar")
        } 
        $(".fa-shopping-cart").effect("bounce", "slow")
        document.querySelector(".number-of-orders").innerText = "" + localStorage.ordersInCart;
    });
    document.querySelector(".number-of-orders").innerText = "" + localStorage.ordersInCart;
    })
