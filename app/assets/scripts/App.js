import "../styles/styles.css";
import "lazysizes";
import "./modules/ls.respimg.js";
import RevealOnScroll from "./modules/RevealOnScroll.js";
import MobileMenu from "./modules/MobileMenu.js";
import StickyHeader from "./modules/StickyHeader.js";

new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".story-item"), 50);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal.js")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log("error loading event."));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
