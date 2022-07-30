const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('#shoppingCartContainer')
const productoG = document.querySelector('.cards-container')


menuEmail.addEventListener('click', showMenuUser);
menuHamIcon.addEventListener('click', showMenuMobile);
menuCarritoIcon.addEventListener('click', showMenuCarrito);

function showMenuUser() {
    desktopMenu.classList.toggle('inactive')
}

function showMenuMobile() {
    mobileMenu.classList.toggle('inactive')
}

function showMenuCarrito(){
    productDetail.classList.toggle('inactive')
}

const productList=[];
productList.push({
    name: 'Tesla S',
    price: '$ 8000.00',
    ima: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD',
});

productList.push({
    name: 'Tesla X',
    price: '$ 8000.00',
    ima: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD',
});

productList.push({
    name: 'Tesla Cybertruck',
    price: '$ 8000.00',
    ima: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop',
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

for(producto of productList){
    const classProduc = document.createElement('div');
    classProduc.classList.add('product-card');
    const img = document.createElement('img');
    img.setAttribute('src', producto.ima);
    const classinfo = document.createElement('div');
    classinfo.classList.add('product-info');

    const vacio = document.createElement('div');
    const precio = document.createElement('p');
    precio.innerText = producto.price;
    const names = document.createElement('p');
    names.innerText = producto.name;

    vacio.appendChild(precio)
    vacio.appendChild(names)

    const figura = document.createElement('figure');
    const img2 = document.createElement('img');
    img2.setAttribute('src', './icons/bt_add_to_cart.svg');

    figura.appendChild(img2);

    classinfo.appendChild(vacio);
    classinfo.appendChild(figura);

    classProduc.appendChild(img);
    classProduc.appendChild(classinfo);

    productoG.appendChild(classProduc);

}