import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import useWindowSize from "./util/useWindowSize";
import BottomNavbar from "./components/BottomNavbar";
import PersonContextProvider from "./contexts/PersonContext";
import PostContextProvider from "./contexts/PostContext";
import MediaContextProvider from "./contexts/MediaContext";
import HomeHeader from "./components/HomeHeader";
import RightSidebar from "./RightSidebar";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Index from "./components/Index";
import Login from "./components/Login";
import EditProfile from "./components/EditProfile";
import Logout from "./components/Logout";
import { useLocation } from "react-router-dom";
import Error from "./components/Error";
import Registration from "./components/Registration";

function App() {
  const [width] = useWindowSize();
  //const url = document.location.pathname;
  const url = useLocation().pathname;
  const headerTitle = "Home";
  const contentRoutes = ["/registration", "/login", "/", "logout"];

  return (
    <PersonContextProvider>
      <PostContextProvider>
        <MediaContextProvider>
          {!contentRoutes.includes(url) && width > 500 && <Navbar />}
          {!contentRoutes.includes(url) && width <= 500 && <BottomNavbar />}
          <div
            className={!contentRoutes.includes(url) ? "container" : "content"}
          >
            {!contentRoutes.includes(url) && <HomeHeader title={headerTitle} />}
            <Switch>
              <Route path="/home" exact>
                <Feed />
              </Route>
              <Route path="/profile/:id" exact>
                <Profile />
              </Route>
              <Route path="/settings/profile" exact>
                <EditProfile />
              </Route>
              <Route path="/logout" exact>
                <Logout />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/registration" exact>
                <Registration />
              </Route>
              <Route path="/" exact>
                <Index />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </div>
          {width > 1018 && !contentRoutes.includes(url) && <RightSidebar />}
        </MediaContextProvider>
      </PostContextProvider>
    </PersonContextProvider>
  );
}

export default App;
