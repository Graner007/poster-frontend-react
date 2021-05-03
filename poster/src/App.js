import PostList from "./components/PostList";
import PostContextProvider from "./contexts/PostContext";

function App() {
  return (
    <div className="container">
      <PostContextProvider>
        <PostList />
      </PostContextProvider>
    </div>
  );
}

export default App;