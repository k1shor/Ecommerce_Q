import React from 'react'

const Adpopup = () => {
  return (
    <>
    <div class="form-container">
        <div class="form-card">
            <h2>Submit Product Offer</h2>
            <form id="offerForm">
                    <label>Name of the offer</label>
            <input type="text" name="name" placeholder="Name" required />
            <label>Title of the product</label>
            <input type="text" name="title" placeholder="Title" required />
            <lable>Image to display on popup</lable>
            <input type="file" name="image" placeholder="Image" required />
            <lable>Description of the product</lable>
            <textarea name="description" rows="3" placeholder="Product Description" required></textarea>
            <button type="submit" class="shop-btn">Submit Offer</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Adpopup
