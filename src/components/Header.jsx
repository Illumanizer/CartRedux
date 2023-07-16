import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Home from "./Home";

const Header = () => {
  return (
    <nav>
      <h2> Logo here </h2>

      <div>
        <Link to={"/"} element={<Home/>}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingCart />
          <p>{0}</p>{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
