import React from "react";
import Modal from "react-modal";

function CountryDetail({ country, onClose }) {
    console.log('Country details: ', country);
  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <h2>{country.name.common}</h2>
      <img
        src={country.flags.png}
        alt={country.name.alt}
        width="100"
        height="60"
      />
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital && country.capital[0]}</p>
      <p>Native Name: {country.name.nativeName?.eng?.official}</p>
      <p>
        Currencies:{" "}
        {Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", ")}
      </p>
      <p>Languages: {Object.values(country.languages).join(", ")}</p>
      <p>Border Countries: {country.borders?.join(", ")}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default CountryDetail;
