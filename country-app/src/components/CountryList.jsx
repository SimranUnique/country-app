import React, { useState, useEffect } from "react";
import CountryDetail from "./CountryDetail";

function CountryList({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

//   useEffect(() => {
//     axios.get("https://restcountries.com/v3.1/all").then((response) => {
//       setCountries(response.data);
//     });
//   }, []);

  const handleViewMore = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Population</th>
            <th>Region</th>
            <th>Capital</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.name.common}>
              <td>{country.name.common}</td>
              <td>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  width="50"
                  height="30"
                />
              </td>
              <td>{country.population}</td>
              <td>{country.region}</td>
              <td>{country.capital && country.capital[0]}</td>
              <td>
                <button onClick={() => handleViewMore(country)}>
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCountry && (
        <CountryDetail
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
}

export default CountryList;
