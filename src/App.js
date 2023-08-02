import "./index.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="App flex flex-col justify-center gap-4 pb-10">
      <Header />
      <Search />
    </div>
  );
}

export default App;
