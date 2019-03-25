import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import "./App.css";

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
    searchInput: ""
  };
  render() {
    return (
      <div className="App">
        <Toolbar />
      </div>
    );
  }
}

export default App;
