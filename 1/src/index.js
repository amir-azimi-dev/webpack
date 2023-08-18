import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/style.css";
import style2 from "./assets/css/style2.css";
import Api from "./services/api";

const addBox = () => {
    const newElem = document.createElement("div");
    // newElem.setAttribute("class", style2.box);
    newElem.classList.add(style2.box)
    document.getElementById("root").append(newElem);
};
addBox();

const apiInstance = new Api();
apiInstance.index();

const showMessage = message => {
    console.log(message);
};

showMessage("test message.");

import "bootstrap/dist/js/bootstrap.min.js";