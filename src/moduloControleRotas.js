import routesApp from "./moduloRotas.js";

class ControleRoutes {
    constructor(status, idRoute, screen, linkUrl){
        this.status = status;
        this.idRoute = idRoute;
        this.screen = screen;
        this.linkUrl = linkUrl;
    }

    validateRoute(status, idRoute){
        if (status === "true") {
            return (routesApp.find((route) => route.idRoute === idRoute).linkUrl);
        }else{
            return (routesApp.find((route) => route.idRoute === idRoute).linkUrl);
        }
    }
}

const controleRoutesApp = new ControleRoutes();

export default controleRoutesApp;