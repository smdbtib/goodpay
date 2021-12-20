import userLogin from "./moduloDados.js";

class ControlerUserLogin{
    constructor(status){
        this.status = status;
    }
    checkLogin(){
        this.status = true;
    }
    loginInfo(userName, password) {
        var infoCheck = userLogin.find((userLogin) => userLogin.userName === userName);
    
        if(!infoCheck){
            alert("User not found!")
        }else{
            console.log(infoCheck);
            if (infoCheck.password === password) {
                this.checkLogin();
                alert(`Logged: ${this.status}` );
            } else {
                alert("Is not logged in!");
            }
        }
    }
}

const controlerUserLogin = new ControlerUserLogin();
export default controlerUserLogin;