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

function addToCart(element) {
     var productTitle = element.getAttribute("data")
     for (var i = 0; i < listOfProducts.length; i++) {

        if (productTitle == listOfProducts[i].title) {
            var productsToSave = {
                title: listOfProducts[i].title,
                price: listOfProducts[i].price
            }
            console.log(productsToSave)
        }
     }
}

/* sum for picked phones */




    fetch("./products.json")
    .then(function(response) {
    return response.json();
    })
    .then(function(json) {
    products = json
    });

    
    /* function addProduct(Element){
        Element.setAttribute("onclick", "addProduct(this)")
        Element.getAttribute("data")
        console.log("data")
    } */



   /*  const data = {
     title: ['iPhone X', 'One Plus 5', 'Galaxy S8'],
    };

    const button = document.querySelectorAll('.button');
    button.forEach(button => {
        

        button.addEventListener('click', () => {
            localStorage.setItem('title', JSON.stringify(this.attr('data-title')));
        });
    }); */


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

   