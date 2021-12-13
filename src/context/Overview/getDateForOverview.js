// Get API call for the overview data for a specific date

const jsonRequest = {
  userId: 1,
  userToken: "12345",
  date: "2019-11-12",
  spaceId: 2,
};

const jsonResponse = {
  space: {
    name: "Floor 1",
  },
  rooms: [
    {
      roomName: "Room 1",
      roomId: 1,
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
