//function to logout from userpage and send to index
function signOut() {
    alert("Du är nu utloggad!")
    window.location = "index.html";
    localStorage.removeItem("loggedinUser");

}



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
    console.log("wfefwf")
    var historyArray = JSON.parse(localStorage.historyX);

    for (var i = 0; i < historyArray.length; i++) {
        var createPhone = createHistoryCard(historyArray[i])
        historyParentWrapper.appendChild(createPhone)
    }
    
    document.getElementById("user-page-wrap").appendChild(historyParentWrapper)
}

function createHistoryCard(userProduct) {
   /*  document.getElementById("historyParentWrapper").innerText = "qfewkf" */
   var phone = document.createElement("div")
   phone.className = "historyCardClass"

   var getDate = document.createElement("h4")
   getDate.innerText = userProduct.dateOfClick
   phone.appendChild(getDate)

   var getPhoneImage = document.createElement("img")
   getPhoneImage.src = "./assets/" + userProduct.product.image
   phone.appendChild(getPhoneImage)

   var getPhoneName = document.createElement("h1")
   getPhoneName.innerText = userProduct.product.title
   phone.appendChild(getPhoneName)

   var getPhonePrice = document.createElement("h3")
   getPhonePrice.innerText = userProduct.product.price + " kr"
   phone.appendChild(getPhonePrice)

   
   return phone

}

$(document).ready(function() {
    /*  var aktiveAccount = JSON.parse(localStorage.getItem("loggedinUser"))
    
     document.getElementById("textWelcome").innerText = "🖐 Hello " + aktiveAccount.username */
     loginSession()
     printHistoryX()
 });