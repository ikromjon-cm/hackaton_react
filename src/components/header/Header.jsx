import React from 'react';
import icon from "../../assets/Group.png"
const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={icon} alt="icon" />
        <button><h1>Modernize</h1></button>
      </div>
      <div className="search">
        
      </div>
    </div>
  );
}

export default Header;
