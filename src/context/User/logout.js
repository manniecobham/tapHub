// Post API call for logging user out
// NOT SURE IF IT WILL BE A POST REQUEST

const jsonRequest = {
  userId: 1,
  userToken: "12345",
};

const jsonResponseSuccess = {
  success: true,
  message: "You have logged out",
};

const jsonResponseFailure = {
  success: false,
  message: "Unable to log out",
};
