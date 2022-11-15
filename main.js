const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    name: 'Monitor',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    name: 'Mac Studio',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr){ // la funciona toma por parametro el elemento y luego se hace el ciclo for sobre ese elemento, esta funcion entonces se puede reutirlozar, luego cuando la llamamos con otro parametro
    for (product of arr) { // con for se hace la iteración sobre le parametro recibido
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');    
        
        const productInfodiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // append all
        cardsContainer.append(productCard);
        productCard.append(img, productInfo);
        productInfo.append(productInfodiv, productInfoFigure);
        productInfodiv.append(productPrice, productName);
        productInfoFigure.append(productImgCart);
    
    }
}

renderProducts(productList);


// nombreVariable.addEventListener('click', () => nombreFuncion('argumento'));

// Consumiendo API de Platzi para traer productos e insertarlos

// let container = document.querySelector('.cards-container');
// const API = 'https://api.escuelajs.co/api/v1';

// function fetchData(url) {
//     return fetch(url);
// }

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(productos => {
//         const fragment = document.createDocumentFragment();
//         let card = '';
//         for (let i = 0; i < 10; i++) {
//             card += `<div class="product-card">
//             <img src="${productos[i].images[0]}" alt="">
//                 <div class="product-info">
//                         <div>
//                             <p>$ ${productos[i].price}</p>
//                             <p>${productos[i].title}</p>
//                         </div>
//                     <figure>
//                         <img src="../icons/bt_add_to_cart.svg" alt="">
//                     </figure>
//                 </div>
//             </div>`
//         }
//         fragment.append(card);
//         container.innerHTML = fragment.textContent
//     })
//     .catch(error => console.error(error))
//     .finally(() => console.log('Finalizado'))