


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const menuToggle = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".show");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});