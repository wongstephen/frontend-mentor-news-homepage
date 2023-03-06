const hamburgerIcon = document.querySelector(".menu-ico");
const closeIcon = document.querySelector(".close-ico");
const grayNav = document.querySelector(".gray-nav");
const nav = document.querySelector("nav");
const navItem = document.querySelectorAll(".nav-item");

const addListener = (el) => {
  el.addEventListener("click", () => {
    grayNav.classList.toggle("hidden");
    nav.classList.toggle("hidden");
  });
};

addListener(hamburgerIcon);
addListener(closeIcon);
addListener(grayNav);
navItem.forEach((item) => {
  addListener(item);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 600 && !grayNav.classList.contains("hidden")) {
    grayNav.classList.toggle("hidden");
    nav.classList.toggle("hidden");
  }
});
