import NavbarItem from "./NavbarItem";
import NavbarLogoutItem from "./NavbarLogoutItem";
import { ReactComponent as HomeIcon } from "../icons/homeicon.svg";
import { ReactComponent as SearchIcon } from "../icons/searchicon.svg";

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      <NavbarItem to="/home" icon={<HomeIcon />} />
      <NavbarItem to="/explore" icon={<SearchIcon />} />
      <NavbarLogoutItem />
    </div>
  );
};

export default BottomNavbar;
