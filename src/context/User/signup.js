// WORK ON BACKEND WITH THIS TASK
// NOT FINAL

// POST API call for signing user up

const jsonRequest = {
  username: "testuser",
  password: "password",
  email: "testuser@gmail.com",
  fullName: "test user",
};

const jsonResponseSuccess = {
  success: true,
  message: "User is successfully created",
};

const jsonResponseFailureType1 = {
  success: false,
  message: "User already exists",
};

const jsonResponseFailureType2 = {
  success: false,
  message: "User could not be created",
};
