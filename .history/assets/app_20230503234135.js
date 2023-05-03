const navItems = document.querySelectorAll(".nav__item");
[...navItems].forEach(item => item.addEventListener("click", handleClickNav));
function handleClickNav(event){
    [...navItems].forEach(item => item.classList.remove("nav__link--active"));
    event
}
console.log(navItems);