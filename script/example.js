let carito = []

const productList = [];
productList.push({
  id: 1,
  name: `Bike`,
  cantidad: 1,
  price: 120,
  image: `https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600`,
});
productList.push({
  id: 2,
  name: `Monitor`,
  cantidad: 1,
  price: 300,
  image: `https://www.lg.com/mx/images/monitores/md06126439/Gallery/D-4.jpg`,
});
productList.push({
  id: 3,
  name: `Teclado`,
  cantidad: 1,
  price: 56,
  image: `http://cdn.shopify.com/s/files/1/2272/2505/products/1_6e7aab19-2943-4a9b-8f63-52d4337c5a44.jpg?v=1621447358`,
});
productList.push({
  id: 4,
  name: `Cascos de Audio`,
  cantidad: 1,
  price: 110,
  image: `https://www.officedepot.com.mx/medias/100021917.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDgzNjQ3fGltYWdlL2pwZWd8aDI1L2g5ZS8xMDA1MTI3ODkyOTk1MC5qcGd8MDFhOWMzODUwNzg4ZTdkMzA0NTljODZiZGU0Y2M2MmFmNmFkN2Y3NjY1NTljYjQwMzQ5OGRhZDU2NWI0N2EwNA`,
});
productList.push({
  id: 5,
  name: `Regulador`,
  cantidad: 1,
  price: 50,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 6,
  name: `Motocicleta`,
  cantidad: 1,
  price: 1200,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 7,
  name: `Guantes FutBol`,
  cantidad: 1,
  price: 50,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 8,
  name: `Tennis Futbol`,
  cantidad: 1,
  price: 80,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 9,
  name: `Sillon Personal`,
  cantidad: 1,
  price: 450,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 11,
  name: `Carrito Control Remoto`,
  cantidad: 1,
  price: 130,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 12,
  name: `Silla Reclinable`,
  cantidad: 1,
  price: 150,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 13,
  name: '',
  cantidad: 1,
  price: 50,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 14,
  name: `Regulador`,
  cantidad: 1,
  price: 50,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 15,
  name: `Regulador`,
  cantidad: 1,
  price: 50,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 16,
  name: `Regulador`,
  cantidad: 1,
  price: 50,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 17,
  name: `Regulador`,
  cantidad: 1,
  price: 50,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});
productList.push({
  id: 18,
  name: `Regulador`,
  cantidad: 1,
  price: 50,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
});


function addToCart(id){
    const existe = carrito.some((prod) => prod.id === id)
  
    if(existe) {
      const newProduct = carrito.map(prod => {
        if(prod.id === id) {
          prod.cantidad++
  
        }
      })
    console.log(newProduct);  
   return newProduct;
  } else {
       const item = productList.find((prod) => prod.id === id)
        carrito.push(item)
        console.log(item);
    }
     
      productoEnCarrito();
      // console.log(carrito);
    }