const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer =document.querySelector('#shoppingCartContainer');
const cardsContainer=document.querySelector('.cards-container')
const productDetailContainer=document.querySelector('#productDetail');
const productDetailCloseIcon=document.querySelector('.product-detail-close')

menuEmail.addEventListener('click' , toggleDesktopMenu);
menuHamIcon.addEventListener('click' ,toggleMobileMenu);
menuCarritoIcon.addEventListener('click' ,toggleCarritoAside);
productDetailCloseIcon.addEventListener('click' , closeProductDetailAside)


function toggleDesktopMenu(){
    const isasideClosed=shoppingCartContainer.classList.contains('inactive');

    if (!isasideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
const isAsideClosed=shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside(){

    const ismobileMenuClosed=mobileMenu.classList.contains('inactive');

    if (!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    
    const isproductDetailCLosed=productDetailContainer.classList.contains('inactive')
    

    if (!isproductDetailCLosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
   
}


function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productlist =[];
productlist.push({
    name: 'bike',
    price: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productlist.push({
    name: 'pantalla',
    price: 320,
    image:'https://media.istockphoto.com/id/1792463021/es/foto/interior-oscuro-de-la-sala-de-cine-con-pantalla-y-sillas.jpg?s=1024x1024&w=is&k=20&c=MArqME6GNBk3Y3G2fEtCV67Td1cMBxl8CCcjulDRwBE='
});

productlist.push({
    name: 'car',
    price: 1220,
    image:'https://media.istockphoto.com/id/1150931120/es/foto/ilustraci%C3%B3n-3d-del-coche-blanco-compacto-gen%C3%A9rico-vista-frontal-lateral.jpg?s=1024x1024&w=is&k=20&c=lgzPc6AkILBJuWwREePNHlmdAy_yyRNRp-EF8ZGnP28='
});

/*      <div class="product-card">
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
      </div> */


function renderProduct (arr){
    for (product of arr ){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');


        //product={name,price,image}--> product.img
        const productimg = document.createElement('img');
        productimg.setAttribute('src', product.image);
        productimg.addEventListener('click', openProductDetailAside);

        const productinfo= document.createElement('div');
        productinfo.classList.add('product-info');


        const productInfoDiv=document.createElement('div');


        const productPrice=document.createElement('p');
        productPrice.innerText='$'+ product.price;

        const productName=document.createElement('p');
        productName.innerText= product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);


        const productInfoFigure=document.createElement('figure');
        const productImgCard=document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');


        productInfoFigure.appendChild(productImgCard);
        
        productinfo.appendChild(productInfoDiv);
        productinfo.appendChild(productInfoFigure);


        productCard.appendChild(productimg);
        productCard.appendChild(productinfo);

        cardsContainer.appendChild(productCard)
    }


}

renderProduct(productlist);
