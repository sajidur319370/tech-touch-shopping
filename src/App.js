import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header></Header>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
