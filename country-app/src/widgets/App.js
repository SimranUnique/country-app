import React from "react";
import BaseComponent from "../components/BaseComponent";
import CountryList from "../components/CountryList";
import CountryFilter from "../components/CountryFilter";

class App extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.doneLoading();
  }

  handleFilter = (filteredCountries) => {
    this.setState({
      countries: filteredCountries,
    });
    this.logInfo("Filtered countries");
  };

  render() {
    return (
      <div className="App">
        <CountryFilter onFilter={this.handleFilter} />
        <CountryList countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
