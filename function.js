var button = document.getElementById("button");

var fname = document.getElementById("fname"); //index page form input
var emAddress = document.getElementById("emAddress"); //index page form input
var GUser = document.getElementById("GUser"); //index page form input

var YourName = document.getElementById("YourName"); //ticket page
var yourGName = document.getElementById("YourGName"); //ticket page

var storedFname = localStorage.getItem("fname");
var storedGUser = localStorage.getItem("GUser");

button.addEventListener("click", changePage)


function changePage() {
    
    event.preventDefault();

    localStorage.setItem("fname", fname.value);
    localStorage.setItem("emAddress", emAddress.value);
    localStorage.setItem("GUser", GUser.value);

    window.location.href = "ticket.html";
    
}


if (storedFname) {
    YourName.textContent = storedFname; 
}

if (storedGUser) {
    yourGName.textContent = storedGUser;
}