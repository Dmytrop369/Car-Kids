let burger = document.querySelector(".header__burger")
let nav = document.querySelector(".header__navigation")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    nav.classList.toggle("active")
})

nav.addEventListener("click", (event) => {
    if(event.target.closest("a") || event.target.closest("button")){
        nav.classList.remove("active")
        burger.classList.remove("active")
    }
})