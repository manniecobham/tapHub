// Get API call to retrieve overview data information for a specified space

const jsonRequest = {
  userId: 1,
  userToken: "12345",
  spaceId: 1,
};

const jsonResponse = {
  space: {
    spaceId: 1,
    spaceName: "InstaHub Office",
    setOfDevices: {
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
  },
};
