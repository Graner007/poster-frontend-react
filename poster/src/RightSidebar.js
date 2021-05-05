import SearchBar from "./components/SearchBar";
import FollowSidebar from "./components/FollowSidebar";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <SearchBar />
      <FollowSidebar />
    </div>
  );
};

export default RightSidebar;
