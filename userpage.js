//function to logout from userpage and send to index
function signOut() {
    alert("Du är nu utloggad!")
    window.location = "index.html";

}


function initSite() {
   
    var existingAccount = JSON.parse(localStorage.getItem("accounts"))
   
    for(var i = 0; i < existingAccount.length; i++) {
        document.getElementById("textWelcome").innerText = "🖐 Hello " + existingAccount[i].username;
    }
    console.log(existingAccount[0].username)
}
