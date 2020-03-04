import React from "react";
import Navbar from "./Navbar";
import Showlist from "./Showlist";
import "./NetflixApp.css";

class NetflixApp extends React.Component {
  render() {
    // debugger;
    return (
      <div className="NFApp">
        <Navbar />
        <Showlist />
      </div>
    );
  }
}

export default NetflixApp;
