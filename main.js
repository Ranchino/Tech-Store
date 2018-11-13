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
    addToCart.onclick = addPhones.bind(undefined, product)
    addToCart.innerText = " Lägg till i kundvagnen"
    phone.appendChild(addToCart)
    
    /* Shopping cart site */
    
    return phone
}


/* creating localstorage and storing products */
var shoppingCart = [];
var ulElement;

if(localStorage.shoppingCart) {
    shoppingCart = JSON.parse(localStorage.shoppingCart);
}

function addPhones(product) {
    
    var phoneArray = JSON.stringify(localStorage.shoppingCart);
    
    var dateOfClick = new Date().toUTCString();
    shoppingCart.push({product, dateOfClick});
    console.log(product, dateOfClick)
    
    localStorage.shoppingCart = phoneArray;
}
   
//create a account for new users and save in localstorage
var accounts = []

if(localStorage.accounts) {
   
} else {
    localStorage.accounts 
}

// storing input from register-form
function reg() {
    // Name, Password and Mail from the register-form
    var regUserName = document.getElementsByClassName('newUserName')[0].value;
    var regPassword = document.getElementsByClassName('newPassword')[0].value;
    var regMail = document.getElementsByClassName('mail')[0].value;

    var userList = JSON.parse(localStorage.getItem("accounts"))

    /* if input values empty */
    if (regUserName == "" || regPassword == "" || regMail == "" ) {
        alert ("Du har missat ett fält");
        return false;
    } 
    
    if (!userList) {
        // Skapa en ny array med ett nytt userobjekt
        var newUser = [{
            username: regUserName,
            password: regPassword,
        }]
        localStorage.setItem("accounts", JSON.stringify(newUser))
        accoutCreatedFeedback();
            
    } else {
        // Lägg till en ny user i account och spara igen

        for (var i = 0; i < userList.length; i++ ) {
            if(userList[i].username == regUserName) {
                alert ("Detta användarnamn finns redan. Välj annat!");
                return;
            }
        }
        var newUser = {
            username: regUserName,
            password: regPassword
        }

        userList.push(newUser)
        localStorage.setItem("accounts", JSON.stringify(userList))
        accoutCreatedFeedback();
       /*  userList.push({userName: regUserName, password: regPassword})
        localStorage.setItem("accounts", userList) */
    }
     
}

function accoutCreatedFeedback () {
    alert ("Du har nu skapat ett konto 😎");    
    $("#popUp").fadeOut(500)
    $("#popUp").fadeIn(500).delay(2000)
    $(".loginUser").fadeIn(500).delay(3000)
    $(".userReg").fadeOut(500).delay(3000)
}



//Login function for already exists account
var attempt = 3; 

function validate(){
    /*var userName = document.getElementsByClassName("userName")[0].value;
    var password = document.getElementsByClassName("password")[0].value;*/

    // stored data from the register-form
  
   var userName = document.getElementsByClassName('userName')[0];
   var userPw = document.getElementsByClassName('password')[0];
   var existingAccount = JSON.parse(localStorage.getItem("accounts"))
   
   console.log(userName.value, userPw.value, existingAccount)

    for (var i = 0; i < existingAccount.length; i++) {
          // entered data from the login-form

        if (userName.value == existingAccount[i].username && userPw.value == existingAccount[i].password ){
            localStorage.setItem("loggedinUser",JSON.stringify(existingAccount[i]));
           /* Successful login */
            alert ("Du har loggat in!");
            window.location = "userpage.html";
            return true;
        } 
            
    }
        /* Failed login */
    if (userName.value !== existingAccount.username && userPw.value !== existingAccount.password){
        attempt --;
        alert("Du har "+attempt+" försök kvar;");
        /* Three attempts maximum */
        if( attempt == 0) { 
            alert = false; 
            userName.value = "";
            userPw.value = "";    
            return;
        }
    } 

}

        $(document).ready(function() {

            /* Amount times clicked button */
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


            //Function To Display Popup Login Form
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
        }); 

   

    /* This is how array with object looks like 

            transaction: [
                {
                    date: new Date(),
                    products: cartList
                }
            ] 
    */
   
