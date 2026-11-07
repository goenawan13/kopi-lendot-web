// ketika hamburger menu di klik //

const navbarNav = document.querySelector(".navbar-nav");

const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", (event) => {

    event.preventDefault();

    navbarNav.classList.toggle("active")
})

// klik  diluar sidebar untuk menghilangkan nav // 

document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active")
    }
})