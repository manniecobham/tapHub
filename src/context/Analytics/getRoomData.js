// Get API call to retrieve room data between start and end date for a specfic space
// NEEDS REVISION
// ASK UI/UX WHAT GRAPH INFORMATION IS NEEDED FOR ANALYTICS

const jsonRequest = {
  userId: 1,
  userToken: "12345",
  spaceId: 1,
  roomId: 1,
  dateStart: "2020-11-23",
  dateEnd: "2020-11-03",
};

const jsonResponse = {
  data: {
    // graph data created by BACKEND between start and end date
  },
  // graph sidebar data created by BACKEND between start and end date
  graphMetrics: [
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
      title: "Temperature",
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
};
