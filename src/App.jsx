import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import Hotel from "./components/Hotel/Hotel";
import hotelsData from "./data";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [country, setCountry] = useState("Todos los Paises");
  const [price, setPrice] = useState("Cualquier Precio");
  const [size, setSize] = useState("Cualquier Tamaño");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [hotels, setHotels] = useState(hotelsData);

  const allFilter = (
    checkedCountry,
    checkedPrice,
    checkedSize,
    checkedIn,
    checkedOut
  ) => {
    const hotelFilter = hotelsData.filter((hotel) => {
      return (
        countryFilter(checkedCountry, hotel) &&
        priceFilter(checkedPrice, hotel) &&
        sizeFilter(checkedSize, hotel) &&
        filterCheckIn(checkedIn, hotel) &&
        filterCheckOut(checkedOut, hotel)
      );
    });
    setHotels(hotelFilter);
  };

  const countryFilter = (checkedCountry, hotel) => {
    if (checkedCountry === "Todos los Paises") {
      return true;
    } else {
      return hotel.country.toUpperCase() === checkedCountry.toUpperCase();
    }
  };

  const priceFilter = (checkedPrice, hotel) => {
    if (checkedPrice === "$") {
      return hotel.price === 1;
    } else if (checkedPrice === "$$") {
      return hotel.price === 2;
    } else if (checkedPrice === "$$$") {
      return hotel.price === 3;
    } else if (checkedPrice === "$$$$") {
      return hotel.price === 4;
    } else {
      return true;
    }
  };

  const sizeFilter = (checkedSize, hotel) => {
    if (checkedSize === "Pequeño") {
      return hotel.rooms <= 10;
    } else if (checkedSize === "Mediano") {
      return hotel.rooms > 10 && hotel.rooms <= 20;
    } else if (checkedSize === "Grande") {
      return hotel.rooms > 20;
    } else {
      return true;
    }
  };

  const filterCheckIn = (checkedIn, hotel) => {
    if (checkedIn === "") return true;
    return (
      new Date(checkedIn).setHours(0, 0, 0, 0).valueOf() >=
      hotel.availabilityFrom
    );
  };

  const filterCheckOut = (checkedOut, hotel) => {
    if (checkedOut === "") return true;
    return (
      new Date(checkedOut).setHours(0, 0, 0, 0).valueOf() <=
      hotel.availabilityTo
    );
  };

  const onChangeCountry = (checkedCountry) => {
    setCountry(checkedCountry);
    allFilter(checkedCountry, price, size, checkIn, checkOut);
  };

  const onChangePrice = (checkedPrice) => {
    setPrice(checkedPrice);
    allFilter(country, checkedPrice, size, checkIn, checkOut);
  };

  const onChangeSize = (checkedSize) => {
    setSize(checkedSize);
    allFilter(country, price, checkedSize, checkIn, checkOut);
  };

  const onChangeCheckIn = (checkedIn) => {
    setCheckIn(checkedIn);
    allFilter(country, price, size, checkedIn, checkOut);
  };

  const onChangeCheckOut = (checkedOut) => {
    setCheckOut(checkedOut);
    allFilter(country, price, size, checkIn, checkedOut);
  };
  //when clicking on the "Limpiar" button you reset all the useStates.
  const handleResetFilters = () => {
    setCheckIn("");
    setCheckOut("");
    setCountry("Todos los Paises");
    setPrice("Cualquier Precio");
    setSize("Cualquier tamaño");
    setHotels(hotelsData);
  };

  return (
    <div className="app">
      <Header
        country={country}
        price={price}
        size={size}
        checkIn={checkIn}
        checkOut={checkOut}
      />
      <div>
        <SearchBar
          countrySelected={country}
          priceSelected={price}
          sizeSelected={size}
          onChangeCountry={onChangeCountry}
          onChangePrice={onChangePrice}
          onChangeSize={onChangeSize}
          dateCheckIn={checkIn}
          dateCheckOut={checkOut}
          onChangeCheckIn={onChangeCheckIn}
          onChangeCheckOut={onChangeCheckOut}
          resetFilters={handleResetFilters}
        />
      </div>
      <main>
        {
          /* the following is to let the users know that it is needed to select a check out date
        if a check in date is selected and check in date can't be bigger than check out date*/
          checkIn && !checkOut ? (
            <div className="not-found-message">
              Por favor elija una fecha de salida
            </div>
          ) : !checkIn && checkOut ? (
            <div className="not-found-message">
              Por favor elija una fecha de entrada
            </div>
          ) : checkIn > checkOut ? (
            <div className="not-found-message">
              La fecha de salida no puede ser menor que la de entrada!
            </div>
          ) : hotels.length === 0 ? (
            <div className="not-found-message">
              Lo sentimos, no hay hoteles que coincidan con su seleccion
            </div>
          ) : (
            hotels.map((item) => {
              return (
                <Hotel
                  key={Math.random()}
                  name={item.name}
                  photo={item.photo}
                  description={item.description}
                  availabilityFrom={item.availabilityFrom}
                  availabilityTo={item.availabilityTo}
                  rooms={item.rooms}
                  city={item.city}
                  country={item.country}
                  price={item.price}
                />
              );
            })
          )
        }
      </main>
    </div>
  );
}

export default App;
