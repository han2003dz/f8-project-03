const button = document.querySelector(".header-action__sign-up");
button.addEventListener("click", function () {
    
    const tmp = `<div class="modal">
        <div class="modal-content"><i class=""</div>
    </div>`
});

const navItems = document.querySelectorAll(".nav__link");
function handleClickNav(event) {
  [...navItems].forEach((item) => item.classList.remove("nav__link--active"));
  event.target.classList.add("nav__link--active");
  console.log(event.target);
}
[...navItems].forEach((item) => item.addEventListener("click", handleClickNav));
