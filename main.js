const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


const imagen = document.querySelector("#infoImages"); //agregado
const priceProduct = document.querySelector("#price"); //agregado
const descriptionProduct = document.querySelector("#productDescription");//agregado


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
    
    closeProductDetailAside()
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside(),

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }


    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive')    
    
}

function openProductDetailAside(event){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');


//event.target para seleccionar detalle de producto AGREGADOS:
    imagen.setAttribute("src", event.target.src); 
    priceProduct.innerText = event.target.nextElementSibling.innerText;
    /* descriptionProduct.innerText = product.detalle; */

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}



const productList = [];
    productList.push({
        name: 'Bike',
        price: '120',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        detalle: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace',
    });
    productList.push({
        name: 'Sofa',
        price: '280',
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Orange sofa for two, like new'
    });
    productList.push({
        name: 'Guitar',
        price: '200',
        image: 'https://images.pexels.com/photos/5080428/pexels-photo-5080428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Enjoy playing some Zitarrosa with this beautiful Spanish Guitar.'
    });
    productList.push({
        name: 'Computer',
        price: '480',
        image: 'https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Light notebook, works well. Year 2021.'
    });
    productList.push({
        name: 'Mirror',
        price: '40',
        image: 'https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Small oval mirror with wooden edges. Excellent as decoration'
    });
    productList.push({
        name: 'Table',
        price: '100',
        image: 'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'White light table. As new'
    });
    productList.push({
        name: 'Jeans',
        price: '20',
        image: 'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Colored jeans. Size s'
    });
    productList.push({
        name: 'PSone',
        price: '90',
        image: 'https://images.pexels.com/photos/9281224/pexels-photo-9281224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Enjoy classic Sony games with this Psone'
    });
    productList.push({
        name: 'Earphones',
        price: '30',
        image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Black wireless headphones, excellent condition.'
    });
    productList.push({
        name: 'Clock',
        price: '35',
        image: 'https://images.pexels.com/photos/210528/pexels-photo-210528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Vintage Clock, works'
    });
    productList.push({
        name: 'Box games',
        price: '30',
        image: 'https://images.pexels.com/photos/4887249/pexels-photo-4887249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Different box games to enjoy with the family'
    });
    productList.push({
        name: 'Sweater',
        price: '10',
        image: 'https://images.pexels.com/photos/6577696/pexels-photo-6577696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Beautiful purple Sweater. Size S'
    });
    productList.push({
        name: 'Classic Telephone',
        price: '40',
        image: 'https://images.pexels.com/photos/9463833/pexels-photo-9463833.jpeg',
        detalle: 'Vintage Telephone'
    });
    productList.push({
        name: 'Shoes',
        price: '20',
        image: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        detalle: 'Different colored shoes. Size 7'
    });
   



  function renderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product={name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);