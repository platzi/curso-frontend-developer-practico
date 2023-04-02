const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const countItems = document.querySelector('#countItems');
const totalItems = document.querySelector('#totalItems');
let count=0;
const myOrdersContainer = document.querySelector('.my-order-content');
window.onload = () => {
    API();
}

function API(){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results.then(response => response.json())
    .then(data => {
        const cardsContenedor = document.querySelector('.cards-container');
        for (let i = 0; i < data['results'].length; i++) {
            cardsContenedor.innerHTML+=`<div class="product-card">
            <button href="product-detail" style="margin: 0; padding: 0;"><img src="${data['results'][i].image}" alt="" onclick="openProductDetailAside('${data['results'][i].image}', '${data['results'][i].name}', '${data['results'][i]['origin'].name}' ,'${data['results'][i].gender}','${data['results'][i].species}', '${data['results'][i].status}', '${data['results'][i]['location'].name}')"></button>
            <div class="product-info">
            <div>
                <p>${data['results'][i].name}</p>
                <p>${data['results'][i]['origin'].name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" onclick="addToCart('${data['results'][i].image}','${data['results'][i].name}', '${data['results'][i]['origin'].name}')">
            </figure>
            </div>
        </div>`;   
    }    
    });
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleShoppingCartContainer);


function toggleDesktopMenu(){
    if (shoppingCartContainer.classList.contains('inactive') && desktopMenu.classList.contains('inactive') && productDetailContainer.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }else{
        mobileMenu.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');
        desktopMenu.classList.toggle('inactive');
        closeProductDetailAside();
    }
}

function toggleMobileMenu(){
    if (shoppingCartContainer.classList.contains('inactive') && desktopMenu.classList.contains('inactive') && productDetailContainer.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }else{
        desktopMenu.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');
        mobileMenu.classList.toggle('inactive');
        closeProductDetailAside();
    }
}

function toggleShoppingCartContainer(){
    if (mobileMenu.classList.contains('inactive') && desktopMenu.classList.contains('inactive') && productDetailContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.toggle('inactive');
    }else{
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        shoppingCartContainer.classList.toggle('inactive');
        closeProductDetailAside();
    }
}

function openProductDetailAside(image, name, origin, gender, species, status, location){
    productDetailContainer.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.innerHTML=`<div class="product-detail-close" onclick="closeProductDetailAside()">
                <img src="./icons/icon_close.png" alt="close">
            </div>
            <img src="${image}" alt="">
            <div class="product-info">
                <p>${name}</p>
                <p>${origin}</p>
                <p>Gender: ${gender} <br>
                Specie: ${species} <br>
                Status: ${status} <br>
                Location: ${location}
                </p>
                <button class="primary-button add-to-cart-button" onclick="addToCart('${image}','${name}','${origin}')">
                <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                Add to cart
                </button>
            </div>`
    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');

}

function addToCart(image, name, origin){
    count +=1;
    countItems.innerText=count;
    totalItems.innerText=count;
    countItems.classList.remove('inactive');
    Swal.fire({
        title: "Added!",
        text: "Added to cart!",
        icon: "success",
        button: "Great!",
        showConfirmButton: false,
	    timer: 2000,
	    timerProgressBar: true
      })
    myOrdersContainer.innerHTML+=`<div id="div_${count}" class="shopping-cart">
    <figure>
      <img src="${image}" alt="bike">
    </figure>
    <p>${origin}</p>
    <p>${name}</p>
    <img src="./icons/icon_close.png" alt="close" class="rmToCart" onclick="rmToCart('${count}')">
  </div>`

}

function rmToCart(id){
    Swal.fire({
        title: 'Are you sure?',
        text: "The item will be removed from cart!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ACD9B2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Deleted from cart',
            'success'
          )
        count-=1;
        countItems.innerText=count;
        totalItems.innerText=count;
        const div_eliminar = document.getElementById('div_'+id);
        div_eliminar.remove();
        if(count==0){
        countItems.classList.add('inactive');
        }
        }
      })
}




