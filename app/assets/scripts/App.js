import "../styles/styles.css";
import RevealOnScroll from "./modules/RevealOnScroll.js";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu.js";
import "./ls.respimg.js";
import StickyHeader from "./modules/StickyHeader.js";

let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".story-item"), 50);

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
