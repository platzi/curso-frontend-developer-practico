
const desplegable = document.querySelector('.desktop-menu');
const correo = document.querySelector('.navbar-email');
const hamburger = document.querySelector('.menu');
const menuView = document.querySelector('.mobile-menu');
const carShoping = document.querySelector('.navbar-shopping-cart');
const listToogle = document.querySelector('#cardShoping');
const card_container = document.querySelector('.cards-container');
const asideInfo = document.querySelector('#asideInformation');
const closeBTN = document.querySelector('.product-detail-close');
correo.addEventListener('click', toogleClass);


function toogleClass(){
    desplegable.classList.toggle('inactive');
    asideInfo.classList.add('inactive');
    if(listToogle.getAttribute('class').includes('inactive') == false){
        listToogle.classList.toggle('inactive');
      }
}

hamburger.addEventListener('click', menuHamburger);

function menuHamburger(){
    menuView.classList.toggle('inactive');
    asideInfo.classList.add('inactive');
    if(listToogle.getAttribute('class').includes('inactive')== false){
        listToogle.classList.toggle('inactive');
    }
    
}

carShoping.addEventListener('click',toogleList);

function toogleList(){
  listToogle.classList.toggle('inactive');
  asideInfo.classList.add('inactive');
  if(menuView.getAttribute('class').includes('inactive')== false){
    menuView.classList.toggle('inactive');
}
if(desplegable.getAttribute('class').includes('inactive')==false){
    desplegable.classList.toggle('inactive');
}
 
}

let arrayList = [];
arrayList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'TV',
    price: '300',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Computer',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Computer',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: 'Computer',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Computer',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProduct(){

    for(product of arrayList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        const divInfo = document.createElement('div');
        divInfo.classList.add('product-info');
        const pPrice = document.createElement('p');
        pPrice.innerText = '$ '+ product.price;
        const pNombre = document.createElement('p');
        pNombre.innerText = product.name;
        const divS = document.createElement('div');
        divS.append(pPrice,pNombre)
        const iconFigure = document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src','./icons/bt_add_to_cart.svg');
        iconFigure.appendChild(imgFigure);
        imgProduct.addEventListener('click',openInfo)
        productCard.appendChild(imgProduct);
        productCard.appendChild(divInfo);
        divInfo.appendChild(divS)
        divInfo.appendChild(iconFigure);
        card_container.appendChild(productCard);


    }
}

renderProduct();

function openInfo(){
    asideInfo.classList.remove('inactive');
    desplegable.classList.add('inactive');
    menuView.classList.add('inactive');
    listToogle.classList.add('inactive');
}

closeBTN.addEventListener('click',closeInfo);

function closeInfo(){
    asideInfo.classList.add('inactive');
}