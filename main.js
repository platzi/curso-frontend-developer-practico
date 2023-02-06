const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector('.menu')
const closeAsideIcon = document.querySelector('.product-detail-close')

const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const productContainer = document.querySelector('.cards-container')
const productDetailAside = document.querySelector('.product-detail-secundary')




// Aside productdetail secundary.

const productImgAside = document.querySelector('.product-Detail-img')
const priceProduct = document.querySelector(".price");



navbarEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleAside)
closeAsideIcon.addEventListener('click',closeProductDetailAside)



function toggleDesktopMenu(){
    let isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    let isProductDetailClosed = productDetailAside.classList.contains('inactive')

    if(!isProductDetailClosed){
        productDetailAside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');


}
function toggleMobileMenu(){
    let isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    let isProductDetailClosed = productDetailAside.classList.contains('inactive')

    if(!isProductDetailClosed){
        productDetailAside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}
function toggleAside(){

    let isMobileClosed = mobileMenu.classList.contains('inactive')
    if(!isMobileClosed){
        mobileMenu.classList.add('inactive')
    }

    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    let isProductDetailClosed = productDetailAside.classList.contains('inactive')

    if(!isProductDetailClosed){
        productDetailAside.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
function openProductDetailAside(event){
    productDetailAside.classList.remove('inactive')

    productImgAside.setAttribute("src", event.target.src)
    priceProduct.innerText = event.target.nextElementSibling.innerText

    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    let isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
}
function closeProductDetailAside(){
    productDetailAside.classList.add('inactive')
}


const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)

        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
     
        const productInfoDiv = document.createElement('div')
     
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p')
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
     
        const productInfoFigure = document.createElement('figure')
        const productIcon = document.createElement('img');
        productIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        productInfoFigure.appendChild(productIcon);
     
         productInfo.appendChild(productInfoDiv)
         productInfo.appendChild(productInfoFigure)
     
         productCard.appendChild(productImg)
         productCard.appendChild(productInfo)
     
         productContainer.appendChild(productCard)
     
     }
     
}
renderProducts(productList)






