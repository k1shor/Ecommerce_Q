import React from 'react'

const Cart = () => {
  return (
  <div class="cart-container">
    <h2>Your Cart</h2>

    <div class="cart-item">
      <div class="item-info">
        <strong>Product 1</strong><br />
        Short description
      </div>
      <div class="item-quantity">2</div>
      <div class="item-price">$20.00</div>
    </div>

    <div class="cart-item">
      <div class="item-info">
        <strong>Product 2</strong><br />
        Another item
      </div>
      <div class="item-quantity">1</div>
      <div class="item-price">$15.00</div>
    </div>

    <div class="cart-item">
      <div class="item-info">
        <strong>Product 3</strong><br />
        Another another item
      </div>
      <div class="item-quantity">4</div>
      <div class="item-price">$12.00</div>
    </div>

    <div class="cart-item">
      <div class="item-info">
        <strong>Product 4</strong><br />
        Another another another item
      </div>
      <div class="item-quantity">8</div>
      <div class="item-price">$2.00</div>
    </div>

    <div class="cart-item">
      <div class="item-info">
        <strong>Product 5</strong><br />
        Another another another another item
      </div>
      <div class="item-quantity">3</div>
      <div class="item-price">$18.00</div>
    </div>

    <div class="total">Total: $173.00</div>

    <button class="checkout-btn">Proceed to Checkout</button>
  </div>

  )
}

export default Cart
