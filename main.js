// Desktop Menu
const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

nav_email.addEventListener('click', () => {
    if (!menu_mobile.classList.contains('inactive')) { 
        menu_mobile.classList.add('inactive') 
    }

    if (!my_order.classList.contains('inactive')) { 
        my_order.classList.add('inactive') 
    }

    desktop_menu.classList.toggle('inactive');
});

// Mobile Menu
const menu_icon = document.querySelector('.menu');
const menu_mobile = document.querySelector('.mobile-menu');

menu_icon.addEventListener('click', () => {
    if (!desktop_menu.classList.contains('inactive')) { 
        desktop_menu.classList.add('inactive') 
    }

    if (!my_order.classList.contains('inactive')) { 
        my_order.classList.add('inactive') 
    }

    menu_mobile.classList.toggle('inactive');
})


// Shopping cart Menu
const cart_icon = document.querySelector('.navbar-shopping-cart');
const my_order = document.querySelector('.my-order');

cart_icon.addEventListener('click', () => {
    if (!desktop_menu.classList.contains('inactive')) { 
        desktop_menu.classList.add('inactive') 
    }
    
    if (!menu_mobile.classList.contains('inactive')) { 
        menu_mobile.classList.add('inactive') 
    }
    
    my_order.classList.toggle('inactive');
})

// Productos


const productList = [];
productList.push({
    name: 'Bike',
    price: 900,
    image: 'https://http2.mlstatic.com/D_NQ_NP_934713-MLA52319351109_112022-O.webp'
})
productList.push({
    name: 'Pantalla',
    price: 1220,
    image: 'https://cdn.shopify.com/s/files/1/2283/5833/products/b9842dd02331658457f4209c9b4bef09c2b2f48b_1000x.jpg?v=1660320906'
})
productList.push({
    name: 'Notebook',
    price: 1350,
    image: 'https://images.start.com.ar/FA506IHRB-HN083W.jpg'
})
productList.push({
    name: 'Bed',
    price: 1000,
    image: 'https://sommiercenter.com/media/catalog/product/cache/bd479d23586f2a1f84f4498ddc686c07/d/i/diama_130_normal.jpg'
})

function renderProducts(productList) {
    const cardContainer = document.querySelector('.cards-container');

    for (product of productList ) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgCard = document.createElement('img');
        imgCard.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(imgFigure);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(imgCard);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);