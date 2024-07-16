import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import Menu from './Menu';
import Sidebar from './Sidebar';
import '../Css/MenuContainer.css';
import { Link } from 'react-router-dom';
import LoginComp from '../LoginComponents/LoginComp'
const MenuContainer = () => {
  const [itemData, setItemData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8888/foodMenu')
      .then((res) => {
        console.log(res.data);
        setItemData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleCategorySelect = (index) => {
    setSelectedIndex(index);
  };
  const alertmsg = (event) =>{
    if(window.confirm("Are you sure logout")){
        sessionStorage.clear();
        
    }
  }
  return (
    <div>
 {!!sessionStorage.getItem("user") 
        ?
      <div>
       <nav className="navbar navbar-expand-md bg-light p-3 shadow-sm">
      <div className="container-fluid">
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-3">
            <a href="landingpage" className="nav-link text-dark text-decoration-none">Home</a>
            <a href="about" className="nav-link text-dark text-decoration-none">About Us</a>
            <a href="MenuContainer" className="nav-link text-dark text-decoration-none">Menu</a>
            <a href="contact" className="nav-link text-dark text-decoration-none">Contact</a>
            
            {!!sessionStorage.getItem("user") 
        ?
            <a onClick={alertmsg} href="logincomp" className="btn btn-danger" >Signout</a>:
            <a href="logincomp" className="btn btn-warning text-white">Signin</a>
}
          </div>
        </div>
      </div>
    </nav>
    <div className="menu-container">
      
      
      <Sidebar itemData={itemData} onSelectCategory={handleCategorySelect} />
      <div className="main-content">
        <Menu itemData={itemData} selectedIndex={selectedIndex} />
      </div>

      {sessionStorage.getItem("user") == "admin@gmail.com"
        ?<Link to={`/addFood/${itemData[selectedIndex]?.id}`} className="btn btn-primary btn-sm butn">
        Add Food
      </Link>
        : <p></p>
}
    </div>
    </div>

:<div> <LoginComp /> </div>
}
    </div>
  );
};

export default MenuContainer;
