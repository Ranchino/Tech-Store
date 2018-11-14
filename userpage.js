//function to logout from userpage and send to index
function signOut() {
    alert("Du är nu utloggad!")
    window.location = "index.html";
    localStorage.removeItem("loggedinUser");

}


function initSite() {
   
   /*  var aktiveAccount = JSON.parse(localStorage.getItem("loggedinUser"))
   
    document.getElementById("textWelcome").innerText = "🖐 Hello " + aktiveAccount.username */
    loginSession()
    printHistoryX()
}

function loginSession() {
    
    if (localStorage.loggedinUser) {
        var aktiveAccount = JSON.parse(localStorage.getItem("loggedinUser"))
        document.getElementById("textWelcome").innerText = "🖐 Hello " + aktiveAccount.username + "."
        document.getElementById("userclick").style.display = "none";
        document.getElementById("dropdown").style.display = "block";
        loginSession()
        console.log("rllrl")
    } else {
        document.getElementById("purchase-history").style.display = "none";
    
        
    }
}



var historyX = [];

var historyParentWrapper = document.createElement("div")
historyParentWrapper.className = "historyParentWrapper"

function printHistoryX() {
    
    var historyArray = JSON.parse(localStorage.historyX);

    var totalPrice = 0;

    for (var i = 0; i < historyArray.length; i++) {
        var createPhone = createHistoryCard(historyArray[i])
        historyParentWrapper.appendChild(createPhone)
    }
    
    document.getElementById("userpage-wrap").appendChild(historyParentWrapper)
   
}

function createHistoryCard(product) {
   /*  document.getElementById("historyParentWrapper").innerText = "qfewkf" */
   var phone = document.createElement("div")
   phone.className = "historyCardClass"

   var getPhoneName = document.createElement("h1")
   getPhoneName.innerText = product.title
   phone.appendChild(getPhoneName)

   var getPhoneImage = document.createElement("img")
   getPhoneImage.src = "./assets/" + product.image
   phone.appendChild(getPhoneImage)

   var getPhonePrice = document.createElement("h3")
   getPhonePrice.innerText = product.price + " kr"
   phone.appendChild(getPhonePrice)

   
   return phone

}



