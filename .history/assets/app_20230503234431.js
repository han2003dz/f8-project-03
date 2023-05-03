const navItems = document.querySelectorAll(".nav__item");
[...navItems].forEach(item => item.addEventListener("click", handleClickNav));
function handleClickNav(event){
    [...navItems].forEach(item => item.target.consoleclassList.remove("nav__link--active"));
    event.target.classList.add("nav__link--active");
}
console.log(navItems);