import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Dark Chocolate Truffles', price: 12.99, image: 'dark-truffles.jpg', description: 'Rich, velvety dark chocolate truffles with a smooth ganache center.' },
  { id: 2, name: 'Milk Chocolate Bar', price: 5.99, image: 'milk-bar.jpg', description: 'Creamy milk chocolate bar made from the finest cocoa beans.' },
  { id: 3, name: 'White Chocolate Pralines', price: 15.99, image: 'white-pralines.jpg', description: 'Delicate white chocolate pralines with a nutty surprise inside.' },
  { id: 4, name: 'Assorted Chocolate Box', price: 24.99, image: 'assorted-box.jpg', description: 'A luxurious assortment of our best-selling chocolates.' },
  { id: 5, name: 'Dark Chocolate Mints', price: 8.99, image: 'dark-mints.jpg', description: 'Classic dark chocolate mints with a rich chocolate taste.' },
  { id: 6, name: 'Chocolate Bars', price: 8.99, image: 'Chocolate Bars.jpg', description: 'Chocolate ecstasy for your senses' },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = (product) => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = storedCartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = storedCartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...storedCartItems, { ...product, quantity: 1 }];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  return (
    <div className="product-details">
      <img src={`/images/${product.image}`} alt={product.name} />
      <h1>{product.name}</h1>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
