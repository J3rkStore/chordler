import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let navigate = useNavigate();
  return (
    <div className="navigation-container">
      <header>
        <h2> nav bar goes below </h2>
      </header>
      <ul className="nav-list">
        <li>
          <p className="nav-item" onClick={() => navigate("/")}>
            Home
          </p>
        </li>
        <li>
          <p className="nav-item" onClick={() => navigate("/links")}>
            Links
          </p>
        </li>
        <li>
          <p className="nav-item" onClick={() => navigate("/scales")}>
            Scales and Chords
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
