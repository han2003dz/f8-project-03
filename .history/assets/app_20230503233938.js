const navItems = document.querySelectorAll(".nav__item");
[...navItems].forEach(item => item.addEventListener("click", hand))
console.log(navItems);