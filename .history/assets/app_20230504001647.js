const navItems = document.querySelectorAll(".nav__item");
function handleClickNav(event){
    e
    // navItems.forEach(item => item.classList.remove("nav__link--active"));
    // event.target.classList.add("nav__link--active");
    console.log(event.target);
}
[...navItems].forEach(item => item.addEventListener("click", handleClickNav));