
$(document).ready(function() {
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

    loginSession();
});

//create a account for new users and save in localstorage
var accounts = []

// storing input from register-form
function reg(event) {
    // Name, Password and Mail from the register-form
    var regUserName = document.getElementsByClassName('newUserName')[0].value;
    var regPassword = document.getElementsByClassName('newPassword')[0].value;
    var regMail = document.getElementsByClassName('mail')[0].value;

    var userList = JSON.parse(localStorage.getItem("accounts"))

    
    /* if input values empty */
    if (regUserName == "" || regPassword == "" || regMail == "" ) {
        event.preventDefault()
        return false;
    } 
    
    if (!userList) {
        // Skapa en ny array med ett nytt userobjekt
        var newUser = [{
            username: regUserName,
            password: regPassword,
    }]
        localStorage.setItem("accounts", JSON.stringify(newUser))
        accountCreatedFeedback();
            
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
    accountCreatedFeedback();
/*  userList.push({userName: regUserName, password: regPassword})
    localStorage.setItem("accounts", userList) */
}
     
}

function accountCreatedFeedback() {
    alert ("Du har nu skapat ett konto 😎");    
    $("#popUp").fadeOut(500)
    $("#popUp").fadeIn(500).delay(2000)
    $(".loginUser").fadeIn(500).delay(3000)
    $(".userReg").fadeOut(500).delay(3000)
}



//Login function for already exists account
var attempt = 3; 

function validate() {
    /*var userName = document.getElementsByClassName("userName")[0].value;
    var password = document.getElementsByClassName("password")[0].value;*/

    // stored data from the register-form  
   var userName = document.getElementsByClassName('userName')[0];
   var userPw = document.getElementsByClassName('password')[0];
   var existingAccount = JSON.parse(localStorage.getItem("accounts"))
   
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

//function to logout from userpage and send to index
function signOut() {
    localStorage.removeItem("loggedinUser");
    alert("Du är nu utloggad!")
    window.location = "index.html";

}

function loginSession() {
    if (localStorage.loggedinUser) {
        var aktiveAccount = JSON.parse(localStorage.getItem("loggedinUser"))
        document.getElementById("textWelcome").innerText = "🖐 Hallå " + aktiveAccount.username + "!"
        document.getElementById("userclick").style.display = "none";
        document.getElementById("dropdown").style.display = "block";
    } else {
        document.getElementById("purchase-history").style.display = "none";
    }
}