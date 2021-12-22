import userLogin from "./moduloDados.js";
import communicationModal from "./moduloAlertDados.js";

class ControlerUserLogin{
    constructor(status){
        this.status = status;
    }
    checkLogin(){
        this.status = true;
    }
    checkOutLogin(){
        this.status = false;
    }
    loginInfo(userName, password) {
        localStorage.clear();
        var checkUser = userLogin.find((userLogin) => userLogin.userName === userName);

        if (userName === null || userName === "" || !password || password === null || password === "") {
            this.checkOutLogin();
            localStorage.status = this.status; /*LOCAL ESTORAGE FUNÇÃO NATIVA DO NAVEGADOR */
            return communicationModal.find((communicationModal) => communicationModal.idModal === "fieldsEmpyt1");
        } else {
            if (!checkUser) {
                this.checkOutLogin();
                localStorage.status = this.status;/*LOCAL ESTORAGE FUNÇÃO NATIVA DO NAVEGADOR */
                return communicationModal.find((communicationModal) => communicationModal.idModal === "userNotFound1");
            } else {
                if (checkUser.password === password) {
                    this.checkLogin();
                    localStorage.status = this.status;/*LOCAL ESTORAGE FUNÇÃO NATIVA DO NAVEGADOR */
                    return communicationModal.find((communicationModal) => communicationModal.idModal === "loggedSuccess1");
                } else {
                    this.checkOutLogin();
                    localStorage.status = this.status;/*LOCAL ESTORAGE FUNÇÃO NATIVA DO NAVEGADOR */
                    return communicationModal.find((communicationModal) => communicationModal.idModal === "loggedEror1");
                    
                }
            }
        }
    }
}

const controlerUserLogin = new ControlerUserLogin();
export default controlerUserLogin;