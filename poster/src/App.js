import PostList from "./components/PostList";
import PersonContextProvider from "./contexts/PersonContext";
import PostContextProvider from "./contexts/PostContext";
import MediaContextProvider from "./contexts/MediaContext";

function App() {
  return (
    <div className="container">
      <PostContextProvider>
        <PersonContextProvider>
          <MediaContextProvider>
            <PostList />
          </MediaContextProvider>
        </PersonContextProvider>
      </PostContextProvider>
    </div>
  );
}

export default App;