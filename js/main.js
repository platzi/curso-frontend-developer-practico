const productList= [
  
    {
        id:1,
        name:"Bike",
        category: 'Others',
        price:120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
    },
    {
        id:2,
        name:'Bicycle helmet',
        category: 'Others',
        price: 1600,
        image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   

    },
    {
        id:3,
        name:'Seat',
        category: 'Others',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
        
    },
    {
      id:4,
      name: 'Rokid Air AR',
      category: 'Clothes',
      price: 399.99,
      image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/518WFzR2kGL._AC_UY218_.jpg',
      desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
  }

    ,
    {
        id:5,
        name: 'Rokid Air AR',
        category: 'Electronics',
        price: 399.99,
        image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/518WFzR2kGL._AC_UY218_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
    },
    {
        id:6,
        name: 'Bocina Sound Link',
        category: 'Electronics',
        price: 89.99,
        image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61v+-9dV4PL._AC_UY218_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
    },
    {
        id:7,
        name: 'Juego de mesa de cocina de 5 piezas',
        category: 'Furnitures',
        price: 256.99,
        image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/813BJiM5DrL._AC_UL320_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
    },
    {
        id:8,
        name: 'HOOBRO Mesa auxiliar',
        category: 'Furnitures',
        price: 59.99,
        image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Axy7YHLNL._AC_UL320_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
    },
    {
        id:9,
        name: 'Serie RC con licencia oficial',
        category: 'Toys',
        price: 32.99,
        image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71tICZPyOPL._AC_UL320_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
    },
    {
        id:10,
        name: 'Elmo',
        category: 'Toys',
        price: 7.49,
        image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qqqhUGH3L._AC_UL320_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
    }
];


const cardsContainer = document.querySelector(".cards-container");
const navbarLeft = document.querySelector(".navbar-left-ul");
const mobilMenu = document.querySelector(".mobile-menu-ul");

//Desplegar items

window.addEventListener("DOMContentLoaded",function(){
    displayProductList(productList);
    displayMenuButtons();
});

function displayProductList(listItems) {
    let displayProducts = listItems.map(function (item) {
      // console.log(item);
  
      return `<div class="product-card">
      <img src=${item.image} alt=${item.name}>
      <div class="product-info">
        <div>
          <p>$${item.price}</p>
          <p>${item.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>`;
    });
    displayProducts = displayProducts.join("");
     //console.log(displayProducts);
     cardsContainer.innerHTML = displayProducts  
  }
// desplegar menu botones
function displayMenuButtons() {
    const categories = productList.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["All"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return ` <li>
        <li>
        <a href="#" class="filter-btn" data-id="${category}">${category}</a>
      </li>`
      })
      .join("");
  
      navbarLeft.innerHTML = categoryBtns;
      mobilMenu.innerHTML = categoryBtns;

      /*Filtrar por categoría*/
    const filterBtns = navbarLeft.querySelectorAll(".filter-btn");
    const filterBtnsMb = mobilMenu.querySelectorAll(".filter-btn");
    //console.log(filterBtns);

    filterProducts(filterBtns);
    filterProducts(filterBtnsMb);
    
    function filterProducts(filter){
      filter.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          //console.log(e.currentTarget.dataset.id);
          
          //Guardar id de la categoria
          const category = e.currentTarget.dataset.id;
          const productCategory = productList.filter(function (productItem) {
           //console.log(productItem.category);
        
            if (productItem.category === category) {
              return productItem;
            }
          });
          if (category === "All") {
            displayProductList(productList);
          } else {
            displayProductList(productCategory);
          }
        });
      });
    }
  }
