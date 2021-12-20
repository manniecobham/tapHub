// PUT API call to change the notification from false to read in database

// Database should have a read field to know whether a notification has been read
const jsonRequest = {
  username: "testuser",
  userToken: "12345",
  spaceId: 1,
  notification: {
    id: 1,
    read: true,
  },
};

// if 1st floor has new notifications (processed on backend), send it back to us, but if not, send us an empty array
const jsonResponse = {
  success: true,
};
