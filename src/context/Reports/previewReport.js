// Get API call for one specific report for preview

const jsonRequest = {
  userId: 1,
  userToken: "12345",
  reportId: 1,
};

const jsonResponse = {
  reportInformation: {
    rooms: ["Office 101", "Office 202"],
    sensor: "Temperature",
    dateStart: "2020-11-23",
    dateEnd: "2020-11-03",
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
