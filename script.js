let burger = document.querySelector(".header__burger")
let nav = document.querySelector(".header__navigation")
let openModalBtns = document.querySelectorAll("#open-modal")
let modal = document.querySelector("modal")
let modalCloseBtn = document.querySelector("close")
let forms = document.querySelectorAll("forms")

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

openModalBtns.forEach(btn => btn.addEventListener("click", () => {
    modal.classList.add("active")
}))

modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("active")
})

forms.forEach(form => form.addEventListener("submit", (event) => {
    event.preventDefault()

    let formData = new FormData(form); 

    let message = `Заявка з сайту\n\nКористувач: ${formDate.get("user") ? formData.get("user") : "Без імені"}\nТелефон: ${formData.get("phone")}`

    console.log(message)
}))