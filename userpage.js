//function to logout from userpage and send to index
function signOut() {
    alert("Du är nu utloggad!")
    window.location = "index.html";
    localStorage.removeItem("loggedinUser");

}


$(document).ready(function() {
   /*  var aktiveAccount = JSON.parse(localStorage.getItem("loggedinUser"))
    document.getElementById("textWelcome").innerText = "🖐 Hello " + aktiveAccount.username */
    loginSession()
    printHistoryX()
});

function loginSession() {
    if (localStorage.loggedinUser) {
        var aktiveAccount = JSON.parse(localStorage.getItem("loggedinUser"))
        document.getElementById("textWelcome").innerText = "🖐 Hello " + aktiveAccount.username + "."
        document.getElementById("userclick").style.display = "none";
        document.getElementById("dropdown").style.display = "block";
    } else {
        document.getElementById("purchase-history").style.display = "none";
    }
}

var historyParentWrapper = document.createElement("div")
historyParentWrapper.className = "historyParentWrapper"

function printHistoryX() {
    var historyArray = JSON.parse(localStorage.getItem("orders"));
    var userOnSite = JSON.parse(localStorage.getItem("loggedinUser"))
   
    for (var i = 0; i < historyArray.length; i++) {
        
        if (userOnSite.username == historyArray[i].customer) {
            var orderContainer = createOrders(historyArray[i].products)
            historyParentWrapper.appendChild(orderContainer)
        }
    }
    document.getElementById("user-page-wrap").appendChild(historyParentWrapper)
   
}

function createOrders(historyItem) {
   var phone = document.createElement("div")
   phone.className = "historyCardClass"

   var getDate = document.createElement("h4")
   getDate.innerText = historyItem.products
   phone.appendChild(getDate)

   var getPhoneImage = document.createElement("img")
   getPhoneImage.src = "./assets/" + 
   phone.appendChild(getPhoneImage)

   var getPhoneName = document.createElement("h1")
   getPhoneName.innerText =
   phone.appendChild(getPhoneName)

   var getPhonePrice = document.createElement("h3")
   getPhonePrice.innerText = 
   phone.appendChild(getPhonePrice)

   return phone

}
