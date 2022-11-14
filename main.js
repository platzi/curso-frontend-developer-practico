const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const numberOfItems = document.querySelector('.navbar-shopping-cart div'); // se debe poner en el recuadro el numero de items seleccionados hasta el momento (medir el length del aside product detail)
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailInd = document.querySelector('.product-detail-individual');
const shoppingCart = document.querySelector('.shopping-cart');
const backToSite = document.querySelector('.product-detail .title-container img');
let totalPrice = aside.querySelector('.order p:nth-child(2)');
let totalPriceNumber = 0;




totalPrice.innerText = '$' + totalPriceNumber;
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAsai);
backToSite.addEventListener('click', closeShoppingCart);

function toggleDesktopMenu() {
    productDetailInd.classList.add('inactive');
    aside.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
};

function toggleMobileMenu() {
    productDetailInd.classList.add('inactive');
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
};

function toggleCarAside() {
    productDetailInd.classList.add('inactive');
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
};

function openProductDetailAsai() {
    aside.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailInd.classList.remove('inactive');
    const productImage = document.querySelector('.product-card img');
    // console.log(upTo(productImage, 'div'))
}

function closeShoppingCart() {
    aside.classList.add('inactive');
}
function closeProductDetailAsai() {
    productDetailInd.classList.add('inactive');
}

function addToCart () {
    let thisCard;
    let thisSource;

    // se pone la imagen dependiendo si se hizo click desde el elemento individual o desde la lista de productos

    if (this.tagName == 'IMG') {
        thisCard = upTo(upTo(this, 'div'), 'div')
        thisSource = thisCard.querySelectorAll('img')[0].src;
    } else {
        thisCard = upTo(this, 'aside');
        thisSource = thisCard.querySelectorAll('img')[1].src;
    }

    let thisName = thisCard.querySelectorAll('p')[1].innerText;
    let thisPrice = thisCard.querySelectorAll('p')[0].innerText;

    let shoppingCartProduct = document.createElement('div');
    shoppingCartProduct.setAttribute('class', 'shopping-cart-product')

    let cartProductFig = document.createElement('figure');
    let cartProductImg = document.createElement('img');
    cartProductImg.setAttribute('src', thisSource);
    cartProductFig.appendChild(cartProductImg);

    let cartProductPrice = document.createElement('p');
    cartProductPrice.innerText = thisPrice;

    let cartProductName = document.createElement('p');
    cartProductName.innerText = thisName;

    let cartProductCloseImg = document.createElement('img');
    cartProductCloseImg.setAttribute('src', "./icons/icon_close.png");
    cartProductCloseImg.setAttribute('alt', "close");
    cartProductCloseImg.addEventListener('click', removeFromCart)

    // console.log(thisPrice);


    shoppingCartProduct.appendChild(cartProductFig);
    shoppingCartProduct.appendChild(cartProductName);
    shoppingCartProduct.appendChild(cartProductPrice);
    shoppingCartProduct.appendChild(cartProductCloseImg);

    shoppingCart.appendChild(shoppingCartProduct);

    numberOfItems.innerText = shoppingCart.children.length;

    // let total = aside.querySelector('.order span'); // quería cambiar el nombre si el total es 0

    
    // let priceList = [];
    let price;
    for (child of shoppingCart.children) {
        price = Number(child.children[1].innerText.slice(1));
        // priceList.push(price);
    }
    
    totalPriceNumber = totalPriceNumber + Number(thisPrice.slice(1));
    totalPrice.innerText = ''
    totalPrice.innerText = '$' + totalPriceNumber;
    console.log(thisPrice.slice(1))

    //Aun no puedo remover las cosas y que se reste al número. creo que debo buscar una solución más fácil (p. ej. cuando se agrega algo al carrito, inmediatamente se suma el valor al Total, sin necesidad de listas. Cuando se quite, inmediatamente se resta.)

    function removeFromCart() {
        upTo(this, 'div').remove();
        totalPriceNumber = totalPriceNumber - Number(thisPrice.slice(1));
        totalPrice.innerText = ''
        totalPrice.innerText = '$' + totalPriceNumber;

        // for (child of shoppingCart.children) {
        //     price = Number(child.children[1].innerText.slice(1));
        // }
    };
};


function upTo(el, tagName) { //obtiene el elemento padre que se esté buscando. Lo usaré para buscar el padre de la imagen
    tagName = tagName.toLowerCase();
  
    while (el && el.parentNode) {
      el = el.parentNode;
      if (el.tagName && el.tagName.toLowerCase() == tagName) {
        return el;
      }
    }
  
    // Many DOM methods return null if they don't 
    // find the element they are searching for
    // It would be OK to omit the following and just
    // return undefined
    return null;
};

function showArticle() {
    for (child of cardsContainer.children) {
        let imgOfCard = document.querySelector('#' + child.id + ' img');
        let productId = upTo(imgOfCard, 'div').id;
        // imgOfCard.addEventListener('click', function logParent() {console.log(upTo(imgOfCard, 'div').id)});
        imgOfCard.addEventListener('click', renderProduct);
        //console.log('#' + child.id + ' img')
    };
};



const productList = [
        {
            name: "Gafas de marco negro",
            price: 25,
            image: "https://images.pexels.com/photos/131018/pexels-photo-131018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Estass gafas tienen un marco negro"

        },
        {
            name: "Gafas de marco marrón",
            price: 30,
            image: "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "estas gafas tienen el marco marrón"

        },
        {
            name: "Diferentes tipos de gafas",
            price: 20,
            image: "https://images.pexels.com/photos/4226880/pexels-photo-4226880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "vendo tres gafas de marco delgado"

        },
        {
            name: "Zapatos elegantes",
            price: 120,
            image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "vendo zapatos muy elegantes"

        },
        {
            name: "Zapatos converse",
            price: 200,
            image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "vendo Zapatos converse"

        },
        {
            name: "Tacones",
            price: 150,
            image: "https://images.pexels.com/photos/134064/pexels-photo-134064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Vendo tacones muy altos"

        },
        {
            name: "Cámara canon con tripode",
            price:400,
            image: "https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "vendo cámara con su tripode"

        },
        {
            name: "Accesorios para cámara",
            price: 200,
            image: "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "vendo diferentes accesorios para una cámara"

        },
        {
            name: "Cámara canon",
            price: 300,
            image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "Accesorios para viaje",
            price: 500,
            image: "https://images.pexels.com/photos/821750/pexels-photo-821750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "Accesorios para video",
            price: 1700,
            image: "https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "lentes de cámara",
            price: 300,
            image: "https://images.pexels.com/photos/326316/pexels-photo-326316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        }
];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
})
productList.push({
    name: "pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600"
})
productList.push({
    name: "laptop",
    price: 820,
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600"
});


function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productId = 'product-' + productList.indexOf(product);
        productCard.setAttribute('id', productId);
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAsai);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productDescription = document.createElement('p');
        product.description ? productDescription.innerText = product.description : productDescription.innerText = 'This item does not have a description';
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productDescription);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', "./icons/bt_add_to_cart.svg");
        productImgCard.addEventListener('click', addToCart);
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard); 
    }
};

function renderProduct() {
    let thisCard = upTo(this, 'div');

    let productImg = productDetailInd.getElementsByTagName('img')[1];
    productImg.setAttribute('src', this.src);
    
    let productName = productDetailInd.getElementsByTagName('p')[0];
    productName.innerText = thisCard.querySelectorAll('.product-info div p')[0].innerText;
    // console.log(thisCard.querySelector('.product-info div p').innerText);
    let productPrice = productDetailInd.getElementsByTagName('p')[1];
    productPrice.innerText = thisCard.querySelectorAll('.product-info div p')[1].innerText;
    let productDescription = productDetailInd.getElementsByTagName('p')[2];
    productDescription.innerText = thisCard.querySelectorAll('.product-info div p')[2].innerText;

    let addToCartButton = document.querySelector('.add-to-cart-button');
    addToCartButton.addEventListener('click', addToCart);

    // <div class="product-detail-close">
    //   <img src="./icons/icon_close.png" alt="close">
    // </div>
    // <img alt="nada">
    // <div class="product-info">
    //   <p></p>
    //   <p></p>
    //   <p></p>
    //   <button class="primary-button add-to-cart-button">
    //     <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    //     Add to cart
    //   </button>
    // </div>
}

renderProducts(productList);
showArticle()
