import "./home.scss";
import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "translate-y-[100px]",
          "animate-duration-[.5s]",
          "fade-in-up",
          "animate-once",
        );
        observer.unobserve(entry.target);
      }
    });
  });

  elementsToAnimate.forEach((el) => observer.observe(el));
});
