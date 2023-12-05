import "./css/app.css";
// import "./css/scales.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Scales from "./pages/Scales";

function App() {
  return (
    //jsx fragment shown with the <></> element that wraps both divs.  All JSX components need a parent element (in common?)
    <div className="components">
      <Header />
      <Router>
        <Navigation />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/links" element={<Links />} />
            <Route path="/scales" element={<Scales />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
