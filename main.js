/* if we put a function in javascript the problem would be that when hitting referesh customer looses his basket */

var listOfProducts = []


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
    addToCart.setAttribute("onclick", "addToCart(this)")
    addToCart.setAttribute("data", product.title)
    addToCart.innerText = " Lägg till i kundvagnen"
    phone.appendChild(addToCart)
    
    /* Shopping cart site */
    var getPhoneClearButton = document.createElement("button")
    getPhoneClearButton.className = "far fa-trash-alt"
    getPhoneClearButton.setAttribute('href', "#tabort")
    getPhoneClearButton.innerText = " Ta bort"

    phone.appendChild(getPhoneClearButton)
    return phone
}

var cart = []
console.log()

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
     console.log(productsToSave)
}


/* sum for picked phones */


   /*  var shoppingCart = [];
    var ulElement;

    if (localStorage.shoppingCart) {
    shoppingCart = JSON.parse(localStorage.shoppingCart)
}

function addPhones(titel) {
    for (var i = 0; i < shoppingCart.length; i++) {
        listOfProducts[i].titel;
    }
    shoppingCart.push(titel);
    
} */


function initSite() {
    var totalPrice = 0;
    var listOfProducts = JSON.parse(localStorage.shoppingCart);

    
    /* console.log(listOfProducts)  */

    for(var i = 0; i < listOfProducts.length; i++) {
        
        totalPrice += listOfProducts[i].price;
    }
    $('#sumOfProducts').append(totalPrice);
}


/* sum([10, 20, 30])



function sum(arr) {
    var test1 = 0;
    for(var i = 0; i < arr.length; i++) {
        test1 = test1 + arr[i];
    }
    console.log(test1)
}
     */



    
    /* function addProduct(Element){
        Element.setAttribute("onclick", "addProduct(this)")
        Element.getAttribute("data")
        console.log("data")
    } */


//Function To Display Popup
$(document).ready(function(){
    $("#userclick").click(function(){
        $("#popUp").fadeIn(500)
    })

    $("#userclose").click(function(){
        $("#popUp").hide()
    })

    //Change between popup forms
    $(".message").click(function(){
        $("form").animate({height: "toggle", opacity: "toggle"}, "slow");
    });

})


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

/* localStorage cookies number of orders in shopping cart */

    $(document).ready(function() {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount);
        } else {
            localStorage.clickcount = 0;
        }
        document.querySelector(".number-of-orders").innerHTML = localStorage.clickcount;

        $(".add-to-cart").click(function() {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount) + 1;
            } else {
                localStorage.clickcount = 1;
            }
            document.querySelector(".number-of-orders").innerHTML = localStorage.clickcount;
            $(".fa-shopping-cart").effect("bounce", "slow")
       
        });   
    }); 

   