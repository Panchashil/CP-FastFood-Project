import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom"; // Importing useParams from react-router-dom
import Typography from '@mui/material/Typography';
import axios from "axios";
import { AppContext } from './AppContext';
import './AddCart.css';

const AddCart = () => {
  const { selectedMenuId, addToCart,setCartItems,user,SetUser,status,setStatus ,cartItems} = useContext(AppContext); // Assuming addToCart function is available in context
  const { id } = useParams(); // Using useParams to get the id parameter from the URL
  console.log (sessionStorage.getItem("userId"))
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
  useEffect(()=>{
    setStatus(true)
  },[])

  if (!itemData.foodItems.length) {
    return <div>Loading...</div>;
  }

  const foodItem = itemData.foodItems.find((item) => item.id === id);

  if (!foodItem) {
    return <div>Item not found</div>;
  }

  const handleAddToCart = (item) => {
    // addToCart(foodItem); // Assuming addToCart adds the item to the cart in context
    addToCart(item)
  


    alert('Item added to cart!');
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
          <Typography variant="h6" component="div">
            {foodItem.price}
          </Typography>
          <div className="add-cart-card-actions">
            <Link to="/finalpage" className='btn'>BUY NOW</Link>
            <button onClick={()=>handleAddToCart(foodItem)} className='btn'>ADD ITEMS</button>
            <Link to="/listcart" className='btn'>Checkout</Link>
            <Link to="/MenuContainer" className='btn'>Bact to menu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
