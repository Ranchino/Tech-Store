/* Home page array list of products*/
var listOfProducts = []

/* Loading json files */
    fetch("./products.json")
    .then(function(response) {
        return response.json();
})

    .then(function(data) {
        listOfProducts = data.phones;
        addProductsToWebpage();
});

 
/* Creating new container div & printing products inside container.
Telling our cards to go inside wrapperForAllPhones.
Loop through our array from 0, if new product added it will create new card */
function addProductsToWebpage() {
    var wrapperForAllPhones = document.createElement("div")
    wrapperForAllPhones.className = "wrapperForAllPhones"

    for(var index = 0; index < listOfProducts.length; index++)
    {
        var createPhone = createPhoneCard(listOfProducts[index])
        wrapperForAllPhones.appendChild(createPhone)
    }
    document.getElementById("main").appendChild(wrapperForAllPhones)
}

 /* Creating elements & printing out cards to homepage */
function createPhoneCard(product) {
    var phone = document.createElement("div")
    phone.className = "items phoneCardClass"

    var getPhoneName = document.createElement("h1")
    getPhoneName.innerText = product.title
    phone.appendChild(getPhoneName)

    var getDescription = document.createElement("h5")
    getDescription.innerText = product.description
    phone.appendChild(getDescription)

    var getPhoneImage = document.createElement("img")
    getPhoneImage.src = "./assets/" + product.image
    phone.appendChild(getPhoneImage)

    var getPhoneName = document.createElement("h2")
    getPhoneName.innerText = product.title
    phone.appendChild(getPhoneName)

    var getPhonePrice = document.createElement("h3")
    getPhonePrice.innerText = product.price + " kr"
    phone.appendChild(getPhonePrice)
    
    var addToCart = document.createElement("button")
    addToCart.className = "add-to-cart my-btn"
    addToCart.onclick = addPhones.bind(undefined, product)
    addToCart.innerText = " Lägg till i kundvagnen"
    phone.appendChild(addToCart)
    
    return phone  
}

/* Add to shopping cart button 
Set localstorage called shoppingCart
Applying date to each product for unique ID (for delete button later)
Check cart length and print out number on header
*/
var shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

function addPhones(product) {
    var dateOfClick = new Date().toLocaleString();

    if (!shoppingCart) {
        shoppingCart = [{product: product, dateOfClick: dateOfClick}]
    } else {
        shoppingCart.push({product: product, dateOfClick: dateOfClick})
    }
    document.querySelector(".number-of-orders").innerHTML = shoppingCart.length
    var phoneArray = JSON.stringify(shoppingCart);
    localStorage.setItem("shoppingCart", phoneArray)

    /* Cart animation, we decided to go with flying image instead
    $(".fa-shopping-cart").effect( "bounce", { times: 2 })
    */
}  

/* On site load */
$(document).ready(function() {
    document.querySelector(".number-of-orders").innerHTML = shoppingCart.length
});
