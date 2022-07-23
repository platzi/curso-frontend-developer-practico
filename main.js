const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');
const productInfo = document.querySelector('#productdetail');
const botonCerrarInfo = document.querySelector('.product-detail-close');

let info;
let infoimagen;
let infoNombre;
let infoPrecio;
let indice;

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
botonCerrarInfo.addEventListener('click', cerrarInfo);

function toggleDesktopMenu()
{
    /*if (desktopMenu.classList.contains('inactive'))
    {
        console.log('se inactiva');
        desktopMenu.classList.remove('inactive');
        console.log({desktopMenu});
    }
    else
    {
        console.log('se activa');
        desktopMenu.classList.add('inactive');
        console.log({desktopMenu});
    }*/
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    productInfo.classList.add('inactive');
}

function toogleMobileMenu()
{
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    productInfo.classList.add('inactive');
}

function toogleCarritoAside()
{
    /*const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }*/
    mobileMenu.classList.add('inactive');
    productInfo.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
    
}

function openProductDetail(event)
{
   
    info = event.path.find(element => element.className == 'product-card');
    infoNombre = info.querySelector('.product-info').querySelectorAll('p')[1].innerText;
    indice = productList.findIndex(element => element.name == infoNombre);
    productInfo.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    setInfo(indice);
}

function setInfo(index)
{
    
    productInfo.querySelector('.picture').setAttribute('src', productList[index].img);
    productInfo.querySelector('.product-info').querySelectorAll('p')[0].innerText = '$ ' + productList[index].price;
    productInfo.querySelector('.product-info').querySelectorAll('p')[1].innerText = productList[index].name;
    productInfo.querySelector('.product-info').querySelectorAll('p')[2].innerText = productList[index].description;

}

function cerrarInfo()
{
    productInfo.classList.add('inactive');
}

const productList = [];
productList.push({name: 'Bike', price: 120, img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: 'Una super bicicleta clasica, paletera de segunda en excelente estado'});
productList.push({name: 'Moto', price: 1000, img: 'https://images.pexels.com/photos/7543703/pexels-photo-7543703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Excelente moto tipo Vespa salida como de un cuento de hadas, se quedo atrada en el tiempo y por eso su conservación'});
productList.push({name: 'Car', price: 10000, img: 'https://images.pexels.com/photos/3121303/pexels-photo-3121303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Este clasico ingles Mini Cord de los 90s tiene todavia mucha candela que dar'});
productList.push({name: 'TV', price: 100, img: 'https://images.pexels.com/photos/5721908/pexels-photo-5721908.jpeg?cs=srgb&dl=pexels-anete-lusina-5721908.jpg&fm=jpg', description: 'Este TV no da imagen en su pantalla, pero si le da muy buena imagen a tu casa'});
productList.push({name: 'Phone', price: 50, img: 'https://images.pexels.com/photos/3435213/pexels-photo-3435213.jpeg?cs=srgb&dl=pexels-%E5%B9%BB%E5%BD%B1%E5%A4%9A%E5%AA%92%E4%BD%93-d-3435213.jpg&fm=jpg', description: 'Perfecto para adornar tu casa y lo mejor es que aun funciona y tiene su timbre clasico y ruidoso'});
productList.push({name: 'Radio', price: 200, img: 'https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg?cs=srgb&dl=pexels-pixabay-159613.jpg&fm=jpg', description: 'Si tu pasión es lo retro y tuviste una juventud alocada, este stereo es te hará recordar aquellas epocas de rap y grafittis, incluso algo mas...'});

function addList(container,list)
{
    for (let product of list)
    {
        const divContainer = document.createElement('div');
        container.appendChild(divContainer);
        divContainer.classList.add('product-card');

        const imagenProducto = document.createElement('img');
        divContainer.appendChild(imagenProducto)
        imagenProducto.setAttribute('src',product.img);
    
        const divContainer1 = document.createElement('div');
        divContainer.appendChild(divContainer1);
        divContainer1.classList.add('product-info');

        const divContainer2 = document.createElement('div');
        divContainer1.appendChild(divContainer2);

        const figure = document.createElement('figure');
        divContainer1.appendChild(figure)

        const iconCart = document.createElement('img');
        figure.append(iconCart);
        iconCart.setAttribute('src','./icons/bt_add_to_cart.svg')

        const pPrice = document.createElement('p');
        const pName = document.createElement('p');

        divContainer2.appendChild(pPrice);
        divContainer2.appendChild(pName);

        pPrice.innerText = '$ '+ product.price;
        pName.innerText = product.name;

        divContainer.addEventListener('click', openProductDetail);
        
    }
}

addList(cardsContainer,productList);
const productDetail = document.querySelectorAll('.product-card');

