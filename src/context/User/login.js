// Post API call for logging user in

const jsonRequest = {
  username: "testuser",
  password: "password",
};

// FOR BACKEND: WILL WE GET MORE THAN ONE TOKEN BACK?
const jsonResponseSuccess = {
  success: true,
  userId: 1,
  userToken: "12345",
  defaultSpaceId: 1,
};

const jsonResponseFailure = {
  success: false,
};
