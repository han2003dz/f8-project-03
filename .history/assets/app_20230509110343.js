const button = document.querySelector(".header-action__sign-up");
const tmp = `<div class="modal">
        <div class="modal-content">
            <i class="fa fa-times modal-close"></i>
        </div>
    </div>`;
button.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", tmp);
});
document.body.a
const navItems = document.querySelectorAll(".nav__link");
function handleClickNav(event) {
  [...navItems].forEach((item) => item.classList.remove("nav__link--active"));
  event.target.classList.add("nav__link--active");
  console.log(event.target);
}
[...navItems].forEach((item) => item.addEventListener("click", handleClickNav));
