const navCount = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuCarrito = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

const productList = [];

productList.push({
    name: "bike",
    precio: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'monitor',
    precio: 230,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEdc0vzRdR7ODkSdR-GlLXR8mTEe1MAPjSw&usqp=CAU'
});
productList.push({
    name: 'PcGaming',
    precio: 1120,
    img: 'https://www.mundodeportivo.com/alfabeta/hero/2022/07/Torre-Corsair.jpg?width=768&aspect_ratio=16:9&format=nowebp'
});
productList.push({
    name: 'monitor',
    precio: 230,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEdc0vzRdR7ODkSdR-GlLXR8mTEe1MAPjSw&usqp=CAU'
});
productList.push({
    name: 'monitor 144Hz',
    precio: 1230,
    img: 'https://us.123rf.com/450wm/erenmotion/erenmotion2209/erenmotion220900125/192080124-sala-de-ordenadores-vac%C3%ADa-con-monitores-y-teclados.jpg?ver=6'
});

navCount.addEventListener('click', toggleMenuAccount);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleMenuAccount(){
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive')

    if(!isMenuCarritoClosed){
        menuCarrito.classList.toggle('inactive')
    }
    desktopmenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive')

    if(!isMenuCarritoClosed){
        menuCarrito.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')

}

function toggleCarritoMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopmenu.classList.contains('inactive')
    if(!isDesktopMenuClosed){
        desktopmenu.classList.toggle('inactive')
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive')
    }
    menuCarrito.classList.toggle('inactive')
}

function renderProducts(arr){
    for (product of arr){
      const productContainer = `<div class="product-card">
      <img src=${product.img} alt="">
      <div class="product-info">
        <div>
          <p>$${product.precio}</p>
          <p>${product.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>`
    
    cardsContainer.innerHTML += productContainer
    }
}

renderProducts(productList);