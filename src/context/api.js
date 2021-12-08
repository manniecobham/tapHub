// Used for dummy data. Not needed once api calls are implemented.
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
  // Nov 29 For Backend: Don't worry about metric tooltip information for now
  metricTooltipInformation: {
    co2Reduction: "",
    lightWasted: "",
  },
  devices: [
    {
      name: "Test Office",
      id: 1,
      metrics: {
        roomsOccupied: {
          currentOccupied: 99,
          totalDevices: 99,
        },
        co2Reduction: {
          avgLbsPerWk: 99,
          relChange: 99,
        },
        lightWasted: {
          avgHoursPerWk: 99,
          relChange: 99,
        },
        hcWasted: {
          avgDollarsPerWk: 99,
          relChange: 99,
        },
      },
      metricAverages: [
        {
          title: "Space Utilization",
          data: {
            // currPercentOccupied: 52,
            current: 52,
            // relChangePerDay: 2.1,
            changeComfort: 2.1,
          },
        },
        {
          title: "temperature",
          data: {
            // currAvgTemp: 52,
            current: 65,
            // relChangePerDay: 2.1,
            changeComfort: 4.1,
          },
        },
        {
          title: "Light Usage",
          data: {
            // currAvgMinPerMonth: 10,
            current: 10,
            // relChangePerMonth: 2.1,
            changeComfort: 3,
          },
        },
        {
          title: "Humidity",
          data: {
            // currAvg: 52,
            current: 45,
            // comfortLevel: "Comfort",
            changeComfort: "Comfortable",
          },
        },
        {
          title: "Pressure",
          data: {
            // currAvg: 52,
            current: 70,
            // pressureLevel: "Normal",
            changeComfort: "Normal",
          },
        },
      ],
    },
  ],
};

export default jsonResponse;
