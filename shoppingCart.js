/* sum for picked phones and adding them to the shoppingcart */


var shoppingCart = [];

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
    var listOfProducts = JSON.parse(localStorage.shoppingCart);
    
    console.log(listOfProducts)

    for(var i = 0; i < listOfProducts.length; i++) {
        
        totalPrice += listOfProducts[i].price;
    }
    $('#sumOfProducts').append(totalPrice);
    console.log(totalPrice)
}



/* ta bort för vi gör en ny funktion */
/* var cart = []

function addToCart(element) {
    var productTitle = element.getAttribute("data")
    cart.push(element)
    
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
     $('#addeditems').append(productsToSave);
}
 */
