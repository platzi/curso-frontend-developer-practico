    const menuEmail = document.querySelector('.navbar-email');
    const menuHamIcon = document.querySelector('.menu');
    const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
    const desktopMenu = document.querySelector('.desktop-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const aside = document.querySelector('.product-detail');
    const cardsContainer = document.querySelector('.cards-container');

    menuEmail.addEventListener('click', toggleDesktopMenu);
    menuHamIcon.addEventListener('click', toggleMobileMenu);
    menuCarritoIcon.addEventListener('click', toggleCarritoAside);

    function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
    }

    function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
    }

    function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
    }

    const productList = [];
    productList.push({
        name: "Computer",
        img: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 750,
    })
    productList.push({
        name: "Headphones",
        img: "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
    })
    productList.push({
        name: "Phone",
        img: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 500,
    })
    productList.push({
        name: "Watch",
        img: "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg",
        price: 150,
    })
    productList.push({
        name: "Production Kit",
        img: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg",
        price: 850,
    })
    productList.push({
        name: "Setup",
        img: "https://images.pexels.com/photos/4930018/pexels-photo-4930018.jpeg",
        price: 1380,
    })
    productList.push({
        name: "Microphone",
        img: "https://images.pexels.com/photos/3962990/pexels-photo-3962990.jpeg",
        price: 180,
    })
    productList.push({
        name: "Citizen Watch",
        img: "https://images.pexels.com/photos/592815/pexels-photo-592815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 450,
    })
    productList.push({
        name: "Cap",
        img: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg",
        price: 99,
    })
    productList.push({
        name: "Tablet",
        img: "https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 390,
    })
    /* <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>
        </div> */

    function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
    
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