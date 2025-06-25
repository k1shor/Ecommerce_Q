import React from 'react';

const Productinadmin = () => {
  const products = [
    {
      id: 1,
      name: 'Product A',
      price: 29.99,
      image: '',  // add image url if you have
      count_in_stock: 5,
    },
    {
      id: 2,
      name: 'Product B',
      price: 49.99,
      image: '',
      count_in_stock: 0,
    },
    {
      id: 3,
      name: 'Product C',
      price: 39.99,
      image: '',
      count_in_stock: 10,
    },
    {
      id: 4,
      name: 'Product D',
      price: 59.99,
      image: '',
      count_in_stock: 3,
    },
  ];

  return (
    <div className="container">
      <h1>Admin - Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, price, image, count_in_stock }) => (
            <tr key={id}>
              <td>
                <img
                  src={image || 'https://via.placeholder.com/60'}
                  alt={name}
                  width={60}
                  height={60}
                />
              </td>
              <td>{name}</td>
              <td>${price}</td>
              <td>
                <span className={count_in_stock > 0 ? 'stock-in' : 'stock-out'}>
                  {count_in_stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </td>
              <td className="actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productinadmin;
