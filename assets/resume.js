"use strict";

const menuButton = document.querySelector(".menu-button");
const navLinks = document.getElementById("primary-nav");
const sectionLinks = [...navLinks.querySelectorAll("a")];

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开导航");
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navLinks.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-nav")) closeMenu();
});
window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);

function setActiveSection() {
  let current = "";
  sectionLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section.getBoundingClientRect().top <= 130) current = link.hash;
  });
  // All six projects belong to the same project navigation section.
  sectionLinks.forEach((link) => {
    if (link.hash === current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
let scheduled = false;
window.addEventListener("scroll", () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    setActiveSection();
    scheduled = false;
  });
}, { passive: true });
setActiveSection();
document.getElementById("current-year").textContent = String(new Date().getFullYear());
