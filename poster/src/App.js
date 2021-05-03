import PostList from "./components/PostList";
import PersonContextProvider from "./contexts/PersonContext";
import PostContextProvider from "./contexts/PostContext";

function App() {
  return (
    <div className="container">
      <PostContextProvider>
        <PersonContextProvider>
          <PostList />
        </PersonContextProvider>
      </PostContextProvider>
    </div>
  );
}

export default App;