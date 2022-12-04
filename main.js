const navbarEmail= document.querySelector('.navbar-email');
const menuSigOut = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menucarritoIcon = document.querySelector('.navbar-shopping-cart');
const productdetail = document.querySelector('#shoppingCardContainer');

const productDetailContainer =document.querySelector('#productDetail');
const productDetailCloseIocn =document.querySelector('.product-detail-close');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menucarritoIcon.addEventListener('click',toggleCarritoMenu);

productDetailCloseIocn.addEventListener('click',() => {
    productDetailContainer.classList.add('inactive'); 
    closeMenus();   
});

function closeMenus(exception) {
    const menus =document.querySelectorAll('.redMenu');
    for (const item of menus) {
        if (!item.classList.contains('inactive')){
            item.classList.add('inactive');
        }
    }
    document.querySelector('#fondo').classList.add('inactive');
    
}

function toggleCarritoMenu() {
    const estado= productdetail.classList.contains('inactive');

    closeMenus();
    
    if (estado) {
        productdetail.classList.remove('inactive');    
    }else{
        productdetail.classList.add('inactive');    
    }
    
}

function toggleMobileMenu() {
    const asidemenu= productdetail.classList.contains('inactive');
    
    if (!asidemenu) {
        productdetail.classList.add('inactive');    
    }
    mobileMenu.classList.toggle('inactive');    
}

function toggleDesktopMenu()
{
    const estado= menuSigOut.classList.contains('inactive');
    closeMenus();
    
    if (estado) {
        menuSigOut.classList.remove('inactive');    
    }else{
        menuSigOut.classList.add('inactive');    
    }
    
}

const producsList=[];
producsList.push({
    name:'Neon Sign 1',
    precio:120,
    img: 'https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
producsList.push({
    name:'Neon Sign 2',
    precio:350,
    img: 'https://images.pexels.com/photos/1537875/pexels-photo-1537875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
producsList.push({
    name:'Neon Sign 3',
    precio:250,
    img: 'https://images.pexels.com/photos/2915965/pexels-photo-2915965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
producsList.push({
    name:'Neon Sign 3',
    precio:250,
    img: 'https://images.pexels.com/photos/1749901/pexels-photo-1749901.jpeg?auto=compress&cs=tinysrgb&w=1600'
});
producsList.push({
    name:'Neon Sign 3',
    precio:250,
    img: 'https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
producsList.push({
    name:'Neon Sign 3',
    precio:250,
    img: 'https://images.pexels.com/photos/3186010/pexels-photo-3186010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

producsList.push({
    name:'Neon Sign 3',
    precio:250,
    img: 'https://images.pexels.com/photos/3186010/pexels-photo-3186010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

producsList.push({
    name:'Neon Sign 3',
    precio:250,
    img: 'https://images.pexels.com/photos/3186010/pexels-photo-3186010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

producsList.push({
    name:'Neon Sign 3',
    precio:250,
    img: 'https://images.pexels.com/photos/3186010/pexels-photo-3186010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

producsList.push({
    name:'Neon Sign 3',
    precio:250,
    img: 'https://images.pexels.com/photos/3186010/pexels-photo-3186010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr) {
    for(product of arr){
        const producCard = document.createElement('div');
        const imgProduct = document.createElement('img');
        const DivproductInfo = document.createElement('div');
        const subDivproductInfo =document.createElement('div');
        const precioP = document.createElement('p');
        const nombreP = document.createElement('p');
        const figureImg = document.createElement('figure');
        const Imgbutton =document.createElement('img');
        producCard.classList.add('product-card');
        DivproductInfo.classList.add('product-info');
        imgProduct.src = product.img;
        imgProduct.addEventListener('click', () =>{
            closeMenus();
            productDetailContainer.classList.remove('inactive');
            document.querySelector('#fondo').classList.toggle('inactive');
        });
        producCard.append(imgProduct);
        
        precioP.innerText= product.precio;
        nombreP.innerText= product.name;
    
        subDivproductInfo.append(precioP);
        subDivproductInfo.append(nombreP);
    
        DivproductInfo.append(subDivproductInfo);
    
        Imgbutton.src='./icons/bt_add_to_cart.svg';
    
        figureImg.append(Imgbutton);
        DivproductInfo.append(figureImg);
    
        producCard.append(DivproductInfo);

        document.querySelector('.cards-container').append(producCard);
        
    }
}

renderProducts(producsList);