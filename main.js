const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');
const mobileMenu = document.querySelector('.mobile-menu');
const carContain = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleCarritoMenu)

function toggleDesktopMenu() {
 menuCarrito.classList.add('inactive')
 desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  //menuCarrito.classList.add('inactive');// cierra la ventana(add)
  mobileMenu.classList.toggle('inactive');// cierra o abre la ventana(toggle) 
}

function toggleCarritoMenu(){
  //desktopMenu.classList.toggle('inactive')
 // mobileMenu.classList.add('inactive');
  menuCarrito.classList.toggle('inactive'); 
}

const productList = []
productList.push({
  name: 'bike',
  price: 120,
  image: 'https://loremflickr.com/320/240'
});
productList.push({
  name: 'CatToys',
  price: 50,
  image: 'https://loremflickr.com/320/240'
});
productList.push({
  name: 'Console',
  price: 200,
  image: 'https://loremflickr.com/320/240'
});

function renderProducts(arr) {
  for (product of arr){
    const htmlCard = ` <div class="product-card">
    <img src= ${product.image} alt="">
    <div class="product-info">
      <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>`
  carContain.innerHTML += htmlCard
  }
}

renderProducts(productList)
