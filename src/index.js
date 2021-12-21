import controlerUserLogin from "./moduloInterface.js";


var myModal = new bootstrap.Modal(document.getElementById('myModal'));

const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", (evet) => {
    let userName = document.getElementById("user").value, 
        password  = document.getElementById("password").value;
    let alertModal = controlerUserLogin.loginInfo(userName, password);
    document.getElementById("titleModal").innerHTML = alertModal.title;
    document.getElementById("bodyModal").innerHTML = alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML = alertModal.bt1;
    document.getElementById("btnModalSave").innerHTML = alertModal.bt2;

    myModal.show();
});

const btnNewAccount = document.getElementById("btnNewAccount");