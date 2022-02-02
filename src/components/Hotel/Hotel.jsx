import React from "react";

//components
import Availability from "../Availability/Availability";

//others
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function Hotel(props) {
  const {
    name,
    photo,
    description,
    availabilityFrom,
    availabilityTo,
    rooms,
    city,
    country,
    price,
  } = props;

  const renderFullDollar = (id) => (
    <FontAwesomeIcon key={id} className="icon dollar" icon={faDollarSign} />
  );
  const renderEmptyDollar = (id) => (
    <FontAwesomeIcon
      key={id}
      className="icon dollar"
      style={{ color: "rgba(255, 255, 255, 0.1)" }}
      icon={faDollarSign}
    />
  );

  //getCost function shows full dollar icons based on the hotel price.
  const getCost = (price) => {
    switch (price) {
      case 1:
        return [
          renderFullDollar("icon-0"),
          renderEmptyDollar("icon-1"),
          renderEmptyDollar("icon-2"),
          renderEmptyDollar("icon-3"),
        ];
      case 2:
        return [
          renderFullDollar("icon-0"),
          renderFullDollar("icon-1"),
          renderEmptyDollar("icon-2"),
          renderEmptyDollar("icon-3"),
        ];
      case 3:
        return [
          renderFullDollar("icon-0"),
          renderFullDollar("icon-1"),
          renderFullDollar("icon-2"),
          renderEmptyDollar("icon-3"),
        ];
      default:
        return [
          renderFullDollar("icon-0"),
          renderFullDollar("icon-1"),
          renderFullDollar("icon-2"),
          renderFullDollar("icon-3"),
        ];
    }
  };

  return (
    <div className="hotel-card">
      <img src={photo} alt="fotos de hotel"></img>
      <div className="container">
        <h2>{name}</h2>
        <div className="container-2 date">
          desde {Availability(availabilityFrom)}
        </div>
        <div className="container-2 date">
          hasta {Availability(availabilityTo)}
        </div>
        <p className="scroll-bar">{description}</p>
        <div className="container-2">
          <div className="icon-box">
            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          </div>
          <div className="text-box">
            {city}, {country}
          </div>
        </div>
        <div className="box">
          <div className="container-2">
            <div className="icon-box">
              <FontAwesomeIcon className="icon" icon={faBed} />
            </div>
            <div className="text-box">{rooms} habitaciones</div>
          </div>
          <div className="container-2 price icon-box">{getCost(price)}</div>
        </div>
        <button className="container-2 booking">reservar</button>
      </div>
    </div>
  );
}

export default Hotel;
