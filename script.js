let burger = document.querySelector(".header__burger")
let nav = document.querySelector(".header__navigation")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    nav.classList.toggle("active")
})