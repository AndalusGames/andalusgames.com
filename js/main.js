(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    const open = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open);
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  const tiles = document.querySelectorAll(".game-tile");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const filter = btn.dataset.filter;

      filterBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-selected", b === btn);
      });

      tiles.forEach(function (tile) {
        const show = filter === "all" || tile.dataset.genre === filter;
        tile.classList.toggle("is-hidden", !show);
      });
    });
  });

  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    header.style.background =
      window.scrollY > 40 ? "rgba(10, 14, 23, 0.95)" : "rgba(10, 14, 23, 0.8)";
  }, { passive: true });
})();
