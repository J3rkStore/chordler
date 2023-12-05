import "../css/scales.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import noteButton from "../components/NoteButtons";

const Scales = () => {
  const allNotes = [
    "A",
    "A#/B♭",
    "B",
    "C",
    "C#/D♭",
    "D",
    "D#/E♭",
    "E",
    "F",
    "F#/G♭",
    "G",
    "G#/A♭",
  ];
  const diatonicScales = [
    "ionian",
    "dorian",
    "phrygian",
    "lydian",
    "mixolydian",
    "aeolian",
    "locrian",
  ];
  const ionianPattern = ["W", "W", "H", "W", "W", "W", "H"];
  const [tonic, setTonic] = useState("");
  const [scale, setScale] = useState("");

  return (
    <div className="scalespage">
      <section className="greeting">
        <h2 className="scales-greeting">Pick a note</h2>
        <div className="note-containers">
          {allNotes.map((note, i) => {
            return (
              <div>
                <button
                  id={note}
                  className="note-button"
                  onClick={(event) => setTonic(event.target.id)}
                >
                  {note}
                </button>
                {/* <noteButton key={noteButton.id} /> */}
              </div>
            );
          })}
        </div>
        <div className="scale-containers">
          {diatonicScales.map((scale, i) => {
            return (
              <div>
                <button
                  id={scale}
                  className="scale-button"
                  onClick={(event) => setScale(event.target.id)}
                >
                  {scale}
                </button>
              </div>
            );
          })}
        </div>
        <h2>
          Scale is {tonic} {scale}
        </h2>
      </section>
    </div>
  );
};

export default Scales;
