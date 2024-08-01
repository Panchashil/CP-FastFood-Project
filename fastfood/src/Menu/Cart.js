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


    );
};

export default Cart;

