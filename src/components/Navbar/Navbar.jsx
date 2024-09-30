import React, {useState} from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {

const [menu, setMenu] = useState("Menu");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Movil-App")} className={menu==="Movil-App"?"active":""}>Movil-App</li>
        <li onClick={()=>setMenu("Contactanos")} className={menu==="Contactanos"?"active":""}>Contactanos</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Ingresar</button>
      </div>
    </div>
  );
};

export default NavBar;
