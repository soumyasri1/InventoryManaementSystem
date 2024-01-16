// components/CategoryProducts.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

const CategoryProducts = ({ category }) => {
  const [categoryProducts, setCategoryProducts] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/products-by-category/${category}`);
        const data = await response.json();
        console.log(`Fetched ${category} Products:`, data);

        setCategoryProducts(data);
      } catch (error) {
        console.error(`Error fetching ${category} products:`, error);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div>
      <h2>{`${category} Products`}</h2>
      {categoryProducts && <ProductList products={categoryProducts} />}
    </div>
  );
};

export default CategoryProducts;
