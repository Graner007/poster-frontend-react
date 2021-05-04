import NavbarItem from "./NavbarItem";
import NavbarLogoutItem from "./NavbarLogoutItem";
import { ReactComponent as HomeIcon } from "../icons/homeicon.svg";
import { ReactComponent as SearchIcon } from "../icons/searchicon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item-container">
        <NavbarItem to="/home" icon={<HomeIcon />} text="Home" />
        <NavbarItem to="/explore" icon={<SearchIcon />} text="Explore" />
      </div>
      <NavbarLogoutItem href="/profile.png" name="dummy" />
    </div>
  );
};

export default Navbar;
