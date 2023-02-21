const menuemail = document.querySelector(`.navbar-email`);
const menuhamicon = document.querySelector(`.menu`);
const menucarritoicon = document.querySelector(`.navbar-shopping-cart`);

const productDetailCloseIcon = document.querySelector(`.product-detail-close`);

const desktopmenu = document.querySelector(`.desktop-menu`);
const mobilemenu = document.querySelector(`.mobile-menu`);
const shoppingcartcontainer = document.querySelector(`#shoppingcartcontainer`);

const productdetailcontainer = document.querySelector(`#productdetail`);

const cardscontainer = document.querySelector(`.cards-container`);
//.....

menuemail.addEventListener(`click`, toggledesktopmanu);
menuhamicon.addEventListener(`click`, togglemobilemenu);
menucarritoicon.addEventListener(`click`, togglecarritoaside);
productDetailCloseIcon.addEventListener(`click`, closeProductDetailAside);

//....
function toggledesktopmanu() {
  const isasideclosed = shoppingcartcontainer.classList.contains(`inactive`);

  if (!isasideclosed) {
    shoppingcartcontainer.classList.add(`inactive`);
  }

  desktopmenu.classList.toggle(`inactive`);
}
function togglemobilemenu() {
  mobilemenu.classList.toggle(`inactive`);

  const isasideclosed = shoppingcartcontainer.classList.contains(`inactive`);

  if (!isasideclosed) {
    shoppingcartcontainer.classList.add(`inactive`);
  }
  closeProductDetailAside();
}

function togglecarritoaside() {
  const ismobilemenuclosed = mobilemenu.classList.contains(`inactive`);

  if (!ismobilemenuclosed) {
    mobilemenu.classList.add(`inactive`);
  }
  const isProductDetailClosed =
    productdetailcontainer.classList.contains(`inactive`);

  if (!isProductDetailClosed) {
    productdetailcontainer.classList.add(`inactive`);
  }

  shoppingcartcontainer.classList.toggle(`inactive`);
}

function openProductDetailAside() {
  shoppingcartcontainer.classList.add(`inactive`);
  productdetailcontainer.classList.remove(`inactive`);
}
function closeProductDetailAside() {
  productdetailcontainer.classList.add(`inactive`);
}

const productlist = [];
productlist.push({
  name: `bike`,
  price: 120,
  Image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productlist.push({
  name: `pantalla`,
  price: 220,
  Image: `https://fotografias.lasexta.com/clipping/cmsimages01/2021/08/04/F80CD976-6299-407D-AF0D-14F40A563A19/98.jpg?crop=1300,731,x0,y7&width=1900&height=1069&optimize=high&format=webply`,
});
productlist.push({
  name: `compu`,
  price: 620,
  Image: `https://teratech.com.co/wp-content/uploads/2020/06/8421.jpg`,
});

function renderproducts(arr) {
  for (product of productlist) {
    const productcard = document.createElement(`div`);
    productcard.classList.add(`product-card`);

    //product=name,price,img//

    const productimg = document.createElement(`img`);
    productimg.setAttribute(`src`, product.Image);
    productimg.addEventListener(`click`, openProductDetailAside);

    const productinfo = document.createElement(`div`);
    productinfo.classList.add(`product-info`);

    const productinfodiv = document.createElement(`div`);

    const productprice = document.createElement(`p`);
    productprice.innerText = `$` + product.price;

    const productname = document.createElement(`p`);
    productname.innerText = product.name;

    productinfodiv.appendChild(productprice);
    productinfodiv.appendChild(productname);

    const productinfofigure = document.createElement(`figure`);

    const productimgcard = document.createElement(`img`);
    productimgcard.setAttribute(`src`, "./icons/bt_add_to_cart.svg");
    productinfofigure.appendChild(productimgcard);
    productinfo.appendChild(productinfodiv);
    productinfo.appendChild(productinfofigure);

    productcard.appendChild(productimg);
    productcard.appendChild(productinfo);

    cardscontainer.appendChild(productcard);
  }
}

renderproducts(productlist);
