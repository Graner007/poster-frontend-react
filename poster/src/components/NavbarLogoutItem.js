import { ReactComponent as ThreeDots } from "../icons/threedots.svg";
import NavbarLogoutDropdown from "./NavbarLogoutDropdown";
import DropdownItem from "./DropdownItem";
import { useState } from "react";

const NavbarLogoutItem = (props) => {
  const [open, setOpen] = useState(false);
  const imageUrl = "http://localhost:8080/media/";

  return (
    <div className="navbar-logout-container">
      <div className="navbar-profile-container" onClick={() => setOpen(!open)}>
        <img
          src={
            props.profileImageId != null
              ? imageUrl + props.profileImageId
              : imageUrl + "default-image"
          }
          className="navbar-profile-picture"
          alt={props.name}
        />
        <div className="navbar-profile-name">{props.name}</div>
        <div className="navbar-profile-dots">{<ThreeDots />}</div>
      </div>
      <div>
        {open && (
          <NavbarLogoutDropdown>
            <DropdownItem href="/logout" text="Logout" />
          </NavbarLogoutDropdown>
        )}
      </div>
    </div>
  );
};

export default NavbarLogoutItem;
