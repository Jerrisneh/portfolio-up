// document.addEventListener("DOMContentLoaded", function () {
//   // this toggles the menu active and inactive(open/close) when clicking the hamburger-icon
//   const navUl = document.querySelector(".nav-ul");
//   // const hamburger = document.querySelector(".tuggle1");
//   const nav = document.getElementById("mobile-nav");

//   const toggle = document.getElementById("menu-toggle");
//   toggle.addEventListener("click", function () {
//     navUl.classList.toggle("active");
//   });

//   const menuToggle = document.getElementById("menu-toggle");
//   const mobileNav = document.getElementById("mobile-nav");
//   const navItems = mobileNav.querySelectorAll("li");

//   menuToggle.addEventListener("click", () => {
//     // Toggle nav slide
//     mobileNav.classList.toggle("visible");

//     // Toggle hamburger / close icon
//     menuToggle.classList.toggle("show-hamburger");
//     menuToggle.classList.toggle("show-close");
//   });

//   // Close menu on clicking any nav item
//   navItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       mobileNav.classList.remove("visible");
//       menuToggle.classList.add("show-hamburger");
//       menuToggle.classList.remove("show-close");
//     });
//   });

//   // Close the menu when clicking outside
//   document.addEventListener("click", function (event) {
//     if (!toggle.contains(event.target) && !navUl.contains(event.target)) {
//       navUl.classList.remove("active");
//     }
//   });

//   navItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       nav.classList.remove("visible");
//     });
//   });

//   // Smooth scrolling for navigation links
//   const navLinks = document.querySelectorAll(".nav-ul a");

//   // Hide nav when any <li> is clicked
//   navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       nav.classList.remove("visible");
//       nav.classList.add("hidden");
//     });
//   });

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       const targetId = this.getAttribute("href").substring(1);
//       const targetSection = document.getElementById(targetId);

//       if (targetSection) {
//         window.scrollTo({
//           top: targetSection.offsetTop - 50,
//           behavior: "smooth",
//         });
//         // navUl.classList.remove("active");
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menu-toggle");
//   const mobileNav = document.getElementById("mobile-nav");
//   const navUl = document.querySelector(".nav-ul");
//   const navItems = mobileNav.querySelectorAll("li");
//   const navLinks = document.querySelectorAll(".nav-ul a");

//   // Toggle nav and icons when hamburger is clicked
//   menuToggle.addEventListener("click", () => {
//     mobileNav.classList.toggle("visible");
//     navUl.classList.toggle("active");
//     menuToggle.classList.toggle("show-hamburger");
//   });

//   // Close nav when clicking a nav item
//   navItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       mobileNav.classList.remove("visible");
//       navUl.classList.remove("active");
//       menuToggle.classList.add("show-hamburger");
//       menuToggle.classList.remove("show-close");
//     });
//   });

//   // Close nav when clicking outside
//   document.addEventListener("click", function (event) {
//     const clickedInsideMenu =
//       menuToggle.contains(event.target) || navUl.contains(event.target);
//     if (!clickedInsideMenu) {
//       mobileNav.classList.remove("visible");
//       navUl.classList.remove("active");
//       menuToggle.classList.add("show-hamburger");
//       menuToggle.classList.remove("show-close");
//     }
//   });

//   // Smooth scroll behavior
//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       const targetId = this.getAttribute("href").substring(1);
//       const targetSection = document.getElementById(targetId);

//       if (targetSection) {
//         window.scrollTo({
//           top: targetSection.offsetTop - 50,
//           behavior: "smooth",
//         });
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileNav = document.getElementById("mobile-nav");
  const navUl = document.querySelector(".nav-ul");
  const navItems = mobileNav.querySelectorAll("li");
  const navLinks = document.querySelectorAll(".nav-ul a");

  // Initial state: show hamburger
  menuToggle.classList.add("show-hamburger");

  // Toggle menu and icon
  menuToggle.addEventListener("click", () => {
    const isVisible = mobileNav.classList.toggle("visible");
    navUl.classList.toggle("active");

    if (isVisible) {
      menuToggle.classList.remove("show-hamburger");
      menuToggle.classList.add("show-close");
    } else {
      menuToggle.classList.remove("show-close");
      menuToggle.classList.add("show-hamburger");
    }
  });

  // Close menu when a nav item is clicked
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileNav.classList.remove("visible");
      navUl.classList.remove("active");
      menuToggle.classList.remove("show-close");
      menuToggle.classList.add("show-hamburger");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInside =
      menuToggle.contains(event.target) || navUl.contains(event.target);
    if (!isClickInside) {
      mobileNav.classList.remove("visible");
      navUl.classList.remove("active");
      menuToggle.classList.remove("show-close");
      menuToggle.classList.add("show-hamburger");
    }
  });

  // hide mobile nav
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Hide mobile nav
      mobileNav.classList.remove("visible");
      navUl.classList.remove("active");

      // Reset icon to hamburger
      menuToggle.classList.remove("show-close");
      menuToggle.classList.add("show-hamburger");
    });
  });

  // Smooth scroll behavior
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
      }
    });
  });
});

// date functionality
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
