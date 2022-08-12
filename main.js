const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail')

const mainContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside); 

function toggleDesktopMenu() {
  const isAsideclose = asideMenu.classList.contains('inactive');

  if (!isAsideclose) {
      asideMenu.classList.add('inactive');
  }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideclose = asideMenu.classList.contains('inactive');

  if (!isAsideclose) {
      asideMenu.classList.add('inactive');
  }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }

    asideMenu.classList.toggle('inactive');
}

//haciendo el product mas dinámico

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://img.freepik.com/foto-gratis/guapo-motorista-casco-manos-moto_1150-10697.jpg?w=1380&t=st=1660298320~exp=1660298920~hmac=218b6a47e02bbb48b12100b309d7a3e5ffdfd05f3e3b99e0afb9988f2b93bfa5'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://img.freepik.com/foto-gratis/guapo-motorista-casco-manos-moto_1150-10697.jpg?w=1380&t=st=1660298320~exp=1660298920~hmac=218b6a47e02bbb48b12100b309d7a3e5ffdfd05f3e3b99e0afb9988f2b93bfa5'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://img.freepik.com/foto-gratis/guapo-motorista-casco-manos-moto_1150-10697.jpg?w=1380&t=st=1660298320~exp=1660298920~hmac=218b6a47e02bbb48b12100b309d7a3e5ffdfd05f3e3b99e0afb9988f2b93bfa5'
});

function renderProduct(arr){
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            
    
            <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
              <div class="product-info">
                <div>
                  <p>$${product.price}</p>
                  <p>${product.name}</p>
                </div>
                <figure>
                  <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
        `;
    
        mainContainer.appendChild(productCard);
        
    }
}
renderProduct(productList); 
