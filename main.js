const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const logoDeMenu = document.querySelector(".logoMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoDecompras = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")

navbarEmail.addEventListener('click', toggleDesktopMenu);
logoDeMenu.addEventListener('click', toggleMobileMenu);
carritoDecompras.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {
    navbarEmail.classList.add('ínactive')
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 200,
    image: "https://cdn.shopify.com/s/files/1/0604/4637/6123/products/negrorojo_da3808c2-8e88-4f5b-a666-f6c16f31cffc_720x.jpg?v=1636735417"
});

productList.push({
    name: 'Laptop',
    price: 1000,
    image: "https://m.media-amazon.com/images/I/81U9aJnFu6L._SY450_.jpg",
});

productList.push({
    name: 'Televisor',
    price: 1500,
    image: "https://exitocol.vtexassets.com/arquivos/ids/16228288-800-auto?v=638089800064470000&width=800&height=auto&aspect=true",
});

productList.push({
    name: 'Parlante Kalley',
    price: 400,
    image: "https://www.alkosto.com/medias/7705946869812-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w5Mjk2MHxpbWFnZS9qcGVnfGltYWdlcy9oYWUvaDQ3LzExNTI0MzQ2NDQ1ODU0LmpwZ3wwNTFkMWNlNzRjMDg2NDU5NThkZTE0OWE1ZmIzMDcyYmI0ZTcyOGQzYjdkMGYwYzZkYjg4ZDE2MmY1YTdlM2U4",
});

productList.push({
    name: 'TelevisorTV SAMSUNG 60" Pulgadas 152.4 cm 60BU8000 4K-UHD LED Smart TV',
    price: 1500,
    image: "https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-8806094043297-001.jpg?context=bWFzdGVyfGltYWdlc3wzNjU5ODN8aW1hZ2UvanBlZ3xoZmMvaGUyLzEzNTg3ODA0OTc5MjMwLzc1MFd4NzUwSF9tYXN0ZXIvaG90Zm9sZGVyL3RyYW5zZmVyL2luY29taW5nL2RlcG9zaXQvaHlicmlzLWludGVyZmFjZXMvSU4vbWVkaWEvcHJvZHVjdC84ODA2MDk0MDQzMjk3XzAwMS5qcGd8ZWI5MzdkNzczMWVkY2E2NGNlMzZkYmNkYjU2NmQyYjk2YTVkNWMyODIxNTdhZDVkZTg5NmE5NTcwNGZiZDA4NQ",
});

productList.push({
    name: 'Lavadora SAMSUNG Carga Superior 20KG WA20B3553GY/CO Gris',
    price: 2000,
    image: "https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-8806094550337-001.jpg?context=bWFzdGVyfGltYWdlc3w3NDMwM3xpbWFnZS9qcGVnfGhjMC9oNTIvMTM3MzU5MTA4NjY5NzQvNzUwV3g3NTBIX21hc3Rlci9ob3Rmb2xkZXIvdHJhbnNmZXIvaW5jb21pbmcvZGVwb3NpdC9oeWJyaXMtaW50ZXJmYWNlcy9JTi9tZWRpYS9wcm9kdWN0Lzg4MDYwOTQ1NTAzMzdfMDAxLmpwZ3xhZDBkOTAzNjEyNGM1NTIwNzU1ZDg4ZmQwNzkzY2I2ZDE4ODdlNmVkOTM3ZGQ2NjliMTNiYTJiZmJmMWM0ZTQ2",
});

productList.push({
    name: 'Nevera MABE No Frost Congelador Superior 297 Litros RMA305FYCT Gris',
    price: 2000,
    image: "https://www.alkosto.com/medias/7704712606781-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyOTE0OXxpbWFnZS9qcGVnfGltYWdlcy9oZTcvaGY2LzEwNzU4MzY0MTM1NDU0LmpwZ3w1NGM2ODVjN2VkNzgwNjU3OGFjZmQwNGIxNzdhYzFmZDY4ZWJhMGRjOTI1ZmIxMDYxN2RmNzFjY2NhNjg0MWY0",
});

productList.push({
    name: 'Computador Portátil HP Pavilion 15.6" Pulgadas eg0501la Intel Core i5 - RAM 8GB - Disco SSD 512 GB - Plateado',
    price: 4000,
    image: "https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196786416804-001.jpg?context=bWFzdGVyfGltYWdlc3wyMTQyMjh8aW1hZ2UvanBlZ3xoM2IvaDJmLzEzNTIxMTAzMDkzNzkwLzc1MFd4NzUwSF9tYXN0ZXIvaG90Zm9sZGVyL3RyYW5zZmVyL2luY29taW5nL2RlcG9zaXQvaHlicmlzLWludGVyZmFjZXMvSU4vbWVkaWEvcHJvZHVjdC8xOTY3ODY0MTY4MDRfMDAxLmpwZ3xlNGVjNjMyNGMzMjRmODQzMDExYTJhOWFlZGU0NmUyYThmNDgxYmYyMjAwMDA1NmYzZjUzNWI4ZjZjN2MyOTY5",
});

productList.push({
    name: 'iPhone 11 128 GB "Blanco',
    price: 500,
    image: "https://www.alkosto.com/medias/194252099407-002-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzIxMTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGM4L2gxNi8xMDA1NjU5OTY2NjcxOC5qcGd8MmQwZjIwNjkwMWE4OTNiMTk4NDQ5ODZjZWJlNGVmYmY0M2FkMDQ5MzhkNWU0MThiODg1MGRjOGJjN2MyYjQ3ZA",
});

function renderProduct(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        productInfoFigure.appendChild(productImgCart);
    
        cardsContainer.appendChild(productCard)
    
    
    }
};

renderProduct(productList);
