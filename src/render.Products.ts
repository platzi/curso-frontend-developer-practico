import iconCartURL from "../icons/bt_add_to_cart.svg"
import { Product } from "./products"
import { registerImage } from "./lazy"
import { showMenu, productDetailContainer } from "./main"

const skeleton = Array.from(document.querySelectorAll(".skeleton")) as HTMLDivElement[]

export const renderProducts = (container: HTMLDivElement, products: Product[]) => {
    products.forEach((product) => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")

        const productImage = document.createElement("img")
        productImage.dataset.src = product.image ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOpzttfGscRIdh36ivzPxFb_vDdSvrm4UxhDEgmSubTGqq_ojSiTTrz2B5zXMNd87vZw&usqp=CAU"
        productImage.addEventListener("click", showMenu(productDetailContainer))
        registerImage(productImage)

        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")

        const productDiv = document.createElement("div")

        const productPrice = document.createElement("p")
        productPrice.innerText = `$${product.price}`

        const productTitle = document.createElement("p")
        productTitle.innerText = product.name
        
        const iconContainer = document.createElement("figure")

        const iconCart = document.createElement("img")
        iconCart.src = iconCartURL

        iconContainer.append(iconCart)
        productDiv.append(productPrice, productTitle)
        productInfo.append(productDiv, iconContainer)
        productCard.append(productImage, productInfo)
        container.append(productCard)
    })
    
    skeleton.forEach(item => item.remove())
}