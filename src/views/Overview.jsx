import React from "react";
import classes from "./Overview.module.css";
import instahubImage from "../images/dummy_data/instahub-office.png";
import lightningIcon from "../images/card_data/lightning.png";
import dollarIcon from "../images/card_data/dollar.png";
import CardData from "../components/Dashboard/Canvas/CardData";

const Overview = () => {
  return (
    <div className={`${classes.overview}`}>
      <div className={`${classes.grid}`}>
        <div className={`${classes.location} ${classes["grid--item"]} card`}>
          <h2>InstaHub Office</h2>
          <img
            src={instahubImage}
            alt="location"
            className={`${classes["location"]}`}
          />
        </div>
        <div
          className={`${classes.rooms} ${classes["grid--item"]} ${classes["grid--item_small"]} card`}
        >
          <CardData
            title="Rooms Occupied"
            imageName1={lightningIcon}
            imageAlt1="lightning"
            imageName2={dollarIcon}
            imageAlt2="dollar"
            data="29"
          />
        </div>
        <div
          className={`${classes.co2} ${classes["grid--item"]} ${classes["grid--item_small"]} card`}
        >
          <CardData
            title="CO2 Reduction"
            imageName1={lightningIcon}
            imageAlt1="lightning"
            imageName2={dollarIcon}
            imageAlt2="dollar"
            data="29"
          />
        </div>
        <div
          className={`${classes.lightwaste} ${classes["grid--item"]} ${classes["grid--item_small"]} card`}
        >
          <CardData
            title="Light Wasted"
            imageName1={lightningIcon}
            imageAlt1="lightning"
            imageName2={dollarIcon}
            imageAlt2="dollar"
            data="29"
          />
        </div>
        <div
          className={`${classes.hcwaste} ${classes["grid--item"]} ${classes["grid--item_small"]} card`}
        >
          <CardData
            title="H/C Wasted"
            imageName1={lightningIcon}
            imageAlt1="lightning"
            imageName2={dollarIcon}
            imageAlt2="dollar"
            data="29"
          />
        </div>
      </div>
      <div className={`${classes.graph} ${classes["grid--item"]} card`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          imperdiet lacinia orci id viverra. Vestibulum molestie mauris at nisi
          volutpat imperdiet. Fusce sit amet massa ut nisl varius scelerisque.
          Proin ut fringilla diam, sed ullamcorper est. Nunc lorem risus,
          elementum eget ullamcorper et, interdum eu felis. Donec iaculis tellus
          in mi mollis, quis blandit sapien vestibulum. Morbi dictum mollis
          orci. Curabitur pulvinar dapibus lorem, nec hendrerit lectus finibus
          ac. Vestibulum consequat accumsan nibh. Nulla a enim ligula.
          Pellentesque in aliquet leo. Phasellus a ornare ante, maximus auctor
          quam. Duis euismod arcu a ullamcorper porttitor. Nunc lobortis nisl id
          lacus elementum ultrices. Suspendisse feugiat tempus sapien sed
          ultrices. Nam feugiat tellus at nisl efficitur, ultricies convallis
          nunc sodales. Integer mollis erat erat, et pretium libero imperdiet
          id. Curabitur congue, quam maximus sagittis lobortis, mauris enim
          interdum erat, et malesuada felis neque at felis. Nam venenatis
          eleifend finibus. Nulla tincidunt velit et tellus euismod efficitur.
          Cras sit amet elit vel erat mattis rutrum. Nam molestie libero dui,
          eget vulputate justo tincidunt et. Nunc consequat elementum mollis.
          Vivamus tortor augue, suscipit sed mattis sed, vehicula quis ex.
          Maecenas ut augue eget lacus cursus condimentum. Curabitur convallis
          mattis eros nec posuere. Etiam eget risus non mauris semper feugiat.
          Nunc dapibus velit posuere placerat sagittis. Maecenas quis risus id
          elit scelerisque cursus vitae et velit. Duis commodo justo eget justo
          condimentum, eget pulvinar dolor imperdiet. Maecenas tempor mauris ex,
          ut porta ex pharetra in. Suspendisse potenti. Proin lacinia, magna ut
          mollis gravida, quam quam convallis magna, quis sagittis erat massa at
          dui. Donec convallis dignissim interdum. Sed iaculis ac turpis eget
          eleifend. Fusce bibendum nisi orci. Pellentesque elit justo, fringilla
          eu erat sit amet, vehicula tincidunt neque. Donec orci orci, feugiat
          eu nisi eu, commodo efficitur sem. Nam id metus arcu. Pellentesque
          orci nisl, consectetur venenatis libero eu, sollicitudin semper lacus.
          Nam a ultrices massa. Quisque quis leo diam.
        </p>
      </div>
    </div>
  );
};

export default Overview;
