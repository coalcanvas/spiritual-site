class smoothScroll {
  constructor() {
    this.targetAnchor = document.querySelector(targetID);
    this.links = document.querySelectorAll(".scroll");
    this.distanceToTop = this.originalTop = distanceToTop(targetAnchor);
    this.checkIfDone = setInterval();
    this.atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    this.events();
  }

  scrollTo() {
    links.forEach((each) => (each.onclick = scrollAnchors));
  }

  distanceToTop(el) {
    this.distanceToTop((el) => {
      Math.floor(el.getBoundingClientRect().top);
    });
  }

  scrollAnchors(e, respond = null) {
    const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = respond
      ? respond.getAttribute("href")
      : this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
    const checkIfDone = setInterval(function () {
      const atBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
        targetAnchor.tabIndex = "-1";
        targetAnchor.focus();
        window.history.pushState("", "", targetID);
        clearInterval(checkIfDone);
      }
    }, 100);
  }
}
export default smoothScroll;
