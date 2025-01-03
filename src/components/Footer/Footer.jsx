import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>El Mejor Restaurant de la Ciudad Tomato</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>EMPRESA</h2>
            <ul>
                <li>Home</li>
                <li>Contactanos</li>
                <li>Delivery</li>
                <li>Políticas de Privacidad</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>PONTE EN CONTACTO</h2>
                <ul>
                    <li>+584124606520</li>
                    <li>oscar10034@gmail.com</li>
                </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 SoftMillenium 
      </p>
    </div>
  );
};

export default Footer;
