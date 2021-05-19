import NavbarItem from "./NavbarItem";
import NavbarLogoutItem from "./NavbarLogoutItem";
import { ReactComponent as HomeIcon } from "../icons/homeicon.svg";
import { ReactComponent as SearchIcon } from "../icons/searchicon.svg";
import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";

const Navbar = () => {
  const { currentPerson } = useContext(PersonContext);

  return (
    <div className="navbar">
      <div className="navbar-item-container">
        <NavbarItem to="/home" icon={<HomeIcon />} text="Home" />
        <NavbarItem to="/explore" icon={<SearchIcon />} text="Explore" />
      </div>

      {/*TODO: Implement with login and registration */}
      <NavbarLogoutItem
        src={ currentPerson.profileImageRoute }
        name={ currentPerson.username }
      />
    </div>
  );
};

export default Navbar;
