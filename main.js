const d = document,
  navbarEmail = d.querySelector(".navbar-email"),
  navbarShoppingcart = d.querySelector(".navbar-shopping-cart"),
  toggleDesktopMenu = d.querySelector(".desktop-menu"),//
  iconMenuMobile = d.querySelector(".menu"),
  menuMobile = d.querySelector(".mobile-menu"),
  productDetail = d.querySelector(".product-detail");//
  
  navbarEmail.addEventListener("click",toggleDesktop);
  function toggleDesktop(){
    if(!productDetail.classList.contains("inactive")){
      productDetail.classList.add("inactive");
    }
toggleDesktopMenu.classList.toggle("inactive");
  }

  iconMenuMobile.addEventListener("click",toggleMobile);
  function toggleMobile(){
    if(!productDetail.classList.contains("inactive")){
      productDetail.classList.add("inactive");
    }
    menuMobile.classList.toggle("inactive");
  }

  navbarShoppingcart.addEventListener("click",toggleShoppingCart);
  function toggleShoppingCart(){
    if(!menuMobile.classList.contains("inactive")){
      menuMobile.classList.add("inactive");
    }
 if(!toggleDesktopMenu.classList.contains("inactive")){
      toggleDesktopMenu.classList.add("inactive");
    }

    productDetail.classList.toggle("inactive");
  }