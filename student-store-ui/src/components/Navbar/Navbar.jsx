import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="content">
          <Logo></Logo>
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#About">About Us</a>
            </li>
            <li>
              <a href="/#Contact">Contact Us</a>
            </li>
            <li>
              <a href="/#Buy">Buy Now</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
