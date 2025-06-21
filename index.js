document.addEventListener("DOMContentLoaded", function () {
  // this toggles the menu active and inactive(open/close) when clicking the hamburger-icon
  const navUl = document.querySelector(".nav-ul");
  const hamburger = document.querySelector(".tuggle1");

  const toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", function () {
    navUl.classList.toggle("active");
  });

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("show-hamburger");
    toggle.classList.toggle("show-close");
  });

  // Close the menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!toggle.contains(event.target) && !navUl.contains(event.target)) {
      navUl.classList.remove("active");
    }
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-ul a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
        // navUl.classList.remove("active");
      }
    });
  });
});
