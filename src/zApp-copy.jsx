import { useState } from "react";
import "styles.css";
import hotelsData from "./data.js";
import react from "react";
import Header from "./Header";

export default function App() {
  const [country, setCountry] = useState("todos");

  const handleSelect = (evento) => {
    const paisSeleccionado = evento.target.value;
    setCountry(paisSeleccionado);
  };

  // filtrar hoteles por pais
  let hotelesFiltrados = [];
  if (country === "todos") {
    hotelesFiltrados = [...hotelsData];
  } else {
    hotelesFiltrados = hotelsData.filter((hotel) => {
      return hotel.country.toUpperCase() === country.toUpperCase();
    });
  }

  return (
    <div>
      <select
        value={country}
        onChange={handleSelect}
        className="country-selector"
      >
        <option value="todos">Todos los hoteles</option>
        <option value="argentina">Argentina</option>
        <option value="brasil">Brazil</option>
        <option value="chile">Chile</option>
        <option value="uruguay">Uruguay</option>
      </select>
      <Hoteles hoteles={hotelesFiltrados} />
    </div>
  );
}

function Hoteles(props) {
  const { hoteles } = props;
  return (
    <div className="App flex">
      {hoteles.map((hotel) => {
        return (
          <div className="hotel">
            <p>{hotel.name}</p>
            <img src={hotel.photo} height="100px" alt={hotel.name} />
            <p>{hotel.country}</p>
          </div>
        );
      })}
    </div>
  );
}
