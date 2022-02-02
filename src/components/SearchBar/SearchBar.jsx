import React from "react";

function SearchBar(props) {
  const {
    countrySelected,
    priceSelected,
    sizeSelected,
    onChangeCountry,
    onChangePrice,
    onChangeSize,
    onChangeCheckIn,
    onChangeCheckOut,
    dateCheckIn,
    dateCheckOut,
    resetFilters,
  } = props;

  const countryOptions = [
    "Todos los Paises",
    "Argentina",
    "Uruguay",
    "Brasil",
    "Chile",
  ];
  const priceOptions = ["Cualquier Precio", "$", "$$", "$$$", "$$$$"];
  const sizeOptions = ["Cualquier Tamaño", "Pequeño", "Mediano", "Grande"];

  const handleCountrySelected = (event) => {
    onChangeCountry(event.target.value);
  };

  const handlePriceSelected = (event) => {
    onChangePrice(event.target.value);
  };

  const handleSizeSelected = (event) => {
    onChangeSize(event.target.value);
  };

  const handleCheckInDate = (event) => {
    onChangeCheckIn(event.target.value);
  };

  const handleCheckOutDate = (event) => {
    onChangeCheckOut(event.target.value);
  };

  const handleReset = () => {
    resetFilters();
  };

  return (
    <>
      <div className="select-menu">
        <input
          className="mobile-size"
          type="date"
          id="from"
          value={dateCheckIn}
          onChange={handleCheckInDate}
        ></input>
        <input
          className="mobile-size"
          type="date"
          id="to"
          value={dateCheckOut}
          onChange={handleCheckOutDate}
        ></input>
        <select
          className="mobile-size"
          value={countrySelected}
          onChange={handleCountrySelected}
        >
          {countryOptions.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select
          className="mobile-size"
          value={priceSelected}
          onChange={handlePriceSelected}
        >
          {priceOptions.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </select>
        <select
          className="mobile-size"
          value={sizeSelected}
          onChange={handleSizeSelected}
        >
          {sizeOptions.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
        <button className="mobile-size" type="reset" onClick={handleReset}>
          Limpiar
        </button>
      </div>
    </>
  );
}

export default SearchBar;
