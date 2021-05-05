import PostList from "./components/PostList";
import PersonContextProvider from "./contexts/PersonContext";
import PostContextProvider from "./contexts/PostContext";
import MediaContextProvider from "./contexts/MediaContext";
import AddPost from "./components/AddPost";
import HomeHeader from "./components/HomeHeader";
import SpaceAfterAddPost from "./components/SpaceAfterAddPost";

function App() {
  return (
    <div className="container">
      <HomeHeader />
      <PostContextProvider>
        <PersonContextProvider>
          <MediaContextProvider>
            <AddPost />
            <SpaceAfterAddPost />
            <PostList />
          </MediaContextProvider>
        </PersonContextProvider>
      </PostContextProvider>
    </div>
  );
}

export default App;