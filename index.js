


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const menuToggle = document.querySelector(".tuggle1");
const navLinks = document.querySelector(".nav-link");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});