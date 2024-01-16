// components/CategoryDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';

const CategoryDetails = () => {
  const { category } = useParams();
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
      <h2 id="categroryname">{`${category} Products`}</h2>
      {categoryProducts && <ProductList products={categoryProducts} />}
    </div>
  );
};

export default CategoryDetails;
