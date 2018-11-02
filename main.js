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

    
    var getPhonePrice = document.createElement("a")
    getPhonePrice.className = "add-to-cart fas fa-cart-arrow-down"
    getPhonePrice.setAttribute('href', "#läggtill")
    getPhonePrice.innerText = " Lägg till i kundvagnen"
    
    phone.appendChild(getPhonePrice)
    
    var getPhoneClearButton = document.createElement("thrash")
    getPhoneClearButton.className = "far fa-trash-alt"
    getPhoneClearButton.setAttribute('href', "#tabort")
    getPhoneClearButton.innerText = " Ta bort"

    phone.appendChild(getPhoneClearButton)
   

    return phone
}

    /* function createCompletePurchase(CompletePurchase) {
        var 
    } */
