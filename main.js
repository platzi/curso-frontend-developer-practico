const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

shoppingCart.addEventListener("click", toggleProductDetail);

function toggleProductDetail() {
  productDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

document.addEventListener("mousedown", function (event) {
  if (event.target !== navbarEmail && !desktopMenu.contains(event.target)) {
    desktopMenu.classList.add("inactive");
  }
  
  if (event.target !== menuHamIcon && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.add("inactive");
  }

   if (event.target !== shoppingCart && !productDetail.contains(event.target)) {
     productDetail.classList.add("inactive");
   }
});


const productList = [];
productList.push({
    name:'bike',
    price:'120',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Aries',
    price:'222.62',
    img: 'https://www.mrjuegosdemesa.es/pics/2021/02/12/mu-armadura-aries-new-cloth-figura-18-cm-saint-seiya-myth-cloth-ex-soul-of-gold-5.jpg'
})
productList.push({
    name:'Tauro',
    price:'899.92',
    img: 'https://www.todosaintseiya.com/83467-large_default/aldebaran-de-tauro-soul-of-gold-myth-cloth-saint-seiya.jpg'
})
productList.push({
    name:'Geminis',
    price:'852.63',
    img: 'https://m.media-amazon.com/images/I/61vC33gagdL.jpg'
})
productList.push({
    name:'Cancer',
    price:'219.42',
    img: 'https://m.media-amazon.com/images/I/51RcxYOig-L.jpg'
})
productList.push({
    name:'Leo',
    price:'272.98',
    img: 'https://tamashiiweb.com/special/seiya_sog/img/renewal/stage_detail_02_zoom.jpg'
})
productList.push({
    name:'Virgo',
    price:'366.13',
    img: 'https://i.pinimg.com/736x/a6/61/d9/a661d9e279987ae0b2e7cfd830f2af1f--toy-story-virgos.jpg'
})
productList.push({
    name:'Libra',
    price:'168.81',
    img: 'https://www.previewsworld.com/SiteImage/MainImage/STL193053'
})
productList.push({
    name:'Escorpio',
    price:'167.74',
    img: 'https://japanworld.it/34910-large_default/bandai-saint-seiya-soul-of-gold-myth-cloth-ex-scorpio-milo.jpg'
})
productList.push({
    name:'Ophiucho',
    price:'943.05',
    img: 'https://www.picclickimg.com/xuoAAOSwLEdj11Q8/Bandai-seiya-Myth-Cloth-EX-Ophiuchus-The-13th.webp'
})
productList.push({
    name:'Sagitario',
    price:'290.08 ',
    img: 'https://s3.eu-central-1.wasabisys.com/mediacloud-anime/2022/01/item_0000011368_aabJQ2lr_05.jpeg'
})
productList.push({
    name:'Capricornio',
    price:'226.63',
    img: 'https://tamashiiweb.com/images/item/item_0000011226_Q3mQCMel_05.jpg'
})
productList.push({
    name:'Acuario',
    price:'395.99',
    img: 'https://i.pinimg.com/736x/e4/9f/c4/e49fc4fd231a78914830a74891a461d5--vinyl-toys-aquarius.jpg'
})
productList.push({
    name:'Picis',
    price:'305.37',
    img: 'https://3.bp.blogspot.com/-_XjOiFd4rQE/WSaHj7MQXXI/AAAAAAAAo3Q/ra6ghRMM8aIAvQncStCetbTAWUFi6Sa2wCLcB/s1600/mj3.jpg'
})
// productList.push({
//     name:'',
//     price:'',
//     img: ''
// })

{/* 
        <div class="product-card">
          <img
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <div class="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="" />
            </figure>
          </div>
        </div>
      </div> */}

    const cardsContainer = document.querySelector(".cards-container");


function renderContentOfProducts(arrayList) {
  for (product of productList) {
    //crea las etiquetas 
      const productCard = document.createElement('div');
    //agrega clases, identificadores o algun selector de css
      productCard.classList.add("product-card");
      
      const imageProduct = document.createElement('img');
      imageProduct.setAttribute('src', product.img);
      
      const productInfo = document.createElement("div");
      productInfo.classList.add('product-info');
      
      const productInfoDiv = document.createElement('div');
  
      const pPrice = document.createElement("p");
      //agrega contenido de texto dentro de la etiqueta p
      pPrice.innerText = '$ '+product.price;
  
      const pNameProduct = document.createElement('p');
      //agrega contenido de texto dentro de la etiqueta p
      pNameProduct.innerText = product.name;
      
      const figure= document.createElement('figure');
      const imageAddTocart = document.createElement('img');
      imageAddTocart.setAttribute('src', '/icons/bt_add_to_cart.svg')
      //ya que por su propia naturalieza al crear elementos para el dom estas tienen sus etiqeutas de aertura y cierre
      //con el siguiente codigo lo que hacemos es meter dentro de una etiqueta ya creada en el dom
      //metemos el icono de add to cart a figure
      figure.appendChild(imageAddTocart);
  
      productInfoDiv.appendChild(pPrice);
      productInfoDiv.appendChild(pNameProduct);
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(figure);
      productCard.appendChild(imageProduct);
      productCard.appendChild(productInfo);
  
      cardsContainer.appendChild(productCard);
  }

}

renderContentOfProducts(productList);
  