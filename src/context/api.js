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
      metrics: [
        {
          roomsOccupied: {
            // currentOccupied
            value1: 99,
            // totalDevices
            value2: 99,
          },
        },
        {
          co2Reduction: {
            // avgLbsPerWk
            value1: 99,
            // relChange
          },
        },
        {
          lightWasted: {
            // avgHoursPerWk
            value1: 99,
            // relChange
            value2: 99,
          },
        },
        {
          hcWasted: {
            // avgDollarsPerWk
            value1: 99,
            // relChange
            value2: 99,
          },
        },
      ],
      metricAverages: [
        {
          title: "Space Utilization",
          data: {
            // currPercentOccupied
            value1: 52,
            // relChangePerDay
            value2: 2.1,
          },
        },
        {
          title: "temperature",
          data: {
            // currAvgTemp
            value1: 65,
            // relChangePerDay
            value2: 4.1,
          },
        },
        {
          title: "Light Usage",
          data: {
            // currAvgMinPerMonth
            value1: 10,
            // relChangePerMonth
            value2: 3,
          },
        },
        {
          title: "Humidity",
          data: {
            // currAvg
            value1: 45,
            // comfortLevel
            value2: "Comfortable",
          },
        },
        {
          title: "Pressure",
          data: {
            // currAvg
            value1: 70,
            // pressureLevel
            value2: "Normal",
          },
        },
      ],
    },
  ],
};

export default jsonResponse;
