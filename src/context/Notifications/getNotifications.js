// Get API call to retrieve notifications for a specific space

const jsonRequest = {
  username: "testuser",
  userToken: "12345",
  spaceId: 1,
};

// if 1st floor has new notifications (processed on backend), send it back to us, but if not, send us an empty array
const jsonResponse = [
  {
    id: 1,
    msg: "Room 105 has a consistent pattern of lighting waste in past 24 hours!",
    date: "Today - 6:28 PM",
    room: "Room 105",
    alertType: "Lighting Waste",
    read: false,
  },
  {
    id: 2,
    msg: "Room 205 has a consistent pattern of H/C waste in past 24 hours!!",
    date: "Today - 6:28 PM",
    room: "Room 205",
    alertType: "H/C Waste",
    read: false,
  },
  {
    id: 3,
    msg: "Room 305 is normal!",
    date: "Today - 6:28 PM",
    room: "Room 305",
    alertType: "C02 Reduction",
    read: false,
  },
];
