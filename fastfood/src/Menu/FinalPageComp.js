import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/FinalPageComp.css';

const FinalPageComp = () => {
  const navigate = useNavigate();

  const handleBackToMenu = () => {
    navigate('/MenuContainer'); // Redirect to the menu or homepage
  };
  const handleBackToHome = () => {
    navigate('/'); // Redirect to the menu or homepage
  };

  return (
    <div className="final-page-container">
      <div className="final-page-content">
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your purchase. Your order is being processed.</p>
        <button className="back-button" onClick={handleBackToMenu}>Back to Menu</button>
        <button className="home-button" onClick={handleBackToHome}>Back to Home</button>
       
      </div>
    </div>
  );
};

export default FinalPageComp;
