import React, { useRef, useEffect, useState, useContext } from "react";
import instahubImage from "../../../../../images/Overview/instahub-office.png";
import instaHubBuilding from "../../../../../images/Overview/instahubBuilding.png";
import imageIcon from "../../../../../images/Overview/imageIcon.svg";
import mapIcon from "../../../../../images/Overview/mapIcon.svg";
import {
  ToggleGroup,
  ToggleButton,
} from "../../../../../styles/UI/Toggle.styled";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../../../styles/UI/Card.styled";
import Button from "../../../../../styles/UI/Button.styled";
import { Dropdown } from "../../../../../styles/Overview/Header/Dropdown.styled";
import {
  SpaceSelectionContainer,
  SpaceSelectionDropdownContainer,
} from "../../../../../styles/Overview/Content/DataType/Location/Location.styled";
import State from "./State";
import { useTheme } from "styled-components";
import profileDropdownButton from "../../../../../images/Overview/profileDropdownButton.svg";
import ProfileDropdown from "../../../Header/Profile/ProfileDropdown";
import selectionDropdownIcon from "../../../../../images/Overview/selectionDropdownIcon.svg";
import SpaceSelectionDropdown from "../../../../../styles/Overview/Content/DataType/Location/SpaceSelectionDropdown";

const Location = (props) => {
  const theme = useTheme();
  const titleSize = theme.typography.headerSize;
  const bgColor = theme.colors.colorSecondaryWhite;
  const [firstIconIsActive, setFirstIconIsActive] = useState(true);
  const [secondIconIsActive, setSecondIsActive] = useState(false);
  const ref = useRef();
  const [spaceDropdownIsShown, setSpaceDropdownIsShown] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        spaceDropdownIsShown &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setSpaceDropdownIsShown(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [spaceDropdownIsShown]);

  const onSpaceSelectionClick = () => {
    setSpaceDropdownIsShown((prevState) => {
      return !prevState;
    });
  };

  const onClickFirst = () => {
    setFirstIconIsActive(true);
    setSecondIsActive(false);
  };

  const onClickSecond = () => {
    setSecondIsActive(true);
    setFirstIconIsActive(false);
  };

  return (
    <Card
      backgroundColor={
        firstIconIsActive && !secondIconIsActive
          ? bgColor
          : theme.colors.colorPrimaryNeutralBlue
      }
      className={`${props.classes}`}
    >
      <CardHeader>
        <SpaceSelectionContainer ref={ref}>
          <Button onClick={onSpaceSelectionClick}>
            <h2>InstaHub Office</h2>
            <img className={``} src={selectionDropdownIcon} alt="^" />
          </Button>
          <Dropdown>
            {spaceDropdownIsShown && <SpaceSelectionDropdown />}
          </Dropdown>
        </SpaceSelectionContainer>
        <div style={{ display: "flex" }}>
          <ToggleGroup>
            <ToggleButton
              className={firstIconIsActive ? "active" : null}
              onClick={onClickFirst}
            >
              <img
                src={imageIcon}
                alt="image"
                className={firstIconIsActive ? "filterBlack" : "filterGray"}
              />
            </ToggleButton>
            <ToggleButton
              className={secondIconIsActive ? "active" : null}
              onClick={onClickSecond}
            >
              <img
                src={mapIcon}
                alt="map"
                className={secondIconIsActive ? "filterBlack" : "filterGray"}
              />
            </ToggleButton>
          </ToggleGroup>
          <State stateAbbr={"PA"} />
        </div>
      </CardHeader>
      <CardContent>
        {firstIconIsActive && (
          <img src={instaHubBuilding} alt="location" className="img" />
        )}
        {secondIconIsActive && (
          <img src={instahubImage} alt="location" className="img" />
        )}
      </CardContent>
    </Card>
  );
};

export default Location;
