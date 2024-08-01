// AppContext.js
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [user,SetUser]=useState()
  const [status,setStatus] = useState(false)
  useEffect(()=>{
    if(status){
      axios.get(`http://localhost:8888/users/${sessionStorage.getItem("userId")}`).then((res)=>{
        SetUser(res.data)
  
      })
  }
  },[status])
  
  const addToCart = (item) => {
    
      cartItems.push(item)
        
      updateUser(user,cartItems)
    
    
      
      
   
  };
const updateUser=(user,items)=>{
  user.cartItems=items
  console.log(user)
   axios.put(`http://localhost:8888/users/${sessionStorage.getItem("userId")}`,user).then((res)=>{

   })
}
  // const clearCart = () => {
  //   setCartItems([]);
  // };

  return (
    <AppContext.Provider value={{ selectedMenuId, setSelectedMenuId, cartItems,addToCart,status,setStatus, user,SetUser,setCartItems }}>
      {children}
    </AppContext.Provider>
  );
};



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const FoodCard = (staticData) => {
//   const { id } = useParams();
//   const [foodItem, setFoodItem] = useState(null);
   
//   useEffect(() => {
//     axios.get(`http://localhost:8888/foodMenu/${id}`).then((res) => {
//         console.log(res)
//       setFoodItem(res.data);
//     }).catch((error) => {
//       console.error(error);
//     });
//   }, [id]);

//   if (foodItem) {  

//   return (
//     <div className="food-card">
//       <img src={foodItem.image} alt={foodItem.fname} />
//       <h1>{foodItem.fname}</h1>
//       <p>{foodItem.fdesc}</p>
//       <p>Price: ${foodItem.price}</p>
//     </div>
//   );
// }
// return <></>
// };

// export default FoodCard;