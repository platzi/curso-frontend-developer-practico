//FUNCIONES CREADAS
const showProductsOnScreen= (lista)=>{ //crea los productos en el menu
    
    lista.forEach(product => {
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');

        productCard.addEventListener('click',()=>{
            openProductInfo(product);
            closeMenu(cartMenu);
            closeMenu(menuEmail);
            closeMenu(menuBurger);

        })

        const image = document.createElement('img');
        image.src= product.img;
        
        const infoProduct = document.createElement('div');
        infoProduct.classList.add('product-info');
        
        const div = document.createElement('div');
        const infoPrice = document.createElement('p');
        infoPrice.innerHTML = '$'+ product.price;
        
        const infoName = document.createElement('p');
        infoName.innerHTML= product.name;
        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.src= "./icons/bt_add_to_cart.svg";
        
        
        //AGREGAR HTML
        div.appendChild(infoPrice);
        div.appendChild(infoName);
        figure.appendChild(figureImg);
        infoProduct.appendChild(div);
        infoProduct.appendChild(figure);
        productCard.appendChild(image);
        productCard.appendChild(infoProduct);
        cardsContainer.appendChild(productCard);
        mainContainer.appendChild(cardsContainer);
        
    });
}
const showMenu = (navComp)=>{  // mostrar los menu
    navComp.classList.toggle('inactive');
}

const closeMenu = (menu1)=>{ //cerrar los menu
    isMenuOpen1 = !menu1.classList.contains('inactive');
    if(isMenuOpen1){
        menu1.classList.add('inactive');
    }
}

const openProductInfo = (product)=>{ //muestra el aside con la info del producto seleccionado
        aside.classList.remove('inactive');
        productImg.setAttribute('src',product.img);
        productPrice.textContent= product.price;
        productName.textContent= product.name;

}

//LLAMADA DE FUNCIONES
showProductsOnScreen(productList);



