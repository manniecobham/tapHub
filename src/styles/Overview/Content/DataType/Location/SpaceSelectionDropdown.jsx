import React, { useContext } from "react";
import { SpaceSelectionDropdownContainer } from "../../../../../styles/Overview/Content/DataType/Location/Location.styled";
import checkmark from "../../../../../images/Overview/checkmark.svg";
import searchIcon from "../../../../../images/Overview/searchIcon.svg";
import Context from "../../../../../context/context";
// Replace spaces with actual spaces once backend / dsda gets that data set up

const SpaceSelectionDropdown = (props) => {
  const context = useContext(Context);
  const spaceName = context["userData"]["devices"][0]["name"];
  return (
    <SpaceSelectionDropdownContainer>
      <form>
        <div>
          <img src={searchIcon} alt="?" />
          <input type="text" placeholder="Search" />
        </div>
      </form>
      <ul className="spacelist">
        <li className="spacelist__item spacelist__item--active">
          <button>
            <p>{spaceName}</p>
            <img src={checkmark} alt="check" />
          </button>
        </li>
        <li className="spacelist__item">
          <button>1st Floor</button>
        </li>
        <li className="spacelist__item">
          <button>2nd Floor</button>
        </li>
        <li className="spacelist__item">
          <button>3rd Floor</button>
        </li>
      </ul>
    </SpaceSelectionDropdownContainer>
  );
};

export default SpaceSelectionDropdown;
