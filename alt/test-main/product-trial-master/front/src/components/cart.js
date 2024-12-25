import React from 'react';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <div>
    <h2>Panier</h2>
  {cart.length === 0 ? (
    <p>Le panier est vide.</p>
  ) : (
  <ul>
  {cart.map(item => (
      <li key={item.id}>
    {item.name} - {item.quantity}
    <button onClick={() => removeFromCart(item.id)}>Retirer</button>
  </li>
  ))}
  </ul>
  )}
</div>
);
};

export default Cart;
