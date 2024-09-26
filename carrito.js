const email = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menIcon = document.querySelector('.menu');
const mobimen = document.querySelector('.mobile-menu');
const carri = document.querySelector('.navbar-shopping-cart');
const produc = document.querySelector('#shoppinCartConteiner');
const productDetail = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

email.addEventListener('click', toggleDesktopmenu);
menIcon.addEventListener('click', toglemen);
carri.addEventListener('click', carroProduc);
productDetailCloseIcon.addEventListener('click', closeProducIcon)

function toggleDesktopmenu() {
    const isProducClosed = produc.classList.contains('inactive');

    if(!isProducClosed){
        produc.classList.add('inactive');
    }
    desktopmenu.classList.toggle('inactive');
}

function toglemen(){
    const isProducClosed = produc.classList.contains('inactive');

    if(!isProducClosed){
        produc.classList.add('inactive');
    }
    closeProducIcon();
    mobimen.classList.toggle('inactive');
}

function carroProduc(params) {
    const ismobimenClosed = mobimen.classList.contains('inactive');
    
    
    if(!ismobimenClosed){
        mobimen.classList.add('inactive');
    }
    

    /**/
    const isproductDetail = productDetail.classList.contains('inactive');
    
    
    if(!isproductDetail){
        productDetail.classList.add('inactive');
    }

    produc.classList.toggle('inactive');
   
}

function openProducAside() {
    produc.classList.add('inactive');
    productDetail.classList.remove('inactive');
}
function closeProducIcon() {
    productDetail.classList.add('inactive');
}

const productoList = [];
productoList.push({
    name: 'bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productoList.push({
    name: 'carro',
    price: 180,
    img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg'
});

productoList.push({
    name: 'radio',
    price: 1820,
    img: 'data:image/jpeg;base64,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'
});


function renderProducts(arr) {
for(producL of arr){
   const producCart = document.createElement('div');
   producCart.classList.add('product-card');

   const prodimg = document.createElement('img')
   prodimg.setAttribute('src', producL.img);
   prodimg.addEventListener('click', openProducAside);

   const producInf = document.createElement('div');
   producInf.classList.add('product-info');

   const producInfDiv = document.createElement('div');

   const producPreci = document.createElement('p');
   producPreci.innerHTML = '$' + producL.price;
   const producName = document.createElement('p');
   producName.innerHTML = producL.name;

   producInfDiv.appendChild(producPreci);
   producInfDiv.appendChild(producName);

   const producInfDivfig = document.createElement('figure');
   const producImgCart = document.createElement('img');
   producImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');



   
   producInfDivfig.appendChild(producImgCart);

   producInf.appendChild(producInfDiv);
   producInf.appendChild(producInfDivfig);

   producCart.appendChild(prodimg);
   producCart.appendChild(producInf);
   cardsContainer.appendChild(producCart);

}
}

renderProducts(productoList);