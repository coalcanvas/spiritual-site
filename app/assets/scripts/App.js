import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu.js";
import "./ls.respimg.js";

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
