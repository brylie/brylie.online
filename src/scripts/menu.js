document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const navLinks = document.getElementById("nav-links");

  if (menuButton && navLinks) {
    // Add initial styles to ensure smooth transitions
    navLinks.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    navLinks.style.transform = "translateY(-100%)";
    navLinks.style.opacity = "0";
    navLinks.style.visibility = "hidden";

    const toggleMenu = (show) => {
      menuButton.setAttribute("aria-expanded", show);

      if (show) {
        navLinks.style.visibility = "visible";
        // Use requestAnimationFrame to ensure transition happens
        requestAnimationFrame(() => {
          navLinks.style.transform = "translateY(0)";
          navLinks.style.opacity = "1";
        });
        document.body.style.overflow = "hidden";
      } else {
        navLinks.style.transform = "translateY(-100%)";
        navLinks.style.opacity = "0";
        // Hide the menu after transition
        setTimeout(() => {
          if (!menuButton.getAttribute("aria-expanded") === "true") {
            navLinks.style.visibility = "hidden";
          }
        }, 300);
        document.body.style.overflow = "";
      }
    };

    // Toggle menu on button click
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      toggleMenu(!isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        menuButton.getAttribute("aria-expanded") === "true" &&
        !navLinks.contains(e.target) &&
        !menuButton.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Handle escape key
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        menuButton.getAttribute("aria-expanded") === "true"
      ) {
        toggleMenu(false);
      }
    });

    // Close menu on resize if switching to desktop view
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (
          window.innerWidth >= 768 &&
          menuButton.getAttribute("aria-expanded") === "true"
        ) {
          toggleMenu(false);
        }
      }, 100);
    });
  }
});
