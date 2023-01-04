import React from 'react';
import '../styles/Index.scss'

const Index = () => {
    return (
        <div>
  <div className="dark inactive" />
  <aside id="shoppingCar" className="inactive">
    <div className="title-container">
      <img src="./icons/flechita.svg" alt="arrow" />
      <p className="title">My order</p>
    </div>
    <div className="my-order-content">
      <div className="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <div className="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <div className="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>
      <button className="primary-button">
        Checkout
      </button>
    </div>
  </aside>
  <aside id="productDetail" className="inactive">
    <div className="product-detail-close">
      <img src="./icons/icon_close.png" alt="close" />
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
    <div className="product-info">
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button className="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
        Add to cart
      </button>
    </div>
  </aside>
  <section className="main-container">
    <div className="cards-container">
        {/* Debe ser Agregado con JS */}
      <div className="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt />
  <div className="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt />
    </figure>
  </div>
</div>

    </div>
  </section>
</div>

    );
}

export default Index;