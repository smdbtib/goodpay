import userLogin from "./moduloDados.js";
import communicationModal from "./moduloAlertDados.js";

class ControlerUserLogin{
    constructor(status){
        this.status = status;
    }
    checkLogin(){
        this.status = true;
    }
    loginInfo(userName, password) {
        var checkUser = userLogin.find((userLogin) => userLogin.userName === userName);

        if (userName === null || userName === "" || !password || password === null || password === "") {
            return communicationModal.find((communicationModal) => communicationModal.idModal === "fieldsEmpyt1");
        } else {
            if (!checkUser) {
                return communicationModal.find((communicationModal) => communicationModal.idModal === "userNotFound1");
            } else {
                if (checkUser.password === password) {
                    this.checkLogin();
                    return communicationModal.find((communicationModal) => communicationModal.idModal === "loggedSuccess1");
                } else {
                    return communicationModal.find((communicationModal) => communicationModal.idModal === "loggedEror1");
                }
            }
        }
    }
}

const controlerUserLogin = new ControlerUserLogin();
export default controlerUserLogin;