


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const menuToggle = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-link");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});