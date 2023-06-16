import React from "react";
import "./NotFound.css";

const NotFound = ({
  user,
  activeCategory,
  setActiveCategory,
  handleOnSearchInputChange,
  searchInputValue,
}) => {
  return (
    <div className="NotFound">
      ​
      <div className="cta">
        <h1>404</h1>
        <p>That page does not exist</p>
      </div>
    </div>
  );
};

export default NotFound;
