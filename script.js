let burger = document.querySelector(".header__burger")
let nav = document.querySelector(".header__navigation")
let openModalBtns = document.querySelectorAll("#open-modal")
let modal = document.querySelector(".modal")
let modalCloseBtn = document.querySelector(".close")
let forms = document.querySelectorAll("form")
let tokenBot = "6909960058:AAGUdmfND5h-_yPapj4Wo6W8RgPVp1NX5Mg"
let chat ="-1002147170940"
let telegramURL = `https://api.telegram.org/bot${tokenBot}/sendMessage`

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

    let message = `Заявка з сайту\n\nКористувач: ${formData.get("user") ? formData.get("user") : "Без імені"}\nТелефон: ${formData.get("phone")}`
    modal.classList.remove("active")
    sendData(message, telegramURL).then(data => alert("Ваша заявка надіслана"))
}))

async function sendData(message, url){
    let res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chat,
            text: message,
            parse_mode: "html"
        })
    })
    return await res.json()
}