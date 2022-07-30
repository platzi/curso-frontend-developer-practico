const getProducts = () =>{
  const API = 'https://api.escuelajs.co/api/v1/products'

  const response = fetch(API)
    .then(res => res.json())
    .then(data => {
      return data
    })
    return response
} 

export {getProducts}