import React from "react";

//components
import Availability from "../Availability/Availability";

function Header(props) {
  const { country, price, size, checkIn, checkOut } = props;

  const hotelPrice = (price) => {
    if (price === "$") {
      return "Económico";
    } else if (price === "$$") {
      return "Confort";
    } else if (price === "$$$") {
      return "Lujos";
    } else if (price === "$$$$") {
      return "Magnífico";
    } else {
      return "Cualquier precio";
    }
  };

  return (
    <div className="header">
      <h1>Hoteles</h1>
      <h2>
        Desde {Availability(checkIn)}, Hasta {Availability(checkOut)}
      </h2>
      <h2>En {country}</h2>
      <h2> {hotelPrice(price)} </h2>
      <h2>De {size} </h2>
    </div>
  );
}

export default Header;
