import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Css/FoodCard.css';

const FoodCard = (staticData) => {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState(null);
   
  useEffect(() => {
    axios.get(`http://localhost:8888/foodMenu/${id}`).then((res) => {
        console.log(res)
      setFoodItem(res.data);
    }).catch((error) => {
      console.error(error);
    });
  }, [id]);

  if (foodItem) {  

  return (
    <div className="food-card">
      <img src={foodItem.image} alt={foodItem.fname} />
      <h1>{foodItem.fname}</h1>
      <p>{foodItem.fdesc}</p>
      <p>Price: ${foodItem.price}</p>
    </div>
  );
}
return <></>
};

export default FoodCard;