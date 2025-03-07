function applyAnimationToElements(className) {
  const elements = document.querySelectorAll(className);

  elements.forEach((element) => {
    const animationName = element.getAttribute("data-animation") || "fadeInUp";
    const delay = element.getAttribute("data-delay") || "0s";
    const duration = element.getAttribute("data-duration") || "1s";

    element.classList.add("animatation");
    element.style.animationName = animationName;
    element.style.animationDelay = delay;
    element.style.animationDuration = duration;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyAnimationToElements(".animated");
});

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        applyAnimationToElements(".animated");
        observer.unobserve(entry.target);
      }
    });
  });

  elementsToAnimate.forEach((el) => observer.observe(el));
});
