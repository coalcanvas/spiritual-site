import "../styles/styles.css";
import "normalize.css";
import "lazysizes";
import "./modules/ls.respimg.js";
import scrollReveal from "./modules/scrollReveal.js";
import mobileMenu from "./modules/mobileMenu.js";
import stickyHeader from "./modules/stickyHeader.js";
import memberArea from "./modules/memberArea.js";
import Modal from "./modules/Modal";

new memberArea();
new stickyHeader();
new scrollReveal(document.querySelectorAll(".feature-item"), 75);
new scrollReveal(document.querySelectorAll(".story-item"), 50);
new mobileMenu();
let modal = new Modal();

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
