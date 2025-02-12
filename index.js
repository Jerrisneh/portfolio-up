document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-link ul");
  
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        if (this.hash !== "") {
          e.preventDefault();
          const target = document.querySelector(this.hash);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 50,
              behavior: "smooth",
            });
          }
        }
      });
    });
  
    // "Hire Me" button functionality
    document.querySelector(".hero button").addEventListener("click", function () {
      window.location.href = "mailto:jerrisneh@gmail.com";
    });
  
    // "Resume" button functionality (Set a link to your resume)
    document.querySelector(".about button").addEventListener("click", function () {
      window.open("./Assets/Resume.pdf", "_blank"); // Replace with your resume file path
    });
  
    // Project buttons functionality
    document.querySelectorAll(".btn").forEach((button, index) => {
      button.addEventListener("click", function () {
        alert(`Project ${index + 1} - Add the actual project link here.`);
      });
    });
  });
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.querySelector(".nav-link ul");

  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll(".nav-link a").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 50,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // "Hire Me" button functionality
  document.querySelector(".hero button").addEventListener("click", function () {
    window.location.href = "mailto:jerrisneh@gmail.com";
  });

  // "Resume" button functionality (Set a link to your resume)
  document.querySelector(".about button").addEventListener("click", function () {
    window.open("./Assets/Resume.pdf", "_blank"); // Replace with your resume file path
  });

  // Project buttons functionality
  document.querySelectorAll(".btn").forEach((button, index) => {
    button.addEventListener("click", function () {
      alert(`Project ${index + 1} - Add the actual project link here.`);
    });
  });
});
  