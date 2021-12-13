// Get API call for the overview data for a specific date

const jsonRequest = {
  username: "testuser",
  userToken: "ewioehwuihiwuqh4wuih4wuih",
  date: "2019-11-12",
  space: "InstaHub Office",
};

const jsonResponse = {
  space: "InstaHub Office",
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
            usage: {
              // avgLbsPerWk
              value1: 99,
              // relChange
              value2: 99,
            },
            cost: {
              value1: 99,
              value2: 99,
            },
          },
        },
        {
          lightWasted: {
            usage: {
              // avgHoursPerWk
              value1: 99,
              // relChange
              value2: 99,
            },
            cost: {
              value1: 99,
              value2: 99,
            },
          },
        },
        {
          hcWasted: {
            usage: {
              // avgDollarsPerWk
              value1: 99,
              // relChange
              value2: 99,
            },
            cost: {
              value1: 99,
              value2: 99,
            },
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
    },
  ],
};
