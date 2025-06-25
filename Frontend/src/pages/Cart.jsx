// Cart.jsx
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image: "tempelate.webp",
      quantity: 2,
      stock: 5,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      image: "tempelate.webp",
      quantity: 1,
      stock: 3,
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className='text-xl font-bold mb-4'>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} className="w-16 h-16" /></td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </td>
                <td>${item.price}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mt-4 font-bold">Total: ${total}</div>
    </div>
  );
};

export default Cart;
