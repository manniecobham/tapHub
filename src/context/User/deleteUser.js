// Post API call for deleting user
// not a priority

const jsonRequest = {
  userId: 1,
  userToken: "12345",
  // password for confirmation - if wrong password, account is not deleted
  password: "password",
};

const jsonResponseSuccess = {
  success: true,
  message: "Your account has been deleted",
};

const jsonResponseFailure = {
  success: false,
  message: "Your account could not be deleted",
};
