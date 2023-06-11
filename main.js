const email= document.querySelector('.navbar-email');
const dskmenu= document.querySelector('.desktop-menu');
const iconmenu=document.querySelector('.menu');
const mbmenu=document.querySelector('.mobile-menu');
const iconCar=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');
let isCloseMenuMb;
let isCloseAside;
const cardsContainer=document.querySelector('.cards-container');



email.addEventListener('click',function(){
    dskmenu.classList.toggle('inactive');
});

iconmenu.addEventListener('click',function(){
    isCloseAside=aside.classList.contains('inactive');
    console.log(isCloseAside);
    if(!isCloseAside){
        aside.classList.add('inactive');
    }
    mbmenu.classList.toggle('inactive');
    
});

iconCar.addEventListener('click',function(){
    isCloseMenuMb=mbmenu.classList.contains('inactive');
    if(!isCloseMenuMb){
        mbmenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
});

const productList=[];
productList.push({
    name:'bike',
    price:300,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name:'pantalla',
    price:120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name:'ipone',
    price:150,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
renserProduct(productList);

function renserProduct(productList){
    productList.forEach((product)=>{
            const productCart=document.createElement('div');
            productCart.classList.add('class','product-card');

            const img=document.createElement('img');
            img.setAttribute('src',product.img);

            const productInfo=document.createElement('div');
            productInfo.classList.add('product-info');

            const productInfoDiv=document.createElement('div');
            const precio=document.createElement('p');
            precio.append('$'+(product.price));
            const name=document.createElement('p');
            name.appendChild(document.createTextNode(product.name));

            productInfoDiv.append(precio);
            productInfoDiv.append(name);
            
            const figure=document.createElement('figure');
            const icon=document.createElement('img');
            icon.setAttribute('src','./icons/bt_add_to_cart.svg');

            figure.append(icon);

            productInfo.append(productInfoDiv);
            productInfo.append(figure);

            productCart.append(img);
            productCart.append(productInfo);

            cardsContainer.append(productCart);

    });
}
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
      </div> -->*/













