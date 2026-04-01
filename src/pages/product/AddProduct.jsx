import { useState } from "react";

const AddProduct = () => {
    const [product, setProduct] = useState()
    const 

  return (
    <div>
      <div>
        <h2>Add Product</h2>
        <div>
          <h4>Information</h4>
          <p>Product Name</p>
          <input type="text" placeholder="Summer T-Shirt" />

          <p>Product Description</p>
          <input type="text" placeholder="Product description" />

          <h3>Image URL</h3>
          <input type="text" placeholder="" />

          <div>
            <h3>Price</h3>

            <p>Product Price</p>
            <input type="text" placeholder="Enter price" />

            <p>Discount Price</p>
            <input type="text" placeholder="Price at Discount" />
          </div>
        </div>
      </div>
      <div>
        <h4>Categories</h4>
        <p>Women</p>
        <p>Men</p>
        <p>T-Shirt</p>
        <p>Hoodie</p>
        <p>Dress</p>
      </div>
    </div>
  );
};

export default AddProduct;
