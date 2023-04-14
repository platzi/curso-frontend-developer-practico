let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let menuIconH = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
let aside = document.querySelector('.product-detail');
let cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIconH.addEventListener('click',toggleMobilepMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    let isAsideClsed = aside.classList.contains('inactive');
    if (!isAsideClsed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    let isAsideClsed = aside.classList.contains('inactive');
    if (!isAsideClsed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

let productList = [];
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 



function renderProduct(arr ){
    for(product of arr){
        let productCard = document.createElement('div');
           productCard.classList.add('product-card');
       
           let productImg = document.createElement('img');
           productImg.setAttribute('src',product.image);
       
          let productInfo = document.createElement('div');
           productInfo.classList.add('product-info');
       
           let productInfoDiv = document.createElement('div');
           let productInfoPrice = document.createElement('p');
           productInfoPrice.innerText='$' + product.price
           let productInfoName = document.createElement('p');
           productInfoName.innerText = product.name;
           
           productInfoDiv.appendChild(productInfoPrice);
           productInfoDiv.appendChild(productInfoName);
       
           let productFigure= document.createElement('figure');
           let productImgCart = document.createElement('img');
           productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
       
           productFigure.appendChild(productImgCart);
       
           productInfo.appendChild(productInfoDiv);
           productInfo.appendChild(productFigure);
       
           productCard.appendChild(productImg);
           productCard.appendChild(productInfo);
       
           
             
           cardsContainer.appendChild(productCard);
       }
}
renderProduct(productList);