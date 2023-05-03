const navItems = document.querySelectorAll(".nav__item");
function handleClickNav(event){
    [...navItems.forEach(item => item.classList.remove("nav__link--active"));
    event.target.classList.add("nav__link--active");
}
navItems.forEach(item => item.addEventListener("click", handleClickNav));