const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

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
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed)
    {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu()
{
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed)
    {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside()
{
    /*const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }*/


    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
    console.log({mobileMenu});
    
}

const productList = [];
productList.push({name: 'Bike', price: 120, img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
productList.push({name: 'Moto', price: 1000, img: 'https://images.pexels.com/photos/690816/pexels-photo-690816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'});
productList.push({name: 'Car', price: 10000, img: 'https://images.pexels.com/photos/3121303/pexels-photo-3121303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'});

const cardsContainer = document.querySelector('.cards-container');

function addList(container,list)
{
    for (product of list)
    {

        


        const divContainer = document.createElement('div');
        container.appendChild(divContainer);
        divContainer.classList.add('product-card');

        const imagen = document.createElement('img');
        divContainer.appendChild(imagen)
        imagen.setAttribute('src',product.img);
    
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

        pPrice.innerText = '$'+product.price;
        pName.innerText = product.name;

        
        
    }
}

addList(cardsContainer,productList);