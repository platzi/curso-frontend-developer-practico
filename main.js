const menuEmail = document.querySelector(".navbar-email");
const menudesktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCarContainer = document.querySelector("#shoppingCarContainer");
const  cardsContainer =  document.querySelector(".cards-container");
const productdetailid = document.querySelector("#productdetailid");
const productcloseIcon = document.querySelector(".product-detail-close");


menuEmail.addEventListener("click", function () {
  toogleGeneral(menudesktopMenu);
});
menuHamIcon.addEventListener("click", function () {
  toogleGeneral(mobileMenu);
});
menuCarritoIcon.addEventListener("click", function () {
  toogleGeneral(shoppingCarContainer);
});
productcloseIcon.addEventListener("click", closeProductDetailAsade);

function toogleGeneral(visualizar) {
  const estadoToogle = !visualizar.classList.contains("inactive");
  shoppingCarContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  menudesktopMenu.classList.add("inactive");
  productdetailid.classList.add("inactive");

  if (estadoToogle) {
    visualizar.classList.add("inactive");
  } else {
    visualizar.classList.remove("inactive");
  }
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120000,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  
  productList.push({
    name: "Pantalla",
    price: 820000,
    image: "https://www.lg.com/co/images/monitores/md07545401/gallery/D-1.jpg",
  });
  
  productList.push({
      name: "Computador",
      price: 1720000,
      image:
        "https://www.compulago.net/wp-content/uploads/erp/productos/2323%2006333927/1621307495760.jpg",
    });
 

    function renderproducts (arr) {
        for (product of arr) {

            const productCard= document.createElement('div');
            productCard.classList.add('product-card');
    
            const productImgp = document.createElement('img');
            productImgp.setAttribute('src', product.image);
            productImgp.addEventListener('click',function () {
                toogleGeneral(productdetailid);
              });
    
            const productInfo= document.createElement('div');
            
            productInfo.classList.add('product-info');
    
            const productInfoDiv= document.createElement('div');
    
            const productPrice= document.createElement('p');
            productPrice.innerText = '$ '+ product.price;
    
            const productName= document.createElement('p');
            productName.innerText = '$ '+ product.name;
            
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
    
            const productInfofigure= document.createElement('figure');
            const productImgCart= document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
            productInfofigure.appendChild(productImgCart);
    
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfofigure);
            productCard.appendChild(productImgp);
            productCard.appendChild(productInfo);
            cardsContainer.appendChild(productCard);
          
    }
    }

    function openProductDetailAsade() {
        productdetailid.classList.remove('inactive');
    }
   renderproducts (productList);

   function closeProductDetailAsade () {
    productdetailid.classList.add('inactive');
   }