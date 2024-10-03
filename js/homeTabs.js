const homeMealNav = document.querySelectorAll(".meal__nav__link");
const homeMealContent = document.querySelectorAll(".meal__nav__content");
homeMealNav.forEach((meal) => {
  meal.addEventListener("click", () => {
    removeActiveNav();
    meal.classList.add("active");
    const homeMealActiveContent = document.querySelector(`#${meal.id}-content`);
    removeActiveContent();
    homeMealActiveContent.classList.add("active")
  })
} )

function removeActiveNav(){
  homeMealNav.forEach((meal) => {
    meal.classList.remove("active")
  } )
}

function removeActiveContent(){
  homeMealContent.forEach((meal) => {
    meal.classList.remove("active")
  } )
}