import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';

const ProductList = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
    <h1>Liste des Produits</h1>
  <div>
  {products.map(product => (
      <div key={product.id}>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Prix: {product.price} €</p>
  <button onClick={() => addToCart(product)}>Ajouter au Panier</button>
  </div>
))}
</div>
  </div>
);
};

export default ProductList;
