//Codigo de JS para unir Proyecto de HTML y CSS - Curso Practico Frontend
const navEmail= document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const cardContainer = document.querySelector('.cards-container');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleAsideMenu);

function toggleDesktopMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideMenu() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

/* <div class="product-card">
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

// Code to generate HTML estructured cards with JS (dynamic layout of DOM) 

const productList =[]; //Construir
productList.push({
    name: 'Bike',
    price: "120,00",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bag',
    price: "20,00",
    image: "https://www.catfootwear.com.pk/cdn/shop/products/PeoriaUniSchoolBag20L.jpg?v=1678220236"
}
);
productList.push({
    name: 'Computer',
    price: "630,00",
    image: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
});
productList.push({
    name: 'Bike',
    price: "120,00",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bag',
    price: "20,00",
    image: "https://www.catfootwear.com.pk/cdn/shop/products/PeoriaUniSchoolBag20L.jpg?v=1678220236"
}
);
productList.push({
    name: 'Computer',
    price: "630,00",
    image: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
});


for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    cardContainer.append(productCard);

    const image = document.createElement('img');
    image.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    productCard.append(image,productInfo);

    const productDiv = document.createElement('div');
    const productPrice= document.createElement('p');
    productPrice.innerText="$ "+product.price;
    const productName=document.createElement('p');
    productName.innerText=product.name;

    productDiv.append(productPrice,productName);

    const productFigure = document.createElement('figure');
    const iconImage= document.createElement('img');
    iconImage.setAttribute('src','./icons/bt_add_to_cart.svg');

    productFigure.append(iconImage);
    productInfo.append(productDiv,productFigure);
    
}
