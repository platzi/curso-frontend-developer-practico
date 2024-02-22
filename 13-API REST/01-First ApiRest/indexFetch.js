const URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=3';
const URL_FAVORITES = 'https://api.thedogapi.com/v1/favourites';
const URL_UPLOAD = 'https://api.thedogapi.com/v1/images/upload';
const URL_FAVORITES_DELETE = ( id ) => `https://api.thedogapi.com/v1/favourites/${id}?api_key=live_G7gOFhH5EAiXsA9p9cbadRBWe48QA8H8MSnkT5aNvYeGlCmU7nnZauEhquNvRJhN`;

const spanError = document.getElementById( 'status-error' );

const reload = document.getElementById( 'reload' );
const img1 = document.getElementById( 'img1' );
const img2 = document.getElementById( 'img2' );
const img3 = document.getElementById( 'img3' );

const apiKey = 'live_G7gOFhH5EAiXsA9p9cbadRBWe48QA8H8MSnkT5aNvYeGlCmU7nnZauEhquNvRJhN'

const mensajeGuardadoFavorito = document.querySelector( '.msj-guardado-gatito' );

async function getCats() {
  const response = await fetch( URL_RANDOM );
  const data = await response.json();
  
  if( response.status !== 200 ) {
    spanError.innerHTML = "Hubo un error: " + response.status;
  } else {
    const saveButton1 = document.getElementById( 'btn-save1' )
    const saveButton2 = document.getElementById( 'btn-save2' )
    const saveButton3 = document.getElementById( 'btn-save3' )
    img1.src = data[ 0 ].url;
    img2.src = data[ 1 ].url;
    img3.src = data[ 2 ].url;

    saveButton1.onclick = () => saveFavoriteCat( data[ 0 ].id );
    saveButton2.onclick = () => saveFavoriteCat( data[ 1 ].id );
    saveButton3.onclick = () => saveFavoriteCat( data[ 2 ].id );
  }
}

async function favoritesCats() {
  const response = await fetch( URL_FAVORITES, {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey
    }
  });
  const data = await response.json();
  console.log( data );

  if( response.status !== 200 ) {
    spanError.innerHTM = "Hubo un error: " + response.status + data.message;
  } else {
    const section = document.getElementById( 'container-favorites' )
    section.innerHTML = '';

    data.forEach( michi => {
      const article = document.createElement( 'article' );

      const img = document.createElement( 'img' )
      img.classList.add( 'img-cat-favorites' )

      const btn = document.createElement( 'button' )
      btn.classList.add( 'btn-not-favorites' )

      const heartCrash = document.createElement( 'img' )
      heartCrash.src = ( './heart-crack-solid.svg' )

      btn.appendChild( heartCrash );
      btn.onclick = () => deleteFavoriteCat( michi.id )
      img.src = michi.image.url;
      article.appendChild( img )
      article.appendChild( btn )
      section.appendChild( article )

    })
  }
}

async function saveFavoriteCat( id ) {
  const response = await fetch( URL_FAVORITES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey
    },
    body: JSON.stringify({
      image_id: id
    }),
  });

  const data = await response.json();

  console.log('save', response);

  if( response.status !== 200 ) {
    spanError.innerHTM = "Hubo un error: " + response.status + data.message;
  } else {
    console.log( 'Gatito guardado en favoritos' );
    mensajeGuardadoFavorito.classList.add( 'active' )
    setTimeout( () => {
      mensajeGuardadoFavorito.classList.remove( 'active' )
    }, 3000)
    favoritesCats()
  }
}

async function deleteFavoriteCat( id ) {
  const response = await fetch( URL_FAVORITES_DELETE( id ), {
    method: 'DELETE',
    headers: {
      'X-API-KEY': apiKey
    }
  });

  const data = await response.json();

  if( response.status !== 200 ) {
    spanError.innerHTM = "Hubo un error: " + response.status + data.message;
  } else {
    console.log( 'Gatito eliminado de favoritos' );
    favoritesCats()
  }
}

async function uploadPerritoPhoto() {
  const form = document.getElementById('uploadingForm');
  const formData = new FormData(form)
  const res = await fetch(URL_UPLOAD, {
    method : 'POST',
    headers: {
      'x-api-key' : apiKey,
    },
    body: formData,
  })
  const data = await res.json();

  if ( res.status  !== 201 ){
    spanError.innerText = "Hubo un error: " + res.status + " "  + data.message
  }else{
    console.log("Michi cargado correctamente");
    favoritesCats()
    saveFavoriteCat(data.id)
  }
}

reload.addEventListener( 'click', getCats )
getCats()
favoritesCats();
