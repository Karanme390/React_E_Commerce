import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Dark Chocolate Truffles', price: 12.99, image: 'dark-truffles.jpg' },
  { id: 2, name: 'Milk Chocolate Bar', price: 5.99, image: 'milk-bar.jpg' },
  { id: 3, name: 'White Chocolate Pralines', price: 15.99, image: 'white-pralines.jpg' },
  { id: 4, name: 'Assorted Chocolate Box', price: 24.99, image: 'assorted-box.jpg' },
  { id: 5, name: 'Dark Chocolate Mints', price: 8.99, image: 'dark-mints.jpg' },
  { id: 6, name: 'Chocolate Bars', price: 8.99, image: 'Chocolate Bars.jpg' },
];

function ProductList() {
  return (
    <div className="product-list">
      <h1>Our Chocolates</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`/images/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className="button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;