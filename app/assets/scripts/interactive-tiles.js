const btf = document.querySelector(".below-the-fold");
const menuWrapper = document.querySelector(".menu-wrapper");
let active = 0;
let interactive = 0;
const topics = Array.from(document.querySelectorAll(".topic"));
const topicsBg = Array.from(document.querySelectorAll(".topic-bg"));
const articles = Array.from(document.querySelectorAll(".articles"));
const articleElements = articles.map((as) =>
  Array.from(as.querySelectorAll(".article"))
);
const interactiveEnable = (index) => {
  interactive = index;
};
topics.forEach((topic, index) => {
  topic.addEventListener("mousedown", () => interactiveEnable(index));
  topic.addEventListener("mouseover", () => interactiveEnable(index));
  topic.addEventListener("touchstart", () => interactiveEnable(index));
});
const activate = () => {
  if (interactive >= 0) {
    active = interactive;

    btf.className = "below-the-fold";
    btf.classList.add(`extra-margin${active}`);
  }
};
menuWrapper.addEventListener("scroll", function (e) {
  let y = e.target.scrollTop;
  console.dir(y);

  // Activation
  if (y < 40) {
    activate();
  }
  if (y > 200) y = 200;

  articles.forEach((article, index) => {
    if (index === active) {
      // articles[index].style.opacity = `${y / 200}`;
      articleElements[index].forEach((a, index) => {
        let offset = y - index * 25;
        if (offset < 0) offset = 0;
        a.style.opacity = `${offset / (200 - index * 25)}`;
      });
    } else {
      articleElements[index].forEach((a, index) => {
        a.style.opacity = 0;
      });
    }
  });

  if (active === 0) {
    topics.forEach((topic, index) => {
      if (index === active) {
        topic.style.transform = `scale(${1 + y / 200}) translateX(${
          y / 5.6
        }px) translateY(${y / 3.18}px)`;
        topic.style.zIndex = 1;
      } else {
        topic.style.transform = `scale(${1 - y / 200})`;
        topic.style.zIndex = 0;
      }
    });
    topicsBg.forEach((topicBg, index) => {
      if (index === active) {
        topicBg.style.transform = `scaleY(${1.25 + (0.125 * y) / 200})`;
      }
    });
  }
  if (active === 1) {
    if (y > 200) y = 200;
    topics.forEach((topic, index) => {
      if (index === active) {
        topic.style.transform = `scale(${1 + y / 200}) translateX(${
          -y / 5.9
        }px) translateY(${y / 3.18}px)`;
        topic.style.zIndex = 1;
      } else {
        topic.style.transform = `scale(${1 - y / 200})`;
        topic.style.zIndex = 0;
      }
    });
    topicsBg.forEach((topicBg, index) => {
      if (index === active) {
        topicBg.style.transform = `scaleY(${1.25 + (0.0125 * y) / 200})`;
      }
    });
  }
  if (active === 2) {
    topics.forEach((topic, index) => {
      if (index === active) {
        topic.style.transform = `scale(${1 + y / 200}) translateX(${
          y / 5.6
        }px) translateY(${y / 18}px)`;
        topic.style.zIndex = 1;
      } else {
        topic.style.transform = `scale(${1 - y / 200})`;
        topic.style.zIndex = 0;
      }
    });
    topicsBg.forEach((topicBg, index) => {
      if (index === active) {
        topicBg.style.transform = `scaleY(${1.25 - (0.1 * y) / 200})`;
      }
    });
  }
  if (active === 3) {
    topics.forEach((topic, index) => {
      if (index === active) {
        topic.style.transform = `scale(${1 + y / 200}) translateX(${
          -y / 5.9
        }px) translateY(${y / 18}px)`;
        topic.style.zIndex = 1;
      } else {
        topic.style.transform = `scale(${1 - y / 200})`;
        topic.style.zIndex = 0;
      }
    });
    topicsBg.forEach((topicBg, index) => {
      if (index === active) {
        topicBg.style.transform = `scaleY(${1.25 + (0.2375 * y) / 200})`;
      }
    });
  }
});
