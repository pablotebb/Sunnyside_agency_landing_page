const hamburguerBtn = document.querySelector(".header__hamburger");
const menuHamburguer = document.querySelector(".header__menu-hamburguer");

hamburguerBtn.addEventListener("click", () => {
  menuHamburguer.classList.toggle("display-block");
});
