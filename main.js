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

   

    return phone
}


//Function To Display Popup
$(document).ready(function(){
    $("#userclick").click(function(){
        $("#popUp").fadeIn(500)
    })

    $("#userclose").click(function(){
        $("#popUp").hide()
    })

})

