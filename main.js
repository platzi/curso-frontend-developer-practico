const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menucarritoicon = document.querySelector('.navbar-shopping-cart');
const productdetailcloseicon =document.querySelector('.product-detail-close');
const menuhamicon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const shoppingcartcontainer = document.querySelector('#shoppingcartcontainer');
const productdetailcontainer = document.querySelector('#productdetail');
const cardscontainer = document.querySelector('.cards-container');


menuemail.addEventListener('click', toggledesktopmenu);
menuhamicon.addEventListener('click', togglemobilemenu);
menucarritoicon.addEventListener('click', togglecarritoaside);
productdetailcloseicon.addEventListener('click', closeproductdetailaside);

function toggledesktopmenu () {
    const isasidelosed = shoppingcartcontainer.classList.contains
    ('inactive');
    if (!isasidelosed){
        shoppingcartcontainer.classList.add('inactive');
     }
    
desktopmenu.classList.toggle('inactive');
}
function togglemobilemenu () {
    const isasidelosed = shoppingcartcontainer.classList.contains
    ('inactive');
    if (!isasidelosed){
        shoppingcartcontainer.classList.add('inactive');
     }

    closeproductdetailaside();
    mobilemenu.classList.toggle('inactive');
}
function togglecarritoaside () {
    const ismobilemenuclosed = mobilemenu.classList.contains
    ('inactive');
    if (!ismobilemenuclosed){
        mobilemenu.classList.add('inactive');
     }

     const isproductdetailclosed = productdetailcontainer.classList.contains
    ('inactive');
    if (!isproductdetailclosed){
        productdetailcontainer.classList.add('inactive');
     }

     shoppingcartcontainer.classList.toggle('inactive');
     
}
function openproductdetailaside (){
 shoppingcartcontainer.classList.add('inactive');   
productdetailcontainer.classList.remove('inactive');
}
function closeproductdetailaside(){
productdetailcontainer.classList.add('inactive');    
}

const productlist = [];
productlist.push({
    name: 'Bike',
    price: '260',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">'
    });
productlist.push({
    name: 'Pantalla',
    price: '2600',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">'
    });
productlist.push({
    name: 'Portatil',
    price: '3000',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">'
    });
    /*
productlist.push({
    name: 'Televisor',
    price: '10000',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">'
    });         
productlist.push({
    name: 'Moto',
    price: '20500',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">'
    });
productlist.push({
    name: 'Mac',
    price: '98700',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">'
    }); 
    */
    
      function renderproducts (arr){
      for (product of arr){
        const productcard = document.createElement('div');
        productcard.classList.add('product-card');

        const productimg = document.createElement ('img');
        productimg.setAttribute('src', product.image);
        productimg.addEventListener('click', openproductdetailaside);

        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');

        const productinfodiv = document.createElement('div');


        const productprice = document.createElement('p');
        productprice.innerText = '$' + product.price;
        const productname = document.createElement('p');
        productname.innerText = product.name;

        productinfodiv.appendChild(productprice);
        productinfodiv.appendChild(productname);

        const productinfofigure = document.createElement('figure');
        const productimgcart = document.createElement('img');
        productimgcart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productinfofigure.appendChild(productimgcart);

        productinfo.appendChild(productinfodiv);
        productinfo.appendChild(productinfofigure);

        productcard.appendChild(productimg);
        productcard.appendChild(productinfo);
        console.log('json',cardscontainer);
        cardscontainer.appendChild(productcard);
        
      };
    }
    renderproducts(productlist);