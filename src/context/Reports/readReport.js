// Get API call for one specific report

const jsonRequest = {
  userId: 1,
  userToken: "12345",
  reportId: 1,
};

const jsonResponse = {
  reportInformation: {
    rooms: ["Office 101", "Office 202"],
    sensor: "Temperature",
    // time range format will change in the future
    timeRange: "2019-10-02 / 2019-11-02",
    reportType: "CSV",
    chartType: "Line",
    analyticsType: "Average",
    reportTitle: "Office 101 Monthly Report",
    createdAt: "2019-11-31",
    graphData: {
      // ...
    },
  },
};
