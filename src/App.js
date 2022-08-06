import "./App.css";
import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Glance from "./Components/Glance";
import Footer from "./Components/Footer";
function App() {
  return (
    /* <div className="App">
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
    </div>*/
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Glance />
      <Footer />
    </div>
  );
}

export default App;
