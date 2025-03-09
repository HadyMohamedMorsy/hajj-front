let closeSide = document.querySelector(".close-side");
let menu = document.querySelector(".menu");
let lang = document.querySelector(".lang");
let langText = document.querySelector(".lang-text");
let elementToToggle = document.getElementById("default-sidebar");
let collapse = document.getElementById("collapse");
let news = document.getElementById("news");

closeSide.addEventListener("click", () => {
  elementToToggle.classList.toggle("-translate-x-full");
  elementToToggle.classList.toggle("sm:translate-x-0");
});

menu.addEventListener("click", () => {
  elementToToggle.classList.toggle("-translate-x-full");
  elementToToggle.classList.toggle("sm:translate-x-0");
});

lang.addEventListener("click", () => {
  const text = langText.innerHTML;
  changeHtmlAttributes(text === "Ar" ? "en" : "ar");
  langText.innerHTML = text === "Ar" ? "EN" : "Ar";
});

collapse.addEventListener("click", () => {
  news.classList.toggle("-bottom-[50px]");
  news.classList.toggle("bottom-0");
  collapse.querySelector(".svg").classList.toggle("rotate-180");
});

function changeHtmlAttributes(lang) {
  const htmlTag = document.getElementsByTagName("html")[0];
  const body = document.getElementsByTagName("body")[0];
  htmlTag.lang = lang;
  htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
  body.style.direction = lang === "ar" ? "rtl" : "ltr";
}
