/* ***************** NAVBAR BUTTON ***************** */
const navbarButton = document.querySelector(".navbar-toggler");

navbarButton.addEventListener("click", () => {
  if (!navbarButton.classList.contains("collapsed")) {
    navbarButton.classList.add("active");
  } else {
    navbarButton.classList.remove("active");
  }
});
