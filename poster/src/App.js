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

function App() {
  const [width, height] = useWindowSize();

  return (
<Router>
    <div className="container">
      <HomeHeader />
      <PostContextProvider>
        <PersonContextProvider>
          <MediaContextProvider>
          {width > 500 && <Navbar />}
          {width <= 500 && <BottomNavbar />}
            <AddPost />
            <SpaceAfterAddPost />
            <PostList />
          </MediaContextProvider>
        </PersonContextProvider>
      </PostContextProvider>
    </div>
    </Router>
  );
}

export default App;
