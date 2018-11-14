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
    getHistoryX()
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

function getHistoryX() {

    var historywrapper = document.createElement("div")
    historywrapper.className = "historyrapper"
    document.body.appendChild(historywrapper)
    localStorage.getItem("historyX")
    if(localStorage.historyX) {
        var phone = document.createElement("div")
        phone.className = "phoneCardClassHistory"

        var getPhoneImage = document.createElement("img")
        getPhoneImage.innerHTML = "dfgdfgdf"
        phone.appendChild(getPhoneImage)
    }
}


