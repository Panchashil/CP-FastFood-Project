import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import '../Css/menu.css';

const Menu = ({ itemData, selectedIndex }) => {
  const { setSelectedMenuId } = useContext(AppContext);

  // Ensure itemData is not empty and selectedIndex is valid
  if (!itemData.length || !itemData[selectedIndex] || !Array.isArray(itemData[selectedIndex].foodItems)) {
    return <div>No data available</div>;
  }

  return (
    <div className='row'>
      {itemData[selectedIndex].foodItems.map((val) => (
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
            <Link
              to={`/cart/${val.id}`}
              className="btn btn-primary btn-sm"
              onClick={() => setSelectedMenuId(itemData[selectedIndex].id)}
            >view Cart </Link>
          </CardActions>
          <td>
          {sessionStorage.getItem("user") == "admin@gmail.com"
        ?<Link
        to={`/productUpdate/${val.id}`}
        className="btn btn-primary btn-sm"
        onClick={() => setSelectedMenuId(itemData[selectedIndex].id)}
      >
        Edit
      </Link>
        : <p></p>
      }
            
          </td>
        </Card>
      ))}
    </div>
  );
};

export default Menu;
