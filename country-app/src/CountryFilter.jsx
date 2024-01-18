import React, { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";
// import TextField from "@material-ui/core/TextField";

function CountryFilter({ onFilter }) {
  const [name, setName] = useState("");

  const fetchCountries = (url) => {
    axios
      .get(url)
      .then((response) => {
        onFilter(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching countries.", error);
      });
  };

  useEffect(() => {
    fetchCountries("https://restcountries.com/v3.1/all");
  }, []);

  const handleInputChange = debounce((newName) => {
    setName(newName);

    if (newName.trim() === "") {
      fetchCountries("https://restcountries.com/v3.1/all");
    } else {
      fetchCountries(`https://restcountries.com/v3.1/name/${newName}`);
    }
  }, 300); // delay in ms

  return (
    <div>
       <input
        type="text"
        onChange={(event) => handleInputChange(event.target.value)}
        placeholder="Filter by country name"
      />
    </div>
  );
}

export default CountryFilter;
