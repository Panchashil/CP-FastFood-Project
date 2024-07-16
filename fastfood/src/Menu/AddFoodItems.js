import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddFoodItems = () => {
  const { id } = useParams(); // Get the category ID from the URL
  const nav = useNavigate();
  const [foodItem, setFoodItem] = useState({
    id: "",
    image:"",
    fname: "",
    fdesc: "",
    price: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFoodItem({
      ...foodItem,
      [name]: value,
    });
  };

  const addRecord = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8888/foodMenu/${id}`)
      .then((res) => {
        const updatedCategory = {
          ...res.data,
          foodItems: [...res.data.foodItems, foodItem],
        };
        return axios.put(
          `http://localhost:8888/foodMenu/${id}`,
          updatedCategory
        );
      })
      .then((res) => {
        window.alert("Record Added Successfully");
        nav("/MenuContainer");
      })
      .catch((error) => {
        console.error("Error adding record:", error);
      });
  };

  return (
    <div>
      <form onSubmit={addRecord}>
        <label className="form-label">Enter Food Id:</label>
        <input
          type="text"
          name="id"
          onChange={inputChangeHandler}
          value={foodItem.id}
          className="form-control"
        />

        <label className="form-label">Enter Image Url :</label>
        <input
          type="text"
          name="image"
          onChange={inputChangeHandler}
          value={foodItem.image}
          className="form-control"
        />

        <label className="form-label">Enter Food Name:</label>
        <input
          type="text"
          name="fname"
          onChange={inputChangeHandler}
          value={foodItem.fname}
          className="form-control"
        />

        <label className="form-label">Enter Food Description:</label>
        <input
          type="text"
          name="fdesc"
          onChange={inputChangeHandler}
          value={foodItem.fdesc}
          className="form-control"
        />

        <label className="form-label">Enter Food Price:</label>
        <input
          type="text"
          name="price"
          onChange={inputChangeHandler}
          value={foodItem.price}
          className="form-control"
        />

        <Button variant="outlined" className="btn btn-sm" type="submit">
          Add Data
        </Button>
      </form>
    </div>
  );
};

export default AddFoodItems;
