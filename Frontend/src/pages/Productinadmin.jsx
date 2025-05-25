import React from 'react'

const Productinadmin = () => {
  return (
    <div class="container">
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
        <tr>
          <td><img src="" alt=""/></td>
          <td>Product A</td>
          <td>$29.99</td>
          <td><span class="stock-in">In Stock</span></td>
          <td class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        </tr>
        <tr>
          <td><img src="" alt="" /></td>
          <td>Product B</td>
          <td>$49.99</td>
          <td><span class="stock-out">Out of Stock</span></td>
          <td class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        </tr>
        <tr>
          <td><img src="" alt="" /></td>
          <td>Product B</td>
          <td>$49.99</td>
          <td><span class="stock-out">Out of Stock</span></td>
          <td class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        </tr>
        <tr>
          <td><img src=''/></td>
          <td>Product B</td>
          <td>$49.99</td>
          <td><span class="stock-in">In Stock</span></td>
          <td class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Productinadmin
