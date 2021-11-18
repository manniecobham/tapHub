import React from "react";

const Context = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  userData: {
    username: "testuser",
    notifications: {
      1: {
        msg: "Room 105 has a consistent pattern of lighting waste in past 24 hours.",
        date: "Today: 5:27pm",
        room: "Room 105",
        analyticType: "Lighting Waste",
      },
      2: {
        msg: "Room 205 has an irregular pattern of H/C waste in past 48 hours.",
        date: "Today: 7:00am",
        room: "Room 205",
        analyticType: "H/C Waste",
      },
    },
    floors: {
      first: {
        rooms_occupied: 10,
        co2_reduction: 20,
        light_wasted: 50,
        hc_wasted: 200,
        rooms: {
          101: {
            data: {
              //graph data
            },
          },
          102: {
            data: {
              //graph data
            },
          },
        },
      },
    },
  },
});

export default Context;
