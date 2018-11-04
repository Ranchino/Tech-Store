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

/* Not sure what this does */
function addProductsToWebpage() {
    for(var index = 0; index < listOfProducts.length; index++)
    {
        var phone = createPhoneCard(listOfProducts[index])
        wrapperForAllPhones.appendChild(phone)
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
    
    /* Shopping cart stuff */
    var getPhoneClearButton = document.createElement("thrash")
    getPhoneClearButton.className = "far fa-trash-alt"
    getPhoneClearButton.setAttribute('href', "#tabort")
    getPhoneClearButton.innerText = " Ta bort"

    phone.appendChild(getPhoneClearButton)
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

function createPurchaseButton() {
    var getCompletePurchaseButton = document.createElement("div")
    getCompletePurchaseButton.className = "fas fa-check"
    getCompletePurchaseButton.innerText = " Slutför köp"
    
    phone.appendChild(getCompletePurchaseButton)
    return getCompletePurchaseButton
}

//Login function
var attempt = 3; 

function validate(){
    var userName = document.getElementsByClassName("userName")[0].value;
    var password = document.getElementsByClassName("password")[0].value;
    if ( userName == "admin" && password == "admin" ){
        alert ("Du har loggat in!");
        window.location = "userpage.html";
        return true;
    }
    else{
    attempt --;
    alert("Du har "+attempt+" försök kvar;");
    } if( attempt == 0){ 

    alert = false; 
    document.getElementsByClassName("userName")[0].value = "";
    document.getElementsByClassName("password")[0].value = "";    
    return;
    }

}