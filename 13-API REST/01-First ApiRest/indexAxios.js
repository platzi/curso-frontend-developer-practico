const apiKey = 'live_G7gOFhH5EAiXsA9p9cbadRBWe48QA8H8MSnkT5aNvYeGlCmU7nnZauEhquNvRJhN';

const apiAxios = axios.create({
    baseURL: 'https://api.thedogapi.com/v1',
    timeout: 5000,
    headers: {
        'X-API-KEY': apiKey,
    }
})

const URL_RANDOM = '/images/search?limit=3';
const URL_FAVORITES = '/favourites';
const URL_UPLOAD = '/images/upload';

const spanError = document.getElementById('status-error');

const reload = document.getElementById('reload');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');


const mensajeGuardadoFavorito = document.querySelector('.msj-guardado-gatito');

async function getCats() {
    const { data, status } = await apiAxios.get(URL_RANDOM);

    if (status !== 200) {
        spanError.innerHTML = "Hubo un error: " + status;
    } else {
        const saveButton1 = document.getElementById('btn-save1')
        const saveButton2 = document.getElementById('btn-save2')
        const saveButton3 = document.getElementById('btn-save3')
        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;

        saveButton1.onclick = () => saveFavoriteDog(data[0].id);
        saveButton2.onclick = () => saveFavoriteDog(data[1].id);
        saveButton3.onclick = () => saveFavoriteDog(data[2].id);
    }
}

async function favoritesDogs() {
    const { data, status } = await apiAxios.get(URL_FAVORITES);

    if (status !== 200) {
        spanError.innerHTM = "Hubo un error: " + status + data.message;
    } else {
        const section = document.getElementById('container-favorites')
        section.innerHTML = '';

        data.forEach(michi => {
            const article = document.createElement('article');

            const img = document.createElement('img')
            img.classList.add('img-cat-favorites')

            const btn = document.createElement('button')
            btn.classList.add('btn-not-favorites')

            const heartCrash = document.createElement('img')
            heartCrash.src = ('./heart-crack-solid.svg')

            btn.appendChild(heartCrash);
            btn.onclick = () => deleteFavoriteDog(michi.id)
            img.src = michi.image.url;
            article.appendChild(img)
            article.appendChild(btn)
            section.appendChild(article)

        })
    }
}

async function saveFavoriteDog(id) {
    const { data, status } = await apiAxios.post('/favourites', {
        image_id: id,
    });

    if (status !== 200) {
        spanError.innerHTM = "Hubo un error: " + status + data.message;
    } else {
        console.log('Perrito guardado en favoritos');
        mensajeGuardadoFavorito.classList.add('active')
        setTimeout(() => {
            mensajeGuardadoFavorito.classList.remove('active')
        }, 3000)
        favoritesDogs()
    }
}

async function deleteFavoriteDog(id) {
    const { status } = await apiAxios.delete(`${URL_FAVORITES}/${id}`)

    if (status !== 200) {
        spanError.innerHTM = "Hubo un error: " + status;
    } else {
        console.log('Perrito eliminado de favoritos');
        favoritesDogs()
    }
}

async function uploadPerritoPhoto() {
    const form = document.getElementById('uploadingForm');
    const formData = new FormData(form)

    const { status } = await apiAxios.post(URL_UPLOAD, formData)

    if (status !== 201) {
        spanError.innerText = "Hubo un error: " + status;
    } else {
        console.log("Perrito cargado correctamente");
        favoritesDogs();
        saveFavoriteDog();
    }
}

reload.addEventListener('click', getCats)
getCats()
favoritesDogs();
