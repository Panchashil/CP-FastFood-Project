// AddCart.js
import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from './AppContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../Css/AddCart.css';

const AddCart = () => {
  const { selectedMenuId, addToCart } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [itemData, setItemData] = useState({
    foodName: "",
    foodItems: [],
  });

  useEffect(() => {
    if (selectedMenuId) {
      axios
        .get(`http://localhost:8888/foodMenu/${selectedMenuId}`)
        .then((res) => {
          setItemData(res.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedMenuId]);

  if (!itemData.foodItems.length) {
    return <div>Loading...</div>;
  }

  const foodItem = itemData.foodItems.find((item) => item.id === id);

  if (!foodItem) {
    return <div>Item not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(foodItem);
    navigate("/cart"); // Redirect to cart page after adding the item
  };

  return (
    <div className="add-cart-container">
      <div className="add-cart-card">
        <img
          className="add-cart-card-media"
          src={foodItem.image}
          alt={foodItem.fname}
        />
        <div className="add-cart-card-content">
          <Typography variant="h5" component="div">
            {foodItem.fname}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="div">
            {foodItem.fdesc}
          </Typography>
          <br /> <br /> <br /> <br />
          <div className="add-cart-card-actions">
            <Typography variant="h6" component="div">
              {foodItem.price}
            </Typography>

            <Link to="/finalpage" className='btn'>BUY NOW</Link>
            <Link to="/MenuContainer" className='btn'>ADD ITEMS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
