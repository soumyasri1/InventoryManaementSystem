// components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import '../componentStyles/ProductList.css';

const ProductList = ({ products, onDelete, onEdit, user }) => {
  return (
    <div className="product-list-container">
      {products &&
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <div className="product-actions">
              {user && (
                <>
                  <button onClick={() => onEdit(product.id)}>
                    <FontAwesomeIcon icon={faEdit} /> {/* Edit Icon */}
                  </button>
                  <button onClick={() => onDelete(product.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} /> {/* Delete Icon */}
                  </button>
                </>
              )}
            </div>
            <Link to={`/product/${product.id}`}>
              <button id="viewDetails">
                <FontAwesomeIcon icon={faEye} /> View Details {/* Eye Icon */}
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
