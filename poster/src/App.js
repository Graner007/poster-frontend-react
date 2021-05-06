import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import useWindowSize from "./util/useWindowSize";
import BottomNavbar from "./components/BottomNavbar";
import PersonContextProvider from "./contexts/PersonContext";
import PostContextProvider from "./contexts/PostContext";
import MediaContextProvider from "./contexts/MediaContext";
import HomeHeader from "./components/HomeHeader";
import RightSidebar from "./RightSidebar";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

function App() {
  const [width, height] = useWindowSize();
  const headerTitle = "Home";

  return (
    <PersonContextProvider>
      <Router>
            { width > 500 && <Navbar /> }
            { width <= 500 && <BottomNavbar /> }
            <div className="container">
              <HomeHeader title={ headerTitle } />
              <PostContextProvider>
                <MediaContextProvider>
                  <Switch>
                  <Route path="/home" exact>
                    <Feed />
                  </Route>
                  <Route path="/profile/:id" exact>
                    <Profile />
                  </Route>
                  </Switch>
                </MediaContextProvider>
              </PostContextProvider>
            </div>
            { width > 1018 && <RightSidebar /> }
      </Router>
    </PersonContextProvider>
  );
}

export default App;
