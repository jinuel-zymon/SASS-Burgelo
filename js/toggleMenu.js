const burgir = document.querySelector(".toggle__menu");
const headerNav = document.querySelector("ul.header__nav");
burgir.addEventListener("click", () => {
  headerNav.classList.toggle("open")
})