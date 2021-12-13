// Post API call for deleting user

const jsonRequest = {
  username: "testuser",
  userToken: "ewioehwuihiwuqh4wuih4wuih",
  // password for confirmation - if wrong password, account is not deleted
  password: "password",
};

const jsonResponse = {
  // Either success or failure
  message: "Your account has been deleted",
};
