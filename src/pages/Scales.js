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

  const majorPattern = "WWHWWWH";
  const [tonic, setTonic] = useState("");
  const [scale, setScale] = useState("");
  const [scalePattern, setScalePattern] = useState("");
  const [notesInKey, setNotesInKey] = useState("");

  function getScalePattern() {
    var startingMode = 0;
    for (let i = 0; i < 7; i++) {
      if (diatonicScales[i] === scale) {
        startingMode += i;
      }
    }
    var pattern = "";
    for (let n = 0; n < 7; n++) {
      const pos = n + startingMode;
      if (pos < 7) {
        const letter = majorPattern[pos];
        pattern += letter;
      } else {
        const mpos = pos - 7;
        const letter = majorPattern[mpos];
        pattern += letter;
      }
    }
    setScalePattern(pattern);
  }

  function getNotesInKey() {
    let keynotes = [];
    var startingNote = 0;
    // keynotes.append(tonic);
    keynotes += tonic;
    keynotes += " ";
    for (let i = 0; i < allNotes.length; i++) {
      if (allNotes[i] === tonic) {
        console.log("first note is " + tonic);
        // keynotes.append(allNotes[i]);
        // keynotes += allNotes[i];
        startingNote += i;
      }
    }
    var notePos = startingNote;
    for (let i = 0; i < scalePattern.length - 1; i++) {
      if (scalePattern[i] === "W") {
        notePos += 2;
      } else {
        notePos += 1;
      }
      //   keynotes.append(allNotes[notePos]);
      if (notePos < 12) {
        keynotes += allNotes[notePos];
        keynotes += " ";
      } else {
        notePos = notePos - 12;
        keynotes += allNotes[notePos];
        keynotes += " ";
      }
    }
    console.log(keynotes);
    setNotesInKey(keynotes);
    return keynotes;
  }

  return (
    <div className="scalespage">
      <section className="greeting">
        <h2 className="scales-greeting">Pick a note</h2>
        <div className="note-containers btn-group">
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
        <h2>Pick a scale</h2>
        <div className="scale-containers btn-group">
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
        <button onClick={getScalePattern}>get scale pattern</button>
        <h3>scale pattern is {scalePattern}</h3>
        <button onClick={getNotesInKey}>see notes in key</button>
        <h3>notes in key {notesInKey}</h3>
      </section>
    </div>
  );
};

export default Scales;
