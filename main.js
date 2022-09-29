const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuhamicon = document.querySelector(".menuhamicon");
const movileleftMenu = document.querySelector(".mobile-menu");
const menucharticon = document.querySelector(".navbar-shopping-cart");
const chartmenu = document.querySelector(".product-detail");
const cardscontainer=document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuhamicon.addEventListener("click", togglmovileMenu);
menucharticon.addEventListener("click", togglchartmenu);


function toggleDesktopMenu() {
	desktopMenu.classList.toggle("inactive");

}

function togglmovileMenu() {
	movileleftMenu.classList.toggle("inactive");

	if (chartmenu.classList.contains("inactive")){
	}
	else{
		chartmenu.classList.toggle("inactive");
	}
}
function togglchartmenu() {
	chartmenu.classList.toggle("inactive");
	if (movileleftMenu.classList.contains("inactive")){
	}
	else{
		movileleftMenu.classList.toggle("inactive");
	}
}


//--Creacion array del producto---

const productlist=[];
productlist.push({
name: "bike",
price: 120,
image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
	name: "Computador",
	price: 350,
	image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productlist.push({
	name: "Televisor",
	price: 200,
	image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


//  <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//  </div>
//---Se crea por codigo la misma estructura HTML---


function renderproductos(arr){

 
for (producto of productlist){
	const productcard=document.createElement("div");
	productcard.classList.add("product-card");
	const imgarticle=document.createElement("img");
	imgarticle.setAttribute("src", producto.image);
	
	cardscontainer.appendChild(productcard);
	productcard.appendChild(imgarticle);

	const productinfo=document.createElement("div");
	productinfo.classList.add("product-info");

	productcard.appendChild(productinfo);

	const productinfodiv=document.createElement("div");
	const productprice=document.createElement("p");
	productprice.innerText="$" + producto.price;
	const productname=document.createElement("p");
	productname.innerText="$" + producto.name;

	productinfodiv.appendChild(productprice);
	productinfodiv.appendChild(productname);
	productinfo.appendChild(productinfodiv);
	
	const productfigure =document.createElement("figure");
	const imgchart=document.createElement("img");
	imgchart.setAttribute("src", "./icons/bt_add_to_cart.svg");

	productfigure.appendChild(imgchart);
	productinfo.appendChild(productfigure);

}
}
renderproductos(productlist);