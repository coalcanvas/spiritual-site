import Axios from "axios";
class memberArea {
  constructor() {
    this.injectHTML();
    this.form = document.querySelector(".member-area__form");
    this.field = document.querySelector(".member-area__input");
    this.contentArea = document.querySelector(".member-area__content-area");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.sendRequest();
    });
  }

  sendRequest() {
    Axios.post(
      ("https://musing-nightingale-1c07e5.netlify.app/.netlify/functions/secret-area",
      { password: this.field.value })
    )
      .then((response) => {
        this.form.remove();
        this.contentArea.innerHTML = response.data;
      })
      .catch(() => {
        this.contentArea.innerHTML = `
      <p class="member-area__error">Incorrect secret phase. Try again.</p>
      `;
        this.field.value = "";
        this.field.focus();
      });
  }
  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <div class="member-area">
  <div class="wrapper wrapper--medium">
    <h2 class="section-title section-title--blue">Secret Member Area</h2>
    <form class="member-area__form" action="">
      <input class="member-area__input" type="text" placeholder="Enter the secret phrase">
      <button class="btn btn--black">Submit</button>
    </form>
    <div class="member-area__content-area"></div>
  </div>
</div>
    `
    );
  }
}
export default memberArea;
