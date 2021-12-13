// PUT API call to change the notification from false to read in database

const jsonRequest = {
  username: "testuser",
  userToken: "ewioehwuihiwuqh4wuih4wuih",
  space: "1st Floor",
  notification: {
    id: 1,
    read: true,
  },
};

// if 1st floor has new notifications (processed on backend), send it back to us, but if not, send us an empty array
const jsonResponse = {
  // Fail or success
  message: "Success",
};
