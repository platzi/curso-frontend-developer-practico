import { Product } from "./products"
import { registerImage } from "./lazy"

const skeleton = Array.from(document.querySelectorAll(".skeleton")) as HTMLDivElement[]

export const renderProducts = (container: HTMLDivElement, products: Product[]) => {
    products.forEach((product) => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")

        const productImage = document.createElement("img")
        productImage.dataset.src = product.image ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOpzttfGscRIdh36ivzPxFb_vDdSvrm4UxhDEgmSubTGqq_ojSiTTrz2B5zXMNd87vZw&usqp=CAU"
        registerImage(productImage)

        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")

        const productDiv = document.createElement("div")

        const productPrice = document.createElement("p")
        productPrice.innerText = `$${product.price}`

        const productTitle = document.createElement("p")
        productTitle.innerText = `$${product.price}`
        
        const iconContainer = document.createElement("figure")

        const iconCart = document.createElement("img")
        iconCart.src = "./icons/bt_add_to_cart.svg"

        iconContainer.append(iconCart)
        productDiv.append(productPrice, productTitle)
        productInfo.append(productDiv, iconContainer)
        productCard.append(productImage, productInfo)
        container.append(productCard)
    })
    
    skeleton.forEach(item => item.remove())
}