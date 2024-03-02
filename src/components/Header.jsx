import React from "react";
import userImage from "../images/userPic.png";
import "../components/Header.css";
const Header = () => {
  return (
    <div className="header">
      {/* left */}
      <div className="headingLeft">
        THE
        <span id="ProductHeading"> PRODUCT </span>
        PLATFORM
      </div>
      {/* right */}
      <div className="rightPartOfHeader">
        <div>
          <select className="dropdown">
            <option className="options" value="learn">
              Learn
            </option>

            <option value="vegetable">Explore</option>

            <option value="meat">Meat</option>
          </select>
        </div>
        <div>
          <select className="dropdown">
            <option value="Practice">Practice</option>

            <option value="vegetable">Vegetable</option>

            <option value="meat">Meat</option>
          </select>
        </div>

        <div className="userImage">
          <img src={userImage} alt="userImage" />
        </div>
      </div>
    </div>
  );
};

export default Header;
