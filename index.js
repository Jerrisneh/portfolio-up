document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector(".nav-ul");
    
    menuBtn.addEventListener("click", function () {
        navUl.classList.toggle("active");
    });

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !navUl.contains(event.target)) {
            navUl.classList.remove("active");
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-ul a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
                navUl.classList.remove("active");
            }
        });
    });
});
