// Post API call to generate report

const jsonRequest = {
  userId: 1,
  userToken: "12345",
  reportInformation: {
    rooms: ["Office 101", "Office 202"],
    sensor: "Temperature",
    // time range format will change in the future
    dateStart: "2020-11-23",
    dateEnd: "2020-11-03",
    reportType: "CSV",
    chartType: "Line",
    analyticsType: "Average",
    reportTitle: "Office 101 Monthly Report",
    // Should created at this be generated in backend or frontend?
    createdAt: "2019-11-31",
  },
};

const jsonResponse = {
  success: true,
};
