// Get API call for one specific report

const jsonRequest = {
  username: "testuser",
  userToken: "ewioehwuihiwuqh4wuih4wuih",
  reportId: 1,
};

const jsonResponse = {
  reportInformation: {
    rooms: ["office 101", "office 202"],
    sensor: "temperature",
    // time range format will change in the future
    timeRange: "2019-10-02 - 2019-11-02",
    reportType: "CSV",
    chartType: "line",
    analyticsType: "average",
    reportsTitle: "Office 101 Monthly Report",
    createdAt: "2019-11-31",
    graphData: {
      // ...
    },
  },
};
