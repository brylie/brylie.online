document.addEventListener("DOMContentLoaded", () => {
  // Handle Astro page transitions
  document.addEventListener("astro:page-load", () => {
    // Ensure menu is closed after page transitions
    const navLinks = document.querySelector(".nav-links");
    const navWrapper = document.querySelector(".nav-wrapper");

    if (navLinks && navWrapper) {
      navLinks.classList.remove("expanded");
      navWrapper.classList.remove("expanded");
    }
  });
});
