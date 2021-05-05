import PostList from "./components/PostList";
import PersonContextProvider from "./contexts/PersonContext";
import PostContextProvider from "./contexts/PostContext";
import MediaContextProvider from "./contexts/MediaContext";
import AddPost from "./components/AddPost";

function App() {
  return (
    <div className="container">
      <PostContextProvider>
        <PersonContextProvider>
          <MediaContextProvider>
            <AddPost />
            <PostList />
          </MediaContextProvider>
        </PersonContextProvider>
      </PostContextProvider>
    </div>
  );
}

export default App;