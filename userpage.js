//function to logout from userpage and send to index
function signOut() {
    alert("Du är nu utloggad!")
    window.location = "index.html";
    localStorage.removeItem("loggedinUser");

}


function initSite() {
   
    var aktiveAccount = JSON.parse(localStorage.getItem("loggedinUser"))
   
    document.getElementById("textWelcome").innerText = "🖐 Hello " + aktiveAccount.username
    
    console.log(existingAccount[i].username)
}
