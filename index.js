const burgerBtn = document.querySelector("#burger-btn");
const xBtn = document.querySelector("#x-btn");
const mobileNavigation = document.querySelector("#mobile-navigation");

burgerBtn.addEventListener("click", () => {
  mobileNavigation.style.width = "30.4rem";
});

xBtn.addEventListener("click", () => {
  mobileNavigation.style.width = "0rem";
});
