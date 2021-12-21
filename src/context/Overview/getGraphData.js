// Get API call used for getting graph data for Overview page

const jsonRequest = {
  username: "testuser",
  userToken: "12345",
  spaceId: 1,
  startDate: "2020-11-02",
  type: "Temperature",
};

const jsonResponseSpace = {
  graphMetrics: [
    {
      title: "Space Utilization",
      tabData: {
        // currPercentOccupied
        value1: 52,
        // relChangePerDay
        value2: 2.1,
      },
      graphData: {
        graphDataDay: data1,
        graphDataWeek: data2,
        graphDataMonth: data3,
      },
    },
  ],
};

const jsonResponseTemperature = {
  graphMetrics: [
    {
      title: "Temperature",
      tabData: {
        // currAvgTemp
        value1: 65,
        // relChangePerDay
        value2: 4.1,
      },
      graphData: {
        graphDataDay: data1,
        graphDataWeek: data2,
        graphDataMonth: data3,
      },
    },
  ],
};

const jsonResponseLight = {
  graphMetrics: [
    {
      title: "Light Usage",
      tabData: {
        // currAvgMinPerMonth
        value1: 10,
        // relChangePerMonth
        value2: 3,
      },
      graphData: {
        graphDataDay: data1,
        graphDataWeek: data2,
        graphDataMonth: data3,
      },
    },
  ],
};

const jsonResponseHumidity = {
  graphMetrics: [
    {
      title: "Humidity",
      tabData: {
        // currAvg
        value1: 45,
        // comfortLevel
        value2: "Comfortable",
      },
      graphData: {
        graphDataDay: data1,
        graphDataWeek: data2,
        graphDataMonth: data3,
      },
    },
  ],
};

const jsonResponsePressure = {
  graphMetrics: [
    {
      title: "Pressure",
      tabData: {
        // currAvg
        value1: 70,
        // pressureLevel
        value2: "Normal",
      },
      graphData: {
        graphDataDay: data1,
        graphDataWeek: data2,
        graphDataMonth: data3,
      },
    },
  ],
};

// data1, data2, data3 are just different lengths of data sets (day, week, month)
const data1 = [
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
];

const data2 = [
  {
    name: "Feature 1",
    data: [
      {
        x: "1",
        y: 4,
      },
      {
        x: "2",
        y: 13,
      },
      {
        x: "3",
        y: 27,
      },
      {
        x: "4",
        y: 15,
      },
    ],
  },
];

const data3 = [
  {
    name: "Feature 1",
    data: [
      {
        x: "January",
        y: 21,
      },
      {
        x: "February",
        y: 35,
      },
      {
        x: "March",
        y: 3,
      },
      {
        x: "April",
        y: 50,
      },
      {
        x: "May",
        y: 12,
      },
      {
        x: "June",
        y: 27,
      },
      {
        x: "July",
        y: 32,
      },
      {
        x: "August",
        y: 11,
      },
      {
        x: "September",
        y: 46,
      },
      {
        x: "October",
        y: 23,
      },
      {
        x: "November",
        y: 6,
      },
      {
        x: "December",
        y: 4,
      },
    ],
  },
];
