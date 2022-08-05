const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const mobilicon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const menucarticon = document.querySelector('.navbar-shopping-cart');
const shoppingcartcontainer = document.querySelector('#shoppingcartcontainer');
const cardscontainer = document.querySelector('.cards-container');


menuemail.addEventListener('click', toggledesktopmenu);
mobilicon.addEventListener('click', togglemobilemenu);
menucarticon.addEventListener('click', toggleshopingcart);


function toggledesktopmenu() {
    const isasideclose = shoppingcartcontainer.classList.contains('inactive');
    if (!isasideclose){
        shoppingcartcontainer.classList.add('inactive');
    }
    desktopmenu.classList.toggle('inactive');
}

function togglemobilemenu(){
    
    const isasideclose = shoppingcartcontainer.classList.contains('inactive');
    if (!isasideclose){
        shoppingcartcontainer.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
}

function toggleshopingcart(){

    const ismobilemenuclose = mobilemenu.classList.contains('inactive');
    const isdesktopmenuclose = desktopmenu.classList.contains('inactive');
    if (!ismobilemenuclose|| !isdesktopmenuclose){
        mobilemenu.classList.add('inactive');
        desktopmenu.classList.add('inactive')
    }
    shoppingcartcontainer.classList.toggle('inactive');

}

    const productlist = [];
    
    productlist.push({
        name:   'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    })
    productlist.push({
        name:   'Balon',
        price: 120,
        image: 'https://www.pngmart.com/files/1/2014-World-Cup-Soccer-Ball-PNG.png',
    })
    productlist.push({
        name:   'Carro',
        price: 999999,
        image: 'https://www.pngplay.com/wp-content/uploads/13/Kia-Niro-EV-PNG-Photos.png',
    })

    function renderproducts(arr) {   
    for (product of productlist) {
        const productcard = document.createElement('div');
        productcard.classList.add('product-card');
        
        const productimg = document.createElement('img');
        productimg.setAttribute('src', product.image);

        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info')

        const productinfodiv = document.createElement('div');

        const productprice = document.createElement('p');
        productprice.innerText = '$' + product.price;

        const productname = document.createElement('p');
        productname.innerText = product.name;
        
        productinfodiv.appendChild(productprice);
        productinfodiv.appendChild(productname);
        
        productinfofigure = document.createElement('figure');
        const productimgcart = document.createElement('img')
        productimgcart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productinfofigure.appendChild(productimgcart);

        productinfo.appendChild(productinfodiv);
        productinfo.appendChild(productinfofigure);
        
        productcard.appendChild(productimg);
        productcard.appendChild(productinfo);

        cardscontainer.appendChild(productcard);
        
    }
    }      
    renderproducts(productlist);