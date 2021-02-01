class MemberArea {
  constructor() {
    this.injectHTML();
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
      <button class="btn btn--orange">Submit</button>
    </form>
    <div class="member-area__content-area"></div>
  </div>
</div>
    `
    );
  }
}
export default MemberArea;
