import logo from "./hello-world.png";
import "./App.css";

function App() {
  const src = "https://powerlesha.github.io/online-training/#/";

  return (
    <div className="App">
      <header className="App-header">
        <p>For internship</p>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world</h1>

        <p>
          P/S
          <a
            className="App-link"
            href="https://powerlesha.github.io/online-training/#/"
          >
            See my website built with React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
