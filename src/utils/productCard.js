export class ProductCard
{
    constructor({img,price,name})
    {
        this.img = img,
        this.price = price,
        this.name = name
    }
    deploy()
    {
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
        const image = document.createElement('img');
        image.setAttribute('src',this.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add("product-card__info");

        const div1 = document.createElement('div');

        const price = document.createElement('p');
        price.innerText = `$ ${this.price}`;

        const name = document.createElement('p');
        name.innerText = this.name;

        const figure = document.createElement('figure');

        const iconCarrito = document.createElement('img');
        iconCarrito.setAttribute('src',"./icons/bt_add_to_cart.svg");

        figure.appendChild(iconCarrito);
        div1.append(price,name);
        productInfo.append(div1,figure);
        productCard.append(image,productInfo);
        return productCard;
    }
}