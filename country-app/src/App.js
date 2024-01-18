import React, { useState } from "react";
import CountryList from "./CountryList";
import CountryFilter from "./CountryFilter";

function App() {
  const [countries, setCountries] = useState([]);

  const handleFilter = (filteredCountries) => {
    setCountries(filteredCountries);
  };

  return (
    <div className="App">
      <CountryFilter onFilter={handleFilter} />
      <CountryList countries={countries} />
    </div>
  );
}

export default App;
