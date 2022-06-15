import logo from "./logo.svg";
import "./App.css";
import {Helmet} from "react-helmet";
import { Counter } from "./features/counter/Counter";


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Student Portal</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="author" content="Creating Student Online Portal" />
      </Helmet>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
