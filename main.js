const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const imgBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const imgShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartConitainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click', toggleMenuDesktop);
imgBurger.addEventListener('click', toggleMenuMobile);
imgShoppingCart.addEventListener('click', toggleShoppingAside);

function toggleMenuDesktop(){
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    console.log(isAsideOpen);
    if(isAsideOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}// con toggle es mas facil velo pero felicidades por completar el reto
// Mi forma de cumplir el reto
// console.log('yea');
// let clase = desktopMenu.getAttribute('class');
// if(clase === "desktop-menu inactive"){
//     desktopMenu.classList.remove('inactive');
//     } else{
//         desktopMenu.classList.add('inactive');

function toggleMenuMobile(){
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    console.log(isAsideOpen);
    if(isAsideOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingAside(){
    const ismMobileOpen = !mobileMenu.classList.contains('inactive');
    const isMenuOpen = !desktopMenu.classList.contains('inactive');
    console.log(ismMobileOpen);
    if(ismMobileOpen){
        mobileMenu.classList.add('inactive');
    } else if(isMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push ({
    name:'Bicycle helmet',
    price: 11,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 20,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 27,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 31,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 43,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 58,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 67,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 
productList.push({
    name: 'Bike',
    price: 117,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 259,
    image: 'https://images.pexels.com/photos/7567208/pexels-photo-7567208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computador',
    price: 999,
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


console.log(productList);

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt=""/>
        </figure>
    </div>
</div> */

function renderProducts(arr){ //creamos las variables html, luego  maquetamos elementos hijos y padres
    for(product of arr){
        const productCard = document.createElement('div'); //Crea la etiqueta div en html
        productCard.classList.add('product-card'); //En ella le añadimos la clase profuct-card

        //product (para cada producto en la lista de productos)= {name, price, img} -> product.image

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image); // Describe el atributo src

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart); //elemento hijo en elemento padre de abajo hacia arriba

        productInfoDiv.append(productPrice, productName );// Con element.append puedo agregar varios nodos

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard); // cardsContainer está en el html(hay que seleccionarlo con query selector)
    };
};

renderProducts(productList);