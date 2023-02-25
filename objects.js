class CreataItem{
    constructor({
        name, id, price, content, image
    }){
        this.name=name
        this.id=id
        this.price=price
        this.content=content
        this.image=image
    }
    postItem(){
        
        const contemItems = document.querySelector(".cards-container")        
        const newItem =  document.createElement("div")
        newItem.classList.add("chopping-cart")
        newItem.setAttribute("id", this.id)
        const infoItem = document.createElement("div")
        infoItem.classList.add("product-info")
        const imageitem = document.createElement("img")
        imageitem.setAttribute("src", this.image)
        imageitem.addEventListener("click", ()=>this.showDeatil())
        const contentPriceName = document.createElement("div")
        const nameItem = document.createElement("p")
        nameItem.innerText = this.name
        const priceItem = document.createElement("p")
        priceItem.innerText = this.price
        const contentImage = document.createElement("figure")
        const imageCart = document.createElement("img")
        imageCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
        imageCart.classList.add("add-product-shopping-cart")
        imageCart.addEventListener("click",()=>this.addList())

        contentPriceName.append(priceItem,nameItem)
        contentImage.appendChild(imageCart)
        infoItem.append(contentPriceName,contentImage)
        newItem.append(imageitem,infoItem)
        contemItems.append(newItem)
    }
    addList(){
        const selectProduct = document.querySelector('.my-order-content')

        const contentSelect = document.createElement('div')
        contentSelect.classList.add('div-item__product')
        const contentImg = document.createElement('img')
        contentImg.src = this.image
        const contentName = document.createElement('p')
        contentName.innerText = this.name
        contentName.classList.add('p-item__name')
        const contentPrice = document.createElement('p')
        contentPrice.innerText = this.price
        contentPrice.classList.add('p-item__price')
        const contentDelete = document.createElement('img')
        contentDelete.setAttribute("src", '/icons/icon_close.png')
        contentDelete.setAttribute("class", 'edit-image-close')
        contentDelete.addEventListener('click', ()=>{this.delete()})
        contentSelect.append(contentImg, contentName, contentPrice, contentDelete)
        selectProduct.appendChild(contentSelect)

        sumaPrice()
    }
    delete(){
        const selectProduct = document.querySelector('.div-item__product')
        selectProduct.remove()
        sumaPrice() 
    }
    desploy(){
        /*const detailItem = document.querySelector(".detail-item-select")
        const itemImage = document.querySelector(".window-item__image")
        const itemPrice = document.querySelector(".window-item__price ")
        const itemName = document.querySelector(".window-item__name")
        const itemDetail = document.querySelector(".window.item__detail")
        navbarEmail.classList.add("inactive")
        mobileMenu.classList.add("inactive")
        shoppingCartContainer.classList.add("inactive")
        detailItem.classList.remove("inactive")
        itemPrice.innerText = this.price
        itemName.innerText = this.name
        itemDetail.innerText = this.content
        itemImage.setAttribute("src", this.image)*/
    }
    showDeatil(){
        document.querySelector('.shopping-cart').classList.add('inactive')
        document.querySelector('.navbar-email').classList.add('inactive')

        const showSide = document.querySelector('.main-container')
        const detail = document.querySelector('.detail--item')
        const priceItem = document.querySelector('.window-item__price')
        const nameItem = document.querySelector('.window-item__name')
        const contentItem = document.querySelector('.detail--item-info__detail')
        const imageItem = document.querySelector('.detail--item-info__image')

        showSide.style.gridTemplateColumns = "70% 30%"
        detail.classList.remove('inactive')
        priceItem.innerText = this.price
        nameItem.innerText = this.name
        contentItem.innerText = this.content
        imageItem.src = this.image
        console.log(imageItem.src)
    }
}
const obj1 = new CreataItem({
    name:"monitor delgado",
    id: 1001,
    price: "500",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYVUxlHN-4u0po-K2mDR2LATX-VTphiP3OA&usqp=CAU"
})
obj1.postItem()

const obj2 = new CreataItem({
    name:"monitor avance",
    id: 1002,
    price: "$1000",
    content: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO48OOTSwl6r_DNaSgULtN203EOm_tGRVGHA&usqp=CAU"
})
obj2.postItem()

const obj3 = new CreataItem({
    name:"monitor bravia",
    id: 1003,
    price: "$520",
    content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSetvrNNsJ8c6Pcit6cfDbmoks5a4NH1SrAw&usqp=CAU"
})
obj3.postItem()

const obj4 = new CreataItem({
    name:"monitor acer",
    id: 1004,
    price: "$415",
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAAALMlcNLWpHFDc_oHUcHlHhwz5z5oHhjA&usqp=CAU"
})
obj4.postItem()

const obj5 = new CreataItem({
    name:"monitor lg",
    id: 1005,
    price: "$3258",
    content: ", making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSU6iFDZP21NjHZl2czQCHW8cxHQJ90BhANw&usqp=CAU"
})
obj5.postItem()

const obj6 = new CreataItem({
    name:"monitor hp",
    id: 1006,
    price: "$874",
    content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 'from de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAweZlqhlWMh9fFrG1Bgck0xh3q0INNaWzTQ&usqp=CAU"
})
obj6.postItem()

const obj7 = new CreataItem({
    name:"monitor asus",
    id: 1007,
    price: "$874",
    content: ' The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3SoDuGUv0t5FhCadhWpQN-UDyN2ZEyKRUQ&usqp=CAU"
})
obj7.postItem()
const obj8 = new CreataItem({
    name:"monitor asus",
    id: 1001,
    price: "$1552",
    content: " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGdXYoHJM9qinMp-cBu0H-PjWJVWXdsa3Fw&usqp=CAU"
})
obj8.postItem()

const obj9 = new CreataItem({
    name:"pc",
    id: 1002,
    price: "$184",
    content: "Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support   Donate Bitcoin: 16UQLq1HZ3CNwhvgrarV6p",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs2_9jrODc-3JklS4Zaplh4Nam5uazqLFEA&usqp=CAU"
})
obj9.postItem()

const obj10 = new CreataItem({
    name:"tablet generica",
    id: 1003,
    price: "$485",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3R1nVV-o6ck3Es7PGkK9-H5aNA-EgD9ydA&usqp=CAU"
})
obj10.postItem()

const obj11 = new CreataItem({
    name:"laptop",
    id: 1004,
    price: "$2145",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24Onw9zqeUWfJgnen4VIJXk1NXYu7_rxe5w&usqp=CAU"
})
obj11.postItem()

const obj12 = new CreataItem({
    name:"laptop",
    id: 1005,
    price: "$487",
    content: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7EXGNGQnmVeuuftJytqgpOf-qUfMmcJhCQ&usqp=CAU"
})
obj12.postItem()

const obj13 = new CreataItem({
    name:"laptop dell",
    id: 1006,
    price: "$685",
    content: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTos0YvXMjH04jCStDXEYnsj4MG7YX8BDZPrQ&usqp=CAU"
})
obj13.postItem()

const obj14 = new CreataItem({
    name:"laptop hp",
    id: 1007,
    price: "$487",
    content: " But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAuYNnBEgoXtLWzv4EPA7VKGZj8lqclicwQDGU_cNlrRmaaPIta_qtAMyDwZCQhrLCNA&usqp=CAU"
})
obj14.postItem()