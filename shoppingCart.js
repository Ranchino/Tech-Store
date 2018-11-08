/* sum for picked phones and adding them to the shoppingcart */


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

function initSite() {
    var totalPrice = 0;
    var shoppingCartItems = JSON.parse(localStorage.shoppingCart);
    
    console.log(shoppingCartItems)

    for(var i = 0; i < shoppingCartItems.length; i++) {
        createPhoneCard(shoppingCartItems[i]);
        totalPrice += shoppingCartItems[i].price;
    }
    $('#sumOfProducts').append(totalPrice);
    console.log(totalPrice)
}

function createPhoneCard(product) {
    var phone = document.createElement("div")
    phone.className = "phoneCardClass"

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
    addToCart.className = "add-to-cart"
    addToCart.onclick = addPhones.bind(undefined, product)
    addToCart.innerText = " Lägg till i kundvagnen"
    phone.appendChild(addToCart)
    
    return phone
}



/* ta bort för vi gör en ny funktion */

/* function addPhones(element) {
    var productTitle = element.getAttribute("data")
    shoppingCart.push(element)
    
     for (var i = 0; i < listOfProducts.length; i++) {

        if (productTitle == listOfProducts[i].title) {
            var productsToSave = {
                image: listOfProducts[i].image,
                title: listOfProducts[i].title,
                description: listOfProducts[i].description,
                price: listOfProducts[i].price
            }
            var parentDiv = document.getElementById("addedItems")

            var getPhoneImage = document.createElement("img")
            getPhoneImage.src = "./assets/" + productsToSave.image
            parentDiv.appendChild(getPhoneImage)

            var getPhoneName = document.createElement("h1")
            getPhoneName.innerText = productsToSave.title
            parentDiv.appendChild(getPhoneName)

            var getDescription = document.createElement("h5")
            getDescription.innerText = productsToSave.description
            parentDiv.appendChild(getDescription)

            var getPhonePrice = document.createElement("h3")
            getPhonePrice.innerText = productsToSave.price + " kr"
            parentDiv.appendChild(getPhonePrice)
        }
     }
     $('#addedItems').append(productsToSave);
}
  */
