var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username<=31 && password == "admin"){
alert ("Login successfully");
window.location = "index.jag"; // Redirecting to other page.
return false;
}
}

function getUser(user){
return user;
}


