// components/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../componentStyles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/products/${id}`);
        const data = await response.json();
        console.log('Fetched Product Details:', data);

        setProductDetails(data); // Set the fetched product details in state
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div className="product-details-container">
      <h2 id="heading">Product Details</h2>
      {productDetails ? (
        <div className="product-details-content">
          <h3>{productDetails.title}</h3>
          <p>{productDetails.description}</p>
          <p>Price: ${productDetails.price}</p>
          <p>Discount Percentage: {productDetails.discountPercentage}%</p>
          <p>Rating: {productDetails.rating}</p>
          <p>Stock: {productDetails.stock}</p>
          <p>Brand: {productDetails.brand}</p>
          <p>Category: {productDetails.category}</p>

          <img src={productDetails.thumbnail} alt={productDetails.title} className="product-thumbnail" />

          <h4>Images:</h4>
          <div className="product-images-container">
            {productDetails.images.map((image, index) => (
              <img key={index} src={image} alt={`Product ${index + 1}`} className="product-image" />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
