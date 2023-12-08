import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <section className="greeting">
        <h2 className="home-greeting" onClick={() => navigate("/scales")}>
          Welcome to Chordler. To see the app go to Scales and Chords
        </h2>
      </section>
    </div>
  );
};

export default Home;
