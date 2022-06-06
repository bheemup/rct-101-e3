import "./App.css";
import RequiredAuth from "./hoc/RequiredAuth"

function App() {
  return (
    <div className="App">
    <RequiredAuth/>
    </div>
  );
}

export default App;
