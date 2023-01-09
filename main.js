const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    // Pregunta si el Aside esta abierto
    if(!aside.classList.contains('inactive')) {
        // Si lo esta, lo cierra
        aside.classList.add('inactive');
    }
    
    // Abre o cierra el menu en Desktop
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
    // Pregunta si el Aside está abierto
    if(!aside.classList.contains('inactive')) {
        // Si lo esta, lo cierra
        aside.classList.add('inactive');
    }

    // Abre o cierra el menu Mobile
    mobileMenu.classList.toggle('inactive');

}

function toggleShoppingCart() {
    // Pregunta si el menu Mobile/Desktop esta abierto
    if(!mobileMenu.classList.contains('inactive')) {
        // Si lo esta, lo cierra
        mobileMenu.classList.add('inactive');
    }
    // Pregunta si el menu Mobile/Desktop esta abierto
    if(!desktopMenu.classList.contains('inactive')) {
        // Si lo esta, lo cierra
        desktopMenu.classList.add('inactive');
    }

    // Abre o cierra el Aside
    aside.classList.toggle('inactive');

}


const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});

/* Creando los elementos HTML con JS */


/*
    <div class="product-card">
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
    </div>
*/
function renderProducts(arr) {
    for (product of arr) {
    
        const divProductCard = document.createElement('div');
        divProductCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute("src", product.image);
        img.setAttribute("alt","product");
    
        const divProductInfo = document.createElement('div');
        divProductInfo.classList.add('product-info');
    
        const divSinClase = document.createElement('div');
        
        const pName = document.createElement('p');
        pName.innerText = product.name;
    
        const pPrice = document.createElement('p');
        pPrice.innerText = '$ ' + product.price;
    
        const figure = document.createElement('figure');
        
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute("src","./icons/bt_add_to_cart.svg");
        imgFigure.setAttribute("alt","addToCart");
    
        // divSinClase.append(pName);
        // divSinClase.append(pPrice);
    
        // figure.append(imgFigure);
    
        // divProductInfo.append(divSinClase);
        // divProductInfo.append(figure);
    
        // divProductCard.append(img);
        // divProductCard.append(divProductInfo);
    
        // cardsContainer.append(divProductCard);
    
        divSinClase.append(pName, pPrice);
        figure.append(imgFigure);
    
        divProductInfo.append(divSinClase, figure);
        divProductCard.append(img, divProductInfo);
        
        cardsContainer.append(divProductCard);
            
    
    }
}

renderProducts(productList);