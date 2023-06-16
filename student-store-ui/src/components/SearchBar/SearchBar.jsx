import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  // const [searchQuery, setSearchQuery] = { products };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form className="search-bar" id="form">
        <input
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Search"
          onChange={handleSearch}
        ></input>
        <button>
          <i id="search-icon" className="material-icons">
            search
          </i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
