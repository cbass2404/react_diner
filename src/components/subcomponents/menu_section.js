import React from "react";
import HTMLFlipBook from "react-pageflip";

const Menu = (props) => {
  return (
    <div className="menu-wrapper">
      <HTMLFlipBook width={500} height={700}>
        <div className="menu-page" id="bf-entree">
          Page 1
        </div>
        <div className="menu-page" id="bf-side">
          Page 2
        </div>
        <div className="menu-page" id="lun-entree">
          Page 3
        </div>
        <div className="menu-page" id="lun-side">
          Page 4
        </div>
        <div className="menu-page" id="din-entree">
          Page 5
        </div>
        <div className="menu-page" id="din-side">
          Page 6
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Menu;
