
import './App.css';

import Hades from "./pages/Hades/Hades";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Hades />
    </div>
  );
}

export default App;
