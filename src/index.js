import controlerUserLogin from "./moduloControlerLogin.js";
import controleRoutesApp from "./moduloControleRotas.js";


var myModal = new bootstrap.Modal(document.getElementById('myModal'));

// ORDEM PARA EXECUTAR VALIDAR LOGIN
const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", (event) => {
    let userName = document.getElementById("user").value, 
        password  = document.getElementById("password").value;
    let alertModal = controlerUserLogin.loginInfo(userName, password);
    document.getElementById("titleModal").innerHTML = alertModal.title;
    document.getElementById("bodyModal").innerHTML = alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML = alertModal.bt1;
    document.getElementById("btnModalSave").innerHTML = alertModal.bt2;
    myModal.show();

    setTimeout(loadPag, 2500);        
    function loadPag(){
        window.location.href = controleRoutesApp.validateRoute(localStorage.status, alertModal.idModal);
    }

});

// ORDEM PARA CRIAÇÃO DE NOVO USER
const btnNewAccount = document.getElementById("btnNewAccount");
btnNewAccount.addEventListener("click", (event) =>{
    window.location.href = controleRoutesApp.validateRoute("false", "userNotFound1");
});