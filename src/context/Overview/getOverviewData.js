// Get overview page information for specified space

const jsonRequest = {
  username: "testuser",
  userToken: "ewioehwuihiwuqh4wuih4wuih",
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
    },
  ],
};
