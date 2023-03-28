const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

    const productList = [];
    productList.push({
      name: 'Bike',
      price: 120,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
      name: 'Pantalla',
      price: 220,
      image: 'https://media.istockphoto.com/id/1428363538/es/foto/monitor-de-aislamiento.jpg?s=612x612&w=0&k=20&c=a6z-l20hqzHpn-zge6QVsG1H2LwNYrDwS6glskqpZm8=',
    });
    productList.push({
      name: 'laptop',
      price: 620,
      image: 'https://media.istockphoto.com/id/692879948/es/foto/ordenador-port%C3%A1til-convertible.jpg?s=612x612&w=0&k=20&c=YikQM8zSohHvbKvVGjSAHRIJgju92TqbLxgShsT337g=',
    });

    productList.push({
      name: 'Scooter',
      price: 460,
      image: 'https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=400',
    });

    productList.push({
      name: 'Casco',
      price: 75,
      image: 'https://media.istockphoto.com/id/498048937/es/foto/bicicleta-de-monta%C3%B1a-de-casco-de-seguridad-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=ploYpbESbBEk4DXVbXlES3Q64EI7GKFfm-g4E-nMsdg=',
    });
    
    function renderProducts(arr) {
      for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      }
    }
    
    renderProducts(productList);
    

