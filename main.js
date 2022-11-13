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


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAsai);

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

function closeProductDetailAsai() {
    productDetailInd.classList.add('inactive');
}

function addToCart () {
    console.log(addToCartImage.closest(".product-info"));
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

function addArticleToCart() {
    for (child of cardsContainer.children) {
        let imgOfCard = document.querySelector('#' + child.id + ' img')
         imgOfCard.addEventListener('click', function logParent() {console.log(upTo(imgOfCard, 'div'))});
        //console.log('#' + child.id + ' img')
    };
};



const productList = [
        {
            name: "Gafas de marco negro",
            price: 25,
            image: "https://images.pexels.com/photos/131018/pexels-photo-131018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "Gafas de marco marrón",
            price: 30,
            image: "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "Diferentes tipos de gafas",
            price: 20,
            image: "https://images.pexels.com/photos/4226880/pexels-photo-4226880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "Zapatos elegantes",
            price: 120,
            image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "Zapatos converse",
            price: 200,
            image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "Tacones",
            price: 150,
            image: "https://images.pexels.com/photos/134064/pexels-photo-134064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "Cámara canon con tripode",
            price:400,
            image: "https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            name: "Accesorios para cámara",
            price: 200,
            image: "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

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
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard); 
    }
};

renderProducts(productList);
addArticleToCart()

carList = [];



// No sé si hay alguna solución para no tener que definir esta variable abajo
const addToCartImages = document.querySelectorAll('.product-info figure img');
for (addToCartImage of addToCartImages) {
    addToCartImage.addEventListener('click', addToCart);
};