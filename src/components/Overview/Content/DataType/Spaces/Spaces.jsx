import React, { useRef, useEffect, useState } from "react";

import instahubImage from "../../../../../images/Overview/instahub-office.png";
import instaHubBuilding from "../../../../../images/Overview/instahubBuilding.png";
import imageIcon from "../../../../../images/Overview/imageIcon.svg";
import mapIcon from "../../../../../images/Overview/mapIcon.svg";
import selectionDropdownIcon from "../../../../../images/Overview/selectionDropdownIcon.svg";
import { ToggleGroup } from "../../../../../styles/UI/Toggle.styled";
import { Card } from "../../../../../styles/UI/Card.styled";
import Button from "../../../../../styles/UI/Button.styled";
import { Dropdown } from "../../../../../styles/Navbar/Dropdown.styled";
import { SpaceSelectionContainer } from "../../../../../styles/Overview/Content/DataType/Spaces/Spaces.styled";
import { useTheme } from "styled-components";
import SpaceSelectionDropdown from "./SpaceSelectionDropdown";

import State from "./State";

const Spaces = (props) => {
  const theme = useTheme();
  // const titleSize = theme.typography.headerSize;
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
        firstIconIsActive && !secondIconIsActive ? bgColor : "azure"
      }
      className={`card ${props.classes}`}
    >
      <div className="card__header card__header-spaces">
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
          <ToggleGroup className="toggle-group">
            <button
              className={`toggle-group__button ${
                firstIconIsActive ? "active" : null
              }`}
              onClick={onClickFirst}
            >
              <img
                src={imageIcon}
                alt="icon"
                className={firstIconIsActive ? "filterBlack" : "filterGray"}
              />
            </button>
            <button
              className={`toggle-group__button ${
                secondIconIsActive ? "active" : null
              }`}
              onClick={onClickSecond}
            >
              <img
                src={mapIcon}
                alt="map"
                className={secondIconIsActive ? "filterBlack" : "filterGray"}
              />
            </button>
          </ToggleGroup>
          <State stateAbbr={"PA"} />
        </div>
      </div>
      <div className="card__content">
        {firstIconIsActive && (
          <img src={instaHubBuilding} alt="location" className="img" />
        )}
        {secondIconIsActive && (
          <img src={instahubImage} alt="location" className="img" />
        )}
      </div>
    </Card>
  );
};

export default Spaces;
