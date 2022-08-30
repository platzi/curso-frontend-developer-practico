let menuAnterior = null;
let listMenus =  {desktopMenu: document.querySelector('.desktop-menu'),
    mobileMenu: document.querySelector('.mobile-menu'),
    cartMenu: document.querySelector('.product-detail')};
let productList = [{name: 'Bike', precio: 120, image: 'https://images.pexels.com/photos/2393818/pexels-photo-2393818.jpeg?auto=compress&cs=tinysrgb&w=1600'}, 
    {name: 'Screen', precio: 150, image: 'https://images.pexels.com/photos/2393818/pexels-photo-2393818.jpeg?auto=compress&cs=tinysrgb&w=1600'}, 
    {name: 'Laptop', precio: 500, image: 'https://images.pexels.com/photos/2393818/pexels-photo-2393818.jpeg?auto=compress&cs=tinysrgb&w=1600'}];

//document.querySelector('body').addEventListener('click', function(){toggleMenu(null)});
document.querySelector('.navbar-email').addEventListener('click', function(){toggleMenu(listMenus["desktopMenu"])});
document.querySelector('.menu').addEventListener('click', function(){toggleMenu(listMenus["mobileMenu"])});
document.querySelector('.navbar-shopping-cart').addEventListener('click', function(){toggleMenu(listMenus["cartMenu"])});
renderProducts(productList)

function toggleMenu(elemento)
{
    for (let itemMenu of Object.values(listMenus))
        if (itemMenu.classList.contains('inactive') === false)
            itemMenu.classList.add('inactive');

    //if (menuAnterior != null) menuAnterior.classList.add('inactive');

    if (elemento != null )
    {
        if (menuAnterior != elemento) elemento.classList.remove('inactive');
        menuAnterior = elemento.classList.contains('inactive') === true ? null : elemento;
    }

    console.log(elemento);
}

function renderProducts(arrayProducts)
{
    let cardsContainer = document.querySelector('.cards-container')

    for (let product of arrayProducts) 
    {
        let productCard = document.createElement('div');
        let productImg = document.createElement('img');
        let productInfo = document.createElement('div');
        let productInfoDiv = document.createElement('div');
        let productPrice = document.createElement('p');
        let productName = document.createElement('p');
        let productInfoFigure = document.createElement('figure');
        let productImgCard = document.createElement('img');

        productCard.classList.add('product-card');
        productImg.setAttribute('src', product.image);
        productInfo.classList.add('product-info');
        productPrice.innerText = '$' + product.precio;
        productName.innerText = product.name;
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCard);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}
