const jsonResponse = {
  username: "testuser",
  userToken: "ewioehwuihiwuqh4wuih4wuih",
  newNotifications: true,
  notifications: [
    {
      id: 1,
      msg: "Room 105 has a consistent pattern of lighting waste in past 24 hours!",
      date: "Today - 6:28 PM",
      room: "Room 105",
      alertType: "Lighting Waste",
      read: false,
    },
    {
      id: 2,
      msg: "Room 205 has a consistent pattern of H/C waste in past 24 hours!!",
      date: "Today - 6:28 PM",
      room: "Room 205",
      alertType: "H/C Waste",
      read: false,
    },
    {
      id: 3,
      msg: "Room 305 is normal!",
      date: "Today - 6:28 PM",
      room: "Room 305",
      alertType: "C02 Reduction",
      read: false,
    },
  ],
  location: {
    metrics: {
      rooms_occupied: 10,
      co2_reduction: 20,
      light_wasted: 50,
      hc_wasted: 200,
    },
    relativeChange: {
      relChangeCo2: 35,
      relChangeLight: 6.5,
      relChangeHC: 12.6,
    },
    metricAverages: {
      spaceUtilization: 52,
      temperature: 68,
      lightUsage: 60,
      humidity: 40,
      pressure: 101,
    },
  },
};

export default jsonResponse;
