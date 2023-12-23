const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menuHam');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cadrsContainer =document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive'); 

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive'); 

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    // Si contiene la clase inactive, es porque está cerrado.
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDestopMenuClosed = desktopMenu.classList.contains('inactive'); 
   
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    
    if (!isDestopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    
    shoppingCartContainer.classList.toggle('inactive');
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

renderProducts(productList);


// Lo siguiente que haremos será crear la siguiente estructura pero desde JS. 

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
    </div> 
*/

//Pero lo haremos dentro de una función para que podamos utilizarlo cuando lo necesitemos.
function renderProducts(arr){ 
//Con el siguiente bucle for podemos hacer queque cada elemento dentro del array productList cree la estructura anterior en
    for (product of arr){

        //Creamos un div y le asignamos una clase .
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //Luego creamos una etiqueta img y le asignamos un elemnto src.
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        //Ahora creamos otro div que tambien tendrá una clase.
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        //Este div no tendrá clase.
        const productInfoDiv = document.createElement('div');

        // Ahora creamos una etiqueta p que dentro de ella incluirá detalles del precio.
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        //Tenemos otra equiqueta p pero ahora tendrá la información del nombre.
        const productName = document.createElement('p');
        productName.innerText = product.name;

        // En esta parte es donde vamos a empezar a anidar las etiquetas que creamos anteriormente.

        //Agregamos productPrice dentro de la etiqueta procductInfoDiv y luego le inyectamos el nombre.
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        // Aquí creamos dos elementos más en donde les pondremos a prodcutImgCart le pondremos una imagen de nuestra ruta local.
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');    
        
        // Insertamos productImgCart dentro de productInfoFigure.
        productInfoFigure.appendChild(productImgCart);

        // Insertamos productInfoDiv y productInfoFigure dentro de productInfo.
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        // Y tambien insertamos productImg y productInfo dentro de productCard.
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        // Y por último insertamos productCard detnro carsContainer
        cadrsContainer.appendChild(productCard)
}
}
