import React from "react";
import classes from "./Profile.module.css";
import profile from "../../../images/profile.png";

const Profile = () => {
  return <img src={profile} alt="photo" className={`${classes.profile}`} />;
};

export default Profile;
