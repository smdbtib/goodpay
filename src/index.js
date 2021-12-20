import controlerUserLogin from "./moduloInterface.js";


var myModal = new bootstrap.Modal(document.getElementById('myModal'));

const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", (evet) => {
    let userName = document.getElementById("user").value, 
    password  = document.getElementById("password").value;

    if (!userName || userName === null || userName ==="" || !password || password===null || password==="") {
        alert("Empty Fields!");
        document.getElementById("titleModal").innerHTML = "Empty Fields!";
        document.getElementById("bodyModal").innerHTML = "Fields cannot be empty!";
        document.getElementById("btnModalClose").innerHTML = "Close";
        myModal.show();
    }else{
        controlerUserLogin.loginInfo(userName, password);
        document.getElementById("titleModal").innerHTML = "Success!";
        document.getElementById("bodyModal").innerHTML = "User logged whit success!";
        document.getElementById("btnModalClose").innerHTML = "Close";
        myModal.show();
    }
});

const btnNewAccount = document.getElementById("btnNewAccount");