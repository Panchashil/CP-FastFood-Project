import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAddComp = () => {
  const nav = useNavigate();
  const [itemData, setItemData] = useState({
    foodName: "",
    foodItems: [
      {
        fname: "",
        fdesc: "",
        price: "",
      }
    ]
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    const [key, index, field] = name.split('.');

    if (key === 'foodItems') {
      setItemData(prevState => ({
        ...prevState,
        foodItems: prevState.foodItems.map((item, i) => (
          i === Number(index) ? { ...item, [field]: value } : item
        ))
      }));
    } else {
      setItemData({
        ...itemData,
        [name]: value
      });
    }
  };

  const addRecord = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8888/foodMenu/`, itemData)
      .then((res) => {
        window.alert("Record Added Successfully");
        nav('/MenuContainer');
      })
      .catch((error) => {
        console.error("Error adding record:", error);
      });
  };

  return (
    <div>
      <form onSubmit={addRecord}>
        <label className='form-label'>Enter Food Category Name:</label>
        <input 
          type='text' 
          name='foodName' 
          onChange={inputChangeHandler} 
          value={itemData.foodName} 
          className='form-control' 
        />

        {itemData.foodItems.map((foodItem, index) => (
          <div key={index}>
            <label className='form-label'>Enter Food Id:</label>
            <input 
              type='text' 
              name={`foodItems.${index}.id`} 
              onChange={inputChangeHandler} 
              value={foodItem.id} 
              className='form-control' 
            />

            <label className='form-label'>Enter Food Name:</label>
            <input 
              type='text' 
              name={`foodItems.${index}.fname`} 
              onChange={inputChangeHandler} 
              value={foodItem.fname} 
              className='form-control' 
            />

            <label className='form-label'>Enter Food Description:</label>
            <input 
              type='text' 
              name={`foodItems.${index}.fdesc`} 
              onChange={inputChangeHandler} 
              value={foodItem.fdesc} 
              className='form-control' 
            />

            <label className='form-label'>Enter Food Price:</label>
            <input 
              type='text' 
              name={`foodItems.${index}.price`} 
              onChange={inputChangeHandler} 
              value={foodItem.price} 
              className='form-control' 
            />
          </div>
        ))}

        <Button variant='outlined' className='btn btn-sm' type="submit">Add Data</Button>
      </form>
    </div>
  );
};

export default ProductAddComp;
