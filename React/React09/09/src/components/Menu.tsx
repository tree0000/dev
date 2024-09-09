import React from "react";
import './menu.css'
import { Link } from "react-router-dom";


const Menu = () => {
return (
<div>

   <nav className="navbar">
        <div className="logo">FASSION</div>
        <ul className="nav-links">
          <li><a href="#demos"><Link to="/">Home</Link></a></li>
          <li><a href="#usage"><Link to="/product">상품</Link></a></li>
          <li><a href="#settings">장바구니</a></li>
          <li><a href="#wordpress">배송정보</a></li>
          <li><a href="#get">로그인</a></li>
        </ul>
      </nav>
</div>
);
};
export default Menu;