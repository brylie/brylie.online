document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const navLinks = document.getElementById("nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";

      // Toggle expanded state
      menuButton.setAttribute("aria-expanded", !expanded);
      navLinks.classList.toggle("expanded");
      menuButton.classList.toggle("menu-open");

      // If opening the menu, trap focus inside
      if (!expanded) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        navLinks.classList.contains("expanded") &&
        !navLinks.contains(e.target) &&
        !menuButton.contains(e.target)
      ) {
        menuButton.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("expanded");
        menuButton.classList.remove("menu-open");
        document.body.style.overflow = "";
      }
    });

    // Close menu on escape key press
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("expanded")) {
        menuButton.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("expanded");
        menuButton.classList.remove("menu-open");
        document.body.style.overflow = "";
      }
    });
  }
});
