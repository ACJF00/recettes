import "./index.css";
import Header from "./components/Header";
// import Recipes from "./components/Recipes";
import Search from "./components/Search";

function App() {
  return (
    <div className="App flex flex-col justify-center gap-4">
      <Header />
      <Search />
      {/* <Recipes /> */}
    </div>
  );
}

export default App;
