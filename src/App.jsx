import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {

const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin?<LoginPopup/>:<></>}
      <div className="app">
        <NavBar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
