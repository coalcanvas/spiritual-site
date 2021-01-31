class ScrollListener {
  constructor() {
    this.bodyStyle = document.body.style;
    this.events();
  }
  events() {
    this.bodyStyle.addEventListener(
      "scroll",
      () => {
        this.bodyStyle.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
  }
}

export default ScrollListener;
