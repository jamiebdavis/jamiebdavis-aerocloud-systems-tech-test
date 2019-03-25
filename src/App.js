import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import "./App.css";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";

const completeHotelList = [
  { name: "hotelone", starRating: 5, facilities: ["car park", "pool"] },
  { name: "hoteltwo", starRating: 3, facilities: ["car park", "gym"] },
  { name: "hotelthree", starRating: 3, facilities: [] },
  { name: "hotelfour", starRating: 2, facilities: ["pool"] },
  { name: "hotelfive", starRating: 1, facilities: ["gym"] }
];

class App extends Component {
  state = {
    hotels: completeHotelList,
    searchInput: "",
    resultsFiltered: false
  };

  handleRefresh = () => {
    this.setState({
      hotels: completeHotelList,
      resultsFiltered: false,
      searchInput: ""
    });
  };

  handleFacilitiesFilter = () => {
    let hotels = [...this.state.hotels];
    if (hotels) {
      let filteredHotels = hotels.map(hotel => {
        if (hotel.facilities.includes(this.state.searchInput)) {
          return hotel;
        }
      });
      this.setState({ hotels: filteredHotels, resultsFiltered: true });
    }
  };

  handleChange = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleStarSortASC = () => {
    let hotels = this.state.hotels;
    let sortedHotels = hotels.sort((a, b) => {
      return a.starRating - b.starRating;
    });
    this.setState({ hotels: sortedHotels });
  };

  handleStarSortDESC = () => {
    let hotels = this.state.hotels;
    let sortedHotels = hotels.sort((a, b) => {
      return b.starRating - a.starRating;
    });
    this.setState({ hotels: sortedHotels });
  };

  render() {
    let hotelList = this.state.hotels.map(hotel => {
      if (hotel) {
        return (
          <Card
            key={hotel.name}
            name={hotel.name}
            starRating={hotel.starRating}
            facilities={hotel.facilities}
          />
        );
      }
    });

    return (
      <div className="App">
        <Toolbar />
        <p>
          {this.state.resultsFiltered ? (
            <button onClick={this.handleRefresh}>Reset Results:</button>
          ) : (
            <button onClick={this.handleFacilitiesFilter}>
              Filter by facilities:
            </button>
          )}

          <input onChange={this.handleChange} value={this.state.searchInput} />
        </p>
        <Button clicked={this.handleStarSortASC}>Sort by Stars ASC</Button>
        <Button clicked={this.handleStarSortDESC}>Sort by Stars DESC</Button>
        <br />
        {hotelList}
      </div>
    );
  }
}

export default App;
