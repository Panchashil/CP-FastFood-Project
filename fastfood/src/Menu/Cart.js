// Cart.js
import React, { useContext } from "react";
import { AppContext } from './AppContext';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import '../Css/Cart.css';

const Cart = () => {
  const { cartItems, clearCart } = useContext(AppContext);

  if (!cartItems.length) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="cart-container">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item-card">
          <img className="cart-item-image" src={item.image} alt={item.fname} />
          <div className="cart-item-content">
            <Typography variant="h5" component="div">
              {item.fname}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="div">
              {item.fdesc}
            </Typography>
            <Typography variant="h6" component="div">
              {item.price}
            </Typography>
          </div>
        </div>
      ))}
      <div className="cart-actions">
        <button onClick={clearCart} className='btn'>Clear Cart</button>
        <Link to="/finalpage" className='btn'>Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
