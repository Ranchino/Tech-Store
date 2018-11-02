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

/** Not sure what this does */
function addProductsToWebpage() {
    for(var index = 0; index < listOfProducts.length; index++)
    {
        var phone = createPhoneCard(listOfProducts[index])
        wrapperForAllPhones.appendChild(phone)
    }
    document.body.appendChild(wrapperForAllPhones)
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

   

    return phone
}
