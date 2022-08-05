const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurguer = document.querySelector('.menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuMail.addEventListener("click", toggleDesktopMenu);
menuBurguer.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toogleCarritoAside);
const cardsContainer = document.querySelector('.cards-container');

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');

}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toogleCarritoAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

const listProduct = [];

listProduct.push(
    {
        name: 'Rosas',
        precio: 20,
        image: 'https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'Flores',
        precio: 30,
        image: 'https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'PLantas',
        precio: 15,
        image: 'https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'Rosas',
        precio: 20,
        image: 'https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'Flores',
        precio: 30,
        image: 'https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'PLantas',
        precio: 15,
        image: 'https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'Rosas',
        precio: 20,
        image: 'https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'Flores',
        precio: 30,
        image: 'https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'PLantas',
        precio: 15,
        image: 'https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'Rosas',
        precio: 20,
        image: 'https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'Flores',
        precio: 30,
        image: 'https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
);
listProduct.push(
    {
        name: 'PLantas',
        precio: 15,
        image: 'https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
);

function renderProducts(arr) {
    for (product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
        
        const imgBg = document.createElement('img');
        imgBg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productinfoDiv = document.createElement('div');
        
        const productPrecio = document.createElement('p');
        productPrecio.innerText = '$' + product.precio;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productInfofigure = document.createElement('figure');
        
        const imgIconProduct = document.createElement('figure');
        imgIconProduct.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productCart.append(imgBg, productInfo);
        productInfo.append(productinfoDiv, productInfofigure);
        productinfoDiv.append(productPrecio, productName);
        productInfofigure.append(imgIconProduct);
        cardsContainer.append(productCart);
    }
    
}

renderProducts(listProduct); 