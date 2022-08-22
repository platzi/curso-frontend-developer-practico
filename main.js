
// caca vez que le dan click a esta funcion entonces muestra 
const menuEmail = document.querySelector('.navbar-email'); //=> ----1RA-----Codificamos el navbar-email.
const desktopMenu = document.querySelector('.desktop-menu'); //=>------1RA-----


const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); //=> 3RA codificando carrito de compras 
const aside = document.querySelector('.product-detail'); // 3RA codificando carrito de compra

const cardsCointaner = document.querySelector('.cards-container');


const menuHamIcon = document.querySelector('.menu');  //=>  -----2DA------Codificamos el /*Menu mobile*/ selector
const mobileMenu = document.querySelector('.mobile-menu'); //=> --------2DA------Codificamos el /*Menu mobile*/  selector para la hamburgesa



menuEmail.addEventListener('click', toggleDesktopMenu);   // =>1ra codificacion, aplicamos la propiedad.
menuHamIcon.addEventListener('click', toggleMobileMenu); //=>  2da codificacion, aplicamos la propiedad.
menuCarritoIcon.addEventListener('click', toggleCarritoAside); // => 3ra codificacion a carrito de compras

function toggleDesktopMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }


//console.log('click'); para probar si funciona.
desktopMenu.classList.toggle('inactive');

} //tambien podemos probar con:
  //console.log('JS funcionando');


function toggleMobileMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}



function toggleCarritoAside() {
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

//aside.classList.toggle('inactive');
if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
}

aside.classList.toggle('inactive');
}


const productList = [];
productList.push({

    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({

    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({

    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});


function renderProducts(arr){

for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product = {name, price, image} ->product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

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

    cardsCointaner.appendChild(productCard);

   }

}

renderProducts(productList);


