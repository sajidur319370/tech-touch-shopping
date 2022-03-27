import "./App.css";
import Answer from "./components/Answer/Answer";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header></Header>
        <Shop></Shop>
        <Answer></Answer>
      </div>
    </div>
  );
}

export default App;
