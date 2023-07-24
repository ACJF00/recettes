import "./index.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="App flex flex-col justify-center gap-4">
      <Header />
      <Recipes />
    </div>
  );
}

export default App;
