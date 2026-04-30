import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <footer className="site-footer">
        <span>© 2026 Daniel Sosa Merino</span>
        <span>Bachelor Informatique &amp; Tech </span>
      </footer>
    </>
  );
}

export default App;
