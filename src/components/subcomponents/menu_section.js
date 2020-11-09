import React from "react";
import HTMLFlipBook from "react-pageflip";

const Menu = (props) => {
  const mapMenu = (meal) => {
    return meal.map((dish) => {
      return <div key={dish.name}>{`${dish.name}: $${dish.price}`}</div>;
    });
  };

  return (
    <div className="menu-wrapper">
      <HTMLFlipBook width={500} height={700}>
        <div className="menu-page" id="bf-entree">
          <div>Breakfast</div>
          {mapMenu(props.bfEntree)}
        </div>
        <div className="menu-page" id="bf-side">
          Page 2{mapMenu(props.bfSide)}
        </div>
        <div className="menu-page" id="lun-entree">
          Page 3{mapMenu(props.lunEntree)}
        </div>
        <div className="menu-page" id="lun-side">
          Page 4{mapMenu(props.lunSide)}
        </div>
        <div className="menu-page" id="din-entree">
          Page 5{mapMenu(props.dinEntree)}
        </div>
        <div className="menu-page" id="din-side">
          Page 6{mapMenu(props.dinSide)}
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Menu;
