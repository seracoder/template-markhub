const hamBurger = document.querySelector(".ham-burger")
const ulNav = document.querySelector(".ul-nav")

hamBurger.addEventListener("click", (e) => {
    const isHidden = ulNav.classList.contains("hidden")
    if (isHidden) {
        ulNav.classList.remove("hidden")
    } else {
        ulNav.classList.add("hidden")
    }
})
