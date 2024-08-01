// // Cart.js
// import React, { useContext } from "react";
// import { AppContext } from './AppContext';
// import { Link } from "react-router-dom";
// import Typography from '@mui/material/Typography';
// import './Cart.css';

// const Cart = () => {
//   const { cartItems, clearCart } = useContext(AppContext);

//   if (!cartItems.length) {
//     return <div>Your cart is empty.</div>;
//   }

//   return (
//     <div className="cart-container">
//       {cartItems.map((item, index) => (
//         <div key={index} className="cart-item-card">
//           <img className="cart-item-image" src={item.image} alt={item.fname} />
//           <div className="cart-item-content">
//             <Typography variant="h5" component="div">
//               {item.fname}
//             </Typography>
//             <Typography variant="body1" color="textSecondary" component="div">
//               {item.fdesc}
//             </Typography>
//             <Typography variant="h6" component="div">
//               {item.price}
//             </Typography>
//           </div>
//         </div>
//       ))}
//       <div className="cart-actions">
//         <button onClick={clearCart} className='btn'>Clear Cart</button>
//         <Link to="/finalpage" className='btn'>Proceed to Checkout</Link>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
// import './AdminCtrlComp.css';

const Cart = () => {
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
       axios.get(`http://localhost:8888/users/${sessionStorage.getItem("userId")}`).then((res)=>{
        console.log(res.data.cartItems)
      setItemData(res.data.cartItems)
    }).catch((error) => {
                console.error('There was an error fetching data!', error);
            });
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`http://localhost:8888/cartItems/${id}`)
                .then(() => {
                    fetchData(); // Refresh data after deletion
                })
                .catch((error) => {
                    console.error('There was an error deleting the user!', error);
                });
        }
    };

    return (

      <div className='row'>
      {itemData.map((val, index) => (
        <Card className='col-sm-4 card-style' key={val.id}>
          <CardMedia
            component="img"
            alt={val.fname}
            height="140"
            image={val.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {val.fname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {val.fdesc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{val.price}</Button>
           

          </CardActions>
          <td>
          
            
          </td>
        </Card>
      ))}
      <div className="add-cart-card-actions">
            <Link to="/finalpage" className='btn'>BUY NOW</Link>
            <Link to="/MenuContainer" className='btn'>Bact to menu</Link>

          </div>
    </div>


//         <div className="admin-container">
//             {sessionStorage.getItem("user") == "admin@gmail.com"
//         ?
//             <div>
//             <table className="table table-hover table-striped">
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>image</th>
//                         <th>fname</th>
//                         <th>fdesc</th>
//                         <th>price</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {itemData.map((val, index) => (
//                         <tr key={val.id}>
//                             <td>{index + 1}</td>
//                             <td>{val.image}</td>
//                             <td>{val.fname}</td>
//                             <td>{val.fdesc}</td>
//                             <td>{val.price}</td>
//                             <td>
//                                 <Link to={`/UserUpdate/${val.id}`}>
//                                     <IconButton aria-label="edit" size="small">
//                                         <Edit fontSize="small" />
//                                     </IconButton>
//                                 </Link>
//                                 <IconButton
//                                     aria-label="delete"
//                                     size="small"
//                                     onClick={() => handleDelete(val.id)}
//                                 >
//                                     <Delete fontSize="small" />
//                                 </IconButton>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             </div> : <p></p>
// }


//         </div>
    );
};

export default Cart;

