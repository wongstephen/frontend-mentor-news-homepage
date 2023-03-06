// target splash img and set breakpoint at 600px
const hamburgerIcon = document.querySelector(".menu-ico");
const closeIcon = document.querySelector(".close-ico");
const grayNav = document.querySelector(".gray-nav");
const nav = document.querySelector("nav");
const navItem = document.querySelectorAll(".nav-item");

function toggleNav() {
  grayNav.classList.toggle("hidden");
  nav.classList.toggle("hidden");
}

if (window.innerWidth > 600) {
  navItem.removeEventListener;
} else {
  hamburgerIcon.addEventListener("click", () => {
    toggleNav();
  });

  closeIcon.addEventListener("click", () => {
    toggleNav();
  });

  navItem.forEach((item) => {
    return item.addEventListener("click", () => {
      toggleNav();
    });
  });

  grayNav.addEventListener("click", () => {
    toggleNav();
  });
}
