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


