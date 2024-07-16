import React, { useState } from 'react';
import { Button } from '@mui/material';
import '../Css/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ itemData, onSelectCategory }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <Button onClick={toggleSidebar}>
        {isCollapsed ? '>' : '<'}
      </Button>
      {!isCollapsed && (
        <div className="category-list">
          {itemData.map((category, index) => (
            <Button
              key={index}
              onClick={() => onSelectCategory(index)}
              className="category-button"
            >
              {category.foodName}
            </Button>
          ))}
        </div>
      )}
      {sessionStorage.getItem("user") == "admin@gmail.com"
        ?<Link to="/productAdd" className='btn btn-primary btn-sm'>Add Product</Link>
        : <p></p>
      }
      
    </div>
  );
};

export default Sidebar;
