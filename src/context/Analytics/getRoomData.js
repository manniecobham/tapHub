// Get API call to retrieve room data between start and end date for a specfic space
// NEEDS REVISION
// ASK UI/UX WHAT GRAPH INFORMATION IS NEEDED FOR ANALYTICS

const jsonRequest = {
  username: "testuser",
  userToken: "12345",
  spaceId: 1,
  roomId: 1,
  dateStart: "2020-11-23",
  dateEnd: "2020-11-03",
  //based on id of sensor
  type: 1,
};

// ID 1 = space utilization
// ID 2 = temperature
// ID 3 = light
const jsonResponse = {
  floorPlan: "img",
  graphMetrics: [
    {
      id: 1,
      title: "Space Utilization",
      tabData: {
        // currPercentOccupied
        value1: 52,
        // relChangePerDay
        value2: 2.1,
      },
      graphData: [
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 45,
            },
            {
              x: "Tuesday",
              y: 24,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 3,
            },
            {
              x: "Friday",
              y: 45,
            },
            {
              x: "Saturday",
              y: 12,
            },
            {
              x: "Sunday",
              y: 50,
            },
          ],
        },
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 12,
            },
            {
              x: "Tuesday",
              y: 6,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 21,
            },
            {
              x: "Friday",
              y: 11,
            },
            {
              x: "Saturday",
              y: 35,
            },
            {
              x: "Sunday",
              y: 45,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Temperature",
      tabData: {
        // currAvgTemp
        value1: 65,
        // relChangePerDay
        value2: 4.1,
      },
      graphData: [
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 45,
            },
            {
              x: "Tuesday",
              y: 24,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 3,
            },
            {
              x: "Friday",
              y: 45,
            },
            {
              x: "Saturday",
              y: 12,
            },
            {
              x: "Sunday",
              y: 50,
            },
          ],
        },
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 12,
            },
            {
              x: "Tuesday",
              y: 6,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 21,
            },
            {
              x: "Friday",
              y: 11,
            },
            {
              x: "Saturday",
              y: 35,
            },
            {
              x: "Sunday",
              y: 45,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Light Usage",
      tabData: {
        // currAvgMinPerMonth
        value1: 10,
        // relChangePerMonth
        value2: 3,
      },
      graphData: [
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 45,
            },
            {
              x: "Tuesday",
              y: 24,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 3,
            },
            {
              x: "Friday",
              y: 45,
            },
            {
              x: "Saturday",
              y: 12,
            },
            {
              x: "Sunday",
              y: 50,
            },
          ],
        },
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 12,
            },
            {
              x: "Tuesday",
              y: 6,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 21,
            },
            {
              x: "Friday",
              y: 11,
            },
            {
              x: "Saturday",
              y: 35,
            },
            {
              x: "Sunday",
              y: 45,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Humidity",
      tabData: {
        // currAvg
        value1: 45,
        // comfortLevel
        value2: "Comfortable",
      },
      graphData: [
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 45,
            },
            {
              x: "Tuesday",
              y: 24,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 3,
            },
            {
              x: "Friday",
              y: 45,
            },
            {
              x: "Saturday",
              y: 12,
            },
            {
              x: "Sunday",
              y: 50,
            },
          ],
        },
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 12,
            },
            {
              x: "Tuesday",
              y: 6,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 21,
            },
            {
              x: "Friday",
              y: 11,
            },
            {
              x: "Saturday",
              y: 35,
            },
            {
              x: "Sunday",
              y: 45,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Pressure",
      tabData: {
        // currAvg
        value1: 70,
        // pressureLevel
        value2: "Normal",
      },
      graphData: [
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 45,
            },
            {
              x: "Tuesday",
              y: 24,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 3,
            },
            {
              x: "Friday",
              y: 45,
            },
            {
              x: "Saturday",
              y: 12,
            },
            {
              x: "Sunday",
              y: 50,
            },
          ],
        },
        {
          name: "Feature 1",
          data: [
            {
              x: "Monday",
              y: 12,
            },
            {
              x: "Tuesday",
              y: 6,
            },
            {
              x: "Wednesday",
              y: 37,
            },
            {
              x: "Thursday",
              y: 21,
            },
            {
              x: "Friday",
              y: 11,
            },
            {
              x: "Saturday",
              y: 35,
            },
            {
              x: "Sunday",
              y: 45,
            },
          ],
        },
      ],
    },
  ],
};
