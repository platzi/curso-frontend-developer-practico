
const menuEmail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")

const MenuBurger = document.querySelector(".menuBurger")
const mobileMenu = document.querySelector(".mobile-menu")

const menuCarrito = document.querySelector(".navbar-shopping-cart")
const menuMyorder = document.querySelector("#shoppingCartContainer")

const cardsContainer = document.querySelector(".cards-container")

const detalles = document.querySelector("#productDetail")
const detallesPicture = document.querySelector(".cards-container")
const cerrardetalles = document.querySelector(".close")



const imagenDetalle = document.querySelector("#imageDetalle")
const precioDetalle = document.querySelector("#precio")
const nameDetalle = document.querySelector("#nameProduct")
const DetalleInfo = document.querySelector("#detalleInfo")


menuEmail.addEventListener('click', correoMenu)
function correoMenu() {
    DesktopMenu.classList.toggle('inactive')

    detalles.classList.add('inactive')
    menuMyorder.classList.add("inactive")

}

MenuBurger.addEventListener("click", toogleMobile)
function toogleMobile() {

    mobileMenu.classList.toggle("inactive")

    menuMyorder.classList.add("inactive");
    detalles.classList.add('inactive')


}

menuCarrito.addEventListener('click', toogleMyOrder)
function toogleMyOrder() {
    menuMyorder.classList.toggle("inactive")

    mobileMenu.classList.add("inactive")
    detalles.classList.add('inactive')
    DesktopMenu.classList.add('inactive')


}


const productList = [];

productList.push({
    name: "higado",
    price: 120,
    image: "https://images.pexels.com/photos/8272928/pexels-photo-8272928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: "El hígado es un órgano del cuerpo humano que se encuentra en la parte superior derecha del abdomen y es de color marrón oscuro. Tiene múltiples funciones importantes, como procesar los nutrientes de los alimentos, almacenar energía, producir bilis para la digestión y filtrar la sangre para eliminar sustancias tóxicas y desechos del cuerpo.",
});

productList.push({
    name: "Pulmones",
    info: "Los pulmones son órganos del sistema respiratorio que se encuentran dentro del tórax, en la cavidad torácica. La función principal de los pulmones es la respiración, es decir, permiten la entrada de aire rico en oxígeno y la eliminación de dióxido de carbono y otros gases residuales del cuerpo",
    price: 100000,
    image:
        "https://imgs.search.brave.com/dh_Mjj5R_AIHMtR5BhT3_FsN5DdckfpmwqInba19GQU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bHVuZ3NhbmR5b3Uu/Y29tL3N0YXRpYy9p/bWFnZXMvcHJvZ3Jl/c3Npb24vbm9ybWFs/LWx1bmdzLmpwZw",
});

productList.push({
    info: "El riñón es un órgano en forma de frijol que se encuentra en la parte inferior de la caja torácica. Es responsable de filtrar la sangre para eliminar los desechos y el exceso de líquido del cuerpo. Los riñones también mantienen el equilibrio de electrolitos, la presión arterial y la producción de glóbulos rojos. Además, producen una hormona llamada eritropoyetina que estimula la producción de glóbulos rojos en la médula ósea.",
    name: "Riñones",
    price: 1220,
    image:
        "https://e7.pngegg.com/pngimages/779/986/png-clipart-kidney-kidney-failure-membranoproliferative-glomerulonephritis-minimal-change-disease-membranous-glomerulonephritis-kidney-miscellaneous-hand.png",
});

productList.push({
    info: "El corazón es un órgano muscular que se encuentra en el pecho y que se encarga de bombear la sangre a través del sistema circulatorio del cuerpo. Es esencial para el suministro de oxígeno y nutrientes a los tejidos y órganos del cuerpo, y para eliminar los productos de desecho y dióxido de carbono del cuerpo.",
    name: "Corazon",
    price: 123456,
    image:
        "https://imgs.search.brave.com/Z3PoQVmWJ_40IDszsejme7GleijpmUKzXLjOuSpATXw/rs:fit:840:784:1/g:ce/aHR0cHM6Ly93d3cu/Y2xpcGFydG1heC5j/b20vcG5nL21pZGRs/ZS8yMDctMjA3Nzky/N19odW1hbi1oZWFy/dC1jbGlwYXJ0LXBu/Zy1yZWFsLWhlYXJ0/LWRyYXdpbmcucG5n",
});
productList.push({
    name: "higado",
    price: 120,
    image: "https://images.pexels.com/photos/8272928/pexels-photo-8272928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: "El hígado es un órgano del cuerpo humano que se encuentra en la parte superior derecha del abdomen y es de color marrón oscuro. Tiene múltiples funciones importantes, como procesar los nutrientes de los alimentos, almacenar energía, producir bilis para la digestión y filtrar la sangre para eliminar sustancias tóxicas y desechos del cuerpo.",
});

productList.push({
    name: "Pulmones",
    info: "Los pulmones son órganos del sistema respiratorio que se encuentran dentro del tórax, en la cavidad torácica. La función principal de los pulmones es la respiración, es decir, permiten la entrada de aire rico en oxígeno y la eliminación de dióxido de carbono y otros gases residuales del cuerpo",
    price: 100000,
    image:
        "https://imgs.search.brave.com/dh_Mjj5R_AIHMtR5BhT3_FsN5DdckfpmwqInba19GQU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bHVuZ3NhbmR5b3Uu/Y29tL3N0YXRpYy9p/bWFnZXMvcHJvZ3Jl/c3Npb24vbm9ybWFs/LWx1bmdzLmpwZw",
});

productList.push({
    info: "El riñón es un órgano en forma de frijol que se encuentra en la parte inferior de la caja torácica. Es responsable de filtrar la sangre para eliminar los desechos y el exceso de líquido del cuerpo. Los riñones también mantienen el equilibrio de electrolitos, la presión arterial y la producción de glóbulos rojos. Además, producen una hormona llamada eritropoyetina que estimula la producción de glóbulos rojos en la médula ósea.",
    name: "Riñones",
    price: 1220,
    image:
        "https://e7.pngegg.com/pngimages/779/986/png-clipart-kidney-kidney-failure-membranoproliferative-glomerulonephritis-minimal-change-disease-membranous-glomerulonephritis-kidney-miscellaneous-hand.png",
});

productList.push({
    info: "El corazón es un órgano muscular que se encuentra en el pecho y que se encarga de bombear la sangre a través del sistema circulatorio del cuerpo. Es esencial para el suministro de oxígeno y nutrientes a los tejidos y órganos del cuerpo, y para eliminar los productos de desecho y dióxido de carbono del cuerpo.",
    name: "Corazon",
    price: 123456,
    image:
        "https://imgs.search.brave.com/Z3PoQVmWJ_40IDszsejme7GleijpmUKzXLjOuSpATXw/rs:fit:840:784:1/g:ce/aHR0cHM6Ly93d3cu/Y2xpcGFydG1heC5j/b20vcG5nL21pZGRs/ZS8yMDctMjA3Nzky/N19odW1hbi1oZWFy/dC1jbGlwYXJ0LXBu/Zy1yZWFsLWhlYXJ0/LWRyYXdpbmcucG5n",
});

renderProducts(productList);

// const cardsContainer = document.querySelector(".cards-container");
function cerrar() {
    detalles.classList.toggle('inactive')
    // cerrardetalles.toggle('inactive')
    menuMyorder.classList.add("inactive");
    // console.log(product.image);

}


function renderProducts(arr) {

    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
        <img class="imagenDetalle" src="${product.image}" alt="" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}" data-info="${product.info}" ">
        <div class="product-info">
            <div>
                <p>$ ${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    `;

        productCard.querySelector('.imagenDetalle').addEventListener('click', () => {
            const name = productCard.querySelector('.imagenDetalle').getAttribute('data-name');
            const price = productCard.querySelector('.imagenDetalle').getAttribute('data-price');
            const image = productCard.querySelector('.imagenDetalle').getAttribute('data-image');
            const info = productCard.querySelector('.imagenDetalle').getAttribute('data-info');

            cerrardetalles.addEventListener("click", cerrar);

            //   console.log(image);

            precioDetalle.innerHTML = price
            nameDetalle.innerHTML = name
            DetalleInfo.innerHTML = info

            detalles.classList.toggle('inactive')
            menuMyorder.classList.add("inactive");
            //cambia la imagen
            imagenDetalle.src = image
        });

        cardsContainer.appendChild(productCard);
        // productCard.addEventListener('click', mostrarDetallesProducto);
    }
}







