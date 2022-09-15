const btnOpenMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const btnMenMobile = document.querySelector("#btnMenMobile");
const mobileMenu = document.querySelector(".mobile-menu");
const btnCartIcon = document.querySelector("#btnCartIcon");
const productDetail = document.querySelector(".product-detail");

function toggleShow(eventElement, elementToToggle) {
  eventElement.addEventListener("click", () => {
    elementToToggle.classList.toggle("hidden");
  });
  elementToToggle.addEventListener("mouseleave", (e) => {
    elementToToggle.classList.add("hidden");
  });
}

toggleShow(btnOpenMenu, desktopMenu);
toggleShow(btnMenMobile, mobileMenu);
toggleShow(btnCartIcon, productDetail);
