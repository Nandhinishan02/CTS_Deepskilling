import React from "react";
import "./App.css";

function App() {
  // Create an object containing office details
  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Create a list of office space objects
  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    }
  ];

  return (
    <div className="App">
      {/* Heading */}
      <h1>Office Space, at Affordable Range</h1>

      {/* Office Image */}
      <img
        src="/office.jpg"
        width="25%"
        height="25%"
        alt="Office Space"
      />

      {/* Display office details */}
      <h1>Name: {office.Name}</h1>

      {/* Loop through office list */}
      {offices.map((item, index) => {
        // Set rent color based on rent value
        let color = [];

        if (item.Rent < 60000) {
          color.push("red");
        } else {
          color.push("green");
        }

        return (
          <div key={index}>
            <h3 style={{ color: color[0] }}>
              Rent Rs. {item.Rent}
            </h3>

            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;