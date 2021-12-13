// Post API call to generate report

const jsonRequest = {
  userId: 1,
  userToken: "12345",
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
  },
};

const jsonResponseSuccess = {
  success: true,
  message: "Report was successfully created",
};

const jsonResponseFail = {
  success: false,
  message: "Could not create report",
};
