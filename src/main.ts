import "./home.scss";
import iconPath from "./images/logo.ico";
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

function setFavicon(): void {
  // Create a new favicon element
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/x-icon";
  link.href = iconPath;

  document.head.appendChild(link);
}

setFavicon();
