$(document).ready(function () {
  window.onload = function () {
    $("body").hide().fadeIn(1000);
  };
});

const navLinks = document.querySelectorAll(".nav-link");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
