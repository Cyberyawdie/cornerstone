import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Empowering Future Healthcare Leaders</h2>
          <h3>Coming soon...</h3>
        </header>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
