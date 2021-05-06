import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import useWindowSize from "./util/useWindowSize";
import BottomNavbar from "./components/BottomNavbar";
import PostList from "./components/PostList";
import PersonContextProvider from "./contexts/PersonContext";
import PostContextProvider from "./contexts/PostContext";
import MediaContextProvider from "./contexts/MediaContext";
import AddPost from "./components/AddPost";
import HomeHeader from "./components/HomeHeader";
import SpaceAfterAddPost from "./components/SpaceAfterAddPost";
import RightSidebar from "./RightSidebar";
import Profile from "./components/Profile";

function App() {
  const [width, height] = useWindowSize();
  const headerTitle = "Home";
  let id = 1;

  return (
    <PersonContextProvider>
      <Router>
        { width > 500 && <Navbar /> }
        { width <= 500 && <BottomNavbar /> }
        <div className="container">
          <HomeHeader title={ headerTitle } />
          <PostContextProvider>
            <MediaContextProvider>
              {/* <AddPost />
              <SpaceAfterAddPost />
              <PostList /> */}
              <Profile id={ id } />
            </MediaContextProvider>
          </PostContextProvider>
        </div>
        { width > 1018 && <RightSidebar /> }
      </Router>
    </PersonContextProvider>
  );
}

export default App;
