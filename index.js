
const navEmail = document.querySelector('.navbar-email');
const deskmenu = document.querySelector('.desktop-menu');

const iconMenu= document.querySelector('.menu');
const movilmenu=document.querySelector('.mobile-menu');

const iconCar =document.querySelector('.iconCar');
const detalleProduct=document.querySelector('.product-detail');

const cardContainer = document.querySelector('.cards-container');

const detailAside = document.querySelector('.product-detail-shopping');
const botonClose = document.querySelector('#button-Close');


function aparecernav(){movilmenu.classList.toggle('inac-mobile');

if(movilmenu.classList.contains('inac-mobile')){

}else{
    detalleProduct.classList.add('inac-deta-pro');
}

detailClose();

}

function aparecerMenu(){deskmenu.classList.toggle('inactivado');

if(!movilmenu.classList.contains('inactivado')){
    detalleProduct.classList.add('inac-deta-pro');
}

if(!detailAside.classList.contains('detail-inactive')){
      detailAside.classList.add('detail-inactive');
}


}

function aparecerProducto(){
    detalleProduct.classList.toggle('inac-deta-pro');

    if(detalleProduct.classList.contains('inac-deta-pro')){
    }else{
        movilmenu.classList.add('inac-mobile');
    }

    if(!detailAside.classList.contains('detail-inactive')){
        detailAside.classList.add('detail-inactive');
    }
    if(!deskmenu.classList.contains('inactivado')){
        deskmenu.classList.add('inactivado');
    }

    
}

function aparecerDetail(){
    detailAside.classList.remove('detail-inactive');

    if(!detalleProduct.classList.contains('inac-deta-pro')){
        detalleProduct.classList.add('inac-deta-pro');
    }
    if(!deskmenu.classList.contains('inactivado')){
        deskmenu.classList.add('inactivado');
    }

}
function detailClose(){
    detailAside.classList.add('detail-inactive')
}

navEmail.addEventListener('click', aparecerMenu);
iconMenu.addEventListener('click', aparecernav)
iconCar.addEventListener('click', aparecerProducto);

botonClose.addEventListener('click', detailClose);

const producList =[];

producList.push({
    name:'Pedro Castillo',
    price:120,
    image:'https://upload.wikimedia.org/wikipedia/commons/c/cd/Pedro_Castillo_portrait.png'
});

producList.push({
    name:'Martin Vizcarra',
    price:15000,
    image:'https://upload.wikimedia.org/wikipedia/commons/f/f9/Mart%C3%ADn_Vizcarra_Cornejo_%28cropped%29_%28cropped%29.png'
});

producList.push({
    name:'Pedro Pablo Kuchizky',
    price:210000,
    image:'https://redgestorespublicos.pe/wp-content/uploads/2016/08/000367829W.jpg'
});

producList.push({
    name:'Ollanta Humala Tasso',
    price:210000,
    image:'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ollanta_Humala_Retrato.png'
});
producList.push({
    name:'Alan Garcia Perez',
    price:210000,
    image:'https://larepublica.pe/resizer/DJM3gC53sIbdiaCYwW8nCJk8Q8A=/1250x735/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/6P2NQQIAKFB2VEHNUMTB2P34QE.PNG'
});
producList.push({
    name:'Alejandro Toledo',
    price:210000,
    image:'https://imagenes.elpais.com/resizer/sV9GptnK37LfmiVKO1aD9WvYU3U=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/HT7EY25AZTYUYKS4SF74BKKCVU.jpg'
});

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>*/


 function verProducts(array){     

for(product of producList){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const imagen=document.createElement('img');
    imagen.setAttribute('src',product.image);

    imagen.addEventListener('click', aparecerDetail);
    
      
    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    const detalleP=document.createElement('div');

    const productPrice=document.createElement('p');
    productPrice.innerHTML='$'+ product.price;

    const productName=document.createElement('p');
    productName.innerHTML=product.name;


    const figure=document.createElement('figure');
      

    const imgCar=document.createElement('img');
    imgCar.setAttribute('src',  './icons/bt_add_to_cart.svg');

    cardContainer.appendChild(productCard);
    productCard.appendChild(imagen);
    productCard.appendChild(productInfo);
    productInfo.appendChild(detalleP);
    productInfo.appendChild(figure);
    detalleP.appendChild(productName);
    detalleP.appendChild(productPrice)
    figure.appendChild(imgCar);
   
}
}

verProducts(producList);