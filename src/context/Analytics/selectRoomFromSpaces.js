// NEEDS REVISION
// ASK UI/UX WHAT GRAPH INFORMATION IS NEEDED FOR ANALYTICS
// AND HOW DOES IT DIFFER FROM OVERVIEW

const jsonRequest = {
  userId: 1,
  userToken: "12345",
  spaceId: 1,
  roomId: 1,
  dateStart: "2020-11-23",
  dateEnd: "2020-11-03",
};

const jsonResponse = {
  // value is either in the format of data1, data2, or data3 below
  // data 1 = day
  graphDataDay: data1,
  // data 2 = week
  graphDataWeek: data2,
  // data 3 = month
  graphDataMonth: data3,
  // graph sidebar
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
