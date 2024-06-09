const burgerBtn = document.querySelector(".menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show-mobile-menu");
});