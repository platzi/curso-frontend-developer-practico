var navbar_email =document.getElementById("navbar-email");
var menu1=document.getElementById("menu1");
var shopingCar =document.getElementById("navbar-shopping-cart");
var detail =document.getElementById("product-detail");
var icon_menu =document.getElementById("icon_menu");
var contenedor =document.getElementById("contenedorLista");

navbar_email.addEventListener("click",desplegar);


function desplegar(e){
    const detailOpen = detail.classList.contains("toggleActive");
    if(e.target){
        menu1.classList.toggle("desaparece");  
        if(detailOpen){
            detail.classList.remove("toggleActive")
        } 
    }
}

//controlador del menu mobile



icon_menu.addEventListener("click",aparece);
function aparece(e){
    
    const detailOpen = detail.classList.contains("toggleActive");
    if(e.target){
        contenedor.classList.toggle("appear")
        if(detailOpen){
            detail.classList.remove("toggleActive")
        }
        
    }
}


//menu de my orders



 
shopingCar.addEventListener("click",desplegarShopingcar);

function desplegarShopingcar(e){
    const contenedorOpen= contenedor.classList.contains("appear");
    const menu1Open = menu1.classList.contains("desaparece")
    if(e.target){
        detail.classList.toggle("toggleActive")
        if(contenedorOpen || menu1Open){
            contenedor.classList.remove("appear")
            menu1.classList.remove("desaparece")
        }
    }
    
}

// creando objetos de los articulos 

function articulos (name, price, img){
    this.name=name,
    this.price=price,
    this.img=img
}
var listaObjetos=[]


var smarTv= new articulos("smart tv", "1000usd", "https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" );
var bici= new articulos("bici","500usd","https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
var mouse= new articulos("portatil","2000usd","https://images.pexels.com/photos/8576162/pexels-photo-8576162.jpeg?cs=srgb&dl=pexels-fox-8576162.jpg&fm=jpg");
var smartPhone= new articulos("smartPhone","900usd","https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
var appleWatch= new articulos("appleWatch","400usd","https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
var plancha= new articulos("plancha","200usd","https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

listaObjetos.push(smarTv,bici,mouse,smartPhone,appleWatch,plancha);


    function renderizarProductos(arr){
        for(objeto of arr){
       
            var cards_container=document.getElementById("cards-container");
            
    
             var product_card=document.createElement("div");
             product_card.classList.add("product-card");
             
             var imagen=document.createElement("img");
             imagen.setAttribute("src", objeto.img); 
             
    
             var product_info=document.createElement("div");
             product_info.classList.add("product-info");
    
    
             //etiquetasP creado...
             var estiquetasP=document.createElement("div");
             estiquetasP.classList.add("estiquetasP");
             
             var textPrice=document.createElement("p");
             var textName=document.createElement("p");
             textPrice.textContent="$"+ objeto.price;
             textName.textContent=objeto.name;
    
             estiquetasP.appendChild(textPrice);
             estiquetasP.appendChild(textName);
         //..................................
    
             var figure=document.createElement("figure")
             var imgFigure=document.createElement("img");
             imgFigure.setAttribute("src","./icons/bt_add_to_cart.svg");
             figure.appendChild(imgFigure);
    
             cards_container.appendChild(product_card);
             product_card.appendChild(imagen);
             product_card.appendChild(product_info);
             product_info.appendChild(estiquetasP);
             product_info.appendChild(figure);
    
       }
    }
    
    renderizarProductos(listaObjetos);






