let openBtn = document.querySelector("#hamburger-menu-btn")

let sideBar = document.querySelector("#side-bar")

let closeBtn = document.querySelector(".hamburger-menu__close-btn")

let bodySelect = document.querySelector('body')

openBtn.addEventListener('click', function () {
    sideBar.style.display = "block"
    sideBar.style.right = "0%"
})

closeBtn.addEventListener('click', function () {
    sideBar.style.display = "none"
})