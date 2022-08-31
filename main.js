let menuAnterior = null;
let desktopMenu =  document.querySelector('.desktop-menu');
let mobileMenu =  document.querySelector('.mobile-menu');
let cartMenu =  document.querySelector('.product-cart-detail');
let productDetail = document.querySelector('.product-detail');

let productList = [{name: 'Bike', precio: 120, image: 'https://images.pexels.com/photos/2393818/pexels-photo-2393818.jpeg?auto=compress&cs=tinysrgb&w=1600'}, 
    {name: 'Screen', precio: 150, image: 'https://images.pexels.com/photos/2393818/pexels-photo-2393818.jpeg?auto=compress&cs=tinysrgb&w=1600'}, 
    {name: 'Laptop', precio: 500, image: 'https://images.pexels.com/photos/2393818/pexels-photo-2393818.jpeg?auto=compress&cs=tinysrgb&w=1600'}];

//document.querySelector('body').addEventListener('click', function(){toggleMenu(null, 0)});
document.querySelector('.navbar-email').addEventListener('click', function(){toggleMenu(desktopMenu, 0)});
document.querySelector('.menu').addEventListener('click', function(){toggleMenu(mobileMenu, 0)});
document.querySelector('.navbar-shopping-cart').addEventListener('click', function(){toggleMenu(cartMenu, 0)});
document.querySelector('.product-detail-close').addEventListener('click', function(){toggleMenu(productDetail, 2)});
renderProducts(productList)

function toggleMenu(elemento, flag)
{//flag: 0=toggle, 1=show, 2=hide
    if (menuAnterior != null && ((flag === 0 || flag === 2) || menuAnterior != productDetail)) menuAnterior.classList.add('inactive');

    if (elemento != null)
    {
        if (menuAnterior != elemento && (flag === 0 || flag === 1)) elemento.classList.remove('inactive');
        menuAnterior = elemento.classList.contains('inactive') === true ? null : elemento;
    }
}

function renderProducts(arrayProducts)
{
    let cartsContainer = document.querySelector('.carts-container')

    for (let product of arrayProducts) 
    {
        let productCart = document.createElement('div');
        let productImg = document.createElement('img');
        let productInfo = document.createElement('div');
        let productInfoDiv = document.createElement('div');
        let productPrice = document.createElement('p');
        let productName = document.createElement('p');
        let productInfoFigure = document.createElement('figure');
        let productImgCart = document.createElement('img');

        productCart.classList.add('product-cart');
        productImg.setAttribute('src', product.image);
        productImg.style.cursor = 'pointer';
        productImg.addEventListener('click', function(){toggleMenu(productDetail, 1)});
        productInfo.classList.add('product-info');
        productPrice.innerText = '$' + product.precio;
        productName.innerText = product.name;
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.style.cursor = 'pointer';
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
        cartsContainer.appendChild(productCart);
    }
}
