const desktopMenu = document.getElementById("desktopMenu");
const navbarRight = document.querySelector("#navbarRight .navbar-email");
const navbarCart  = document.querySelector("#navbarRight .navbar-shopping-cart");
const menuBtn     = document.getElementById("menuBtn");
const detailCart  = document.getElementById("detailCart");
const mobileMenu  = document.getElementById("mobileMenu");

function menuVerticalAnimation(menu,closeMenu=null,toggle=true) 
{
    const state  = menu.classList.contains('display-none');

    // console.log(menu.classList)
    // console.log(toggle)
    
    if(!state)
    {
        //Esconder el menú - Hide menu

        menu.classList.remove("menu-animation");
        menu.classList.add("menu-animation-reverse");

        setTimeout(()=>{
            menu.classList.add("display-none")
        },300);
        // console.log("Si")
    }
    else if(toggle)
    {
        //Mostrar el menú - Show menu

        // console.log("No")
        menu.classList.add("menu-animation");
        menu.classList.remove("menu-animation-reverse");
        menu.classList.remove("display-none")
    }

    if(toggle && closeMenu)
    {
        //Cerrar uno u otros menús - Hide one or many menus

        if(Array.isArray(closeMenu))
        {
            for(const m of closeMenu)
            {
                menuVerticalAnimation(m,null,toggle=false);
            }
        }
        else
        {
            menuVerticalAnimation(closeMenu,null,toggle=false);
        }
    }

}

function addProduct(parentElementID,data={price:120,name:"bike"})
{
    const parent = document.getElementById(parentElementID);

    const imgURL  = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const imgCart = "./icons/bt_add_to_cart.svg";

    let container   = document.createElement('div');
    let productInfo = document.createElement('div');
    let info        = document.createElement('div');
    let figure      = document.createElement('figure');

    let price      = document.createElement('p');
    let name       = document.createElement('p');

    let img  = document.createElement('img');
    let cart  = document.createElement('img');

    img.setAttribute("src",imgURL);
    cart.setAttribute("src",imgCart);

    container.classList.add("product-card");
    productInfo.classList.add("product-info");

    info.appendChild(price);
    info.appendChild(name);

    price.textContent = "$"+ data.price.toFixed(2);
    name.textContent  = data.name;

    figure.appendChild(cart);

    productInfo.appendChild(info);
    productInfo.appendChild(figure);

    container.appendChild(img);
    container.appendChild(productInfo);

    parent.appendChild(container);

}

for (let index = 0; index < 9; index++) 
{   
    addProduct("productList");  
}

navbarRight.addEventListener("click",()=>{
    
    menuVerticalAnimation(desktopMenu,detailCart);

})

navbarCart.addEventListener("click",()=>{
    
    menuVerticalAnimation(detailCart,[desktopMenu,mobileMenu]);

})

menuBtn.addEventListener("click",()=>{
    
    menuVerticalAnimation(mobileMenu,detailCart);

})