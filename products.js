let container = document.querySelector('.cards-container');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url) {
    return fetch(url);
}

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(productos => {
        const fragment = document.createDocumentFragment();
        let card = '';
        for (let i = 0; i < 150; i++) {
            // console.log(productos[i].title);
            // console.log(productos[i].price);
            // console.log(productos[i].images[1]);
            card += `<div class="product-card">
            <img src="${productos[i].images[0]}" alt="">
                <div class="product-info">
                        <div>
                            <p>$ ${productos[i].price}</p>
                            <p>${productos[i].title}</p>
                        </div>
                    <figure>
                        <img src="../icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
        }
        fragment.append(card);
        container.innerHTML = fragment.textContent
    })
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizado'))