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
  // TO DO:  refactor notes in key, to be an array of objects. example:
  //   {id: 1,
  //       note: "A",
  //       interval: "I",
  //   mode: "ionian",
  //   triad: 'major',
  //   seventh: "major",
  //   ninth: "major",
  //   eleventh: "perfect",
  //   thirteenth: "major",
  //   function: "tonic",
  //   }

  const [notesInKey, setNotesInKey] = useState("");
  const [notesInKeyArray, setNotesInKeyArray] = useState([]);
  const [chordsInKey, setChordsInKey] = useState([]);

  function testChords() {
    setChordsInKey([
      {
        id: 1,
        note: "A",
        interval: "I",
        mode: "ionian",
        triad: "major",
        seventh: "major",
        ninth: "major",
        eleventh: "perfect",
        thirteenth: "major",
        function: "tonic",
      },
    ]);
  }

  function getChords() {
    var startingMode = 0;
    for (let i = 0; i < 7; i++) {
      if (diatonicScales[i] === scale) {
        startingMode += i;
      }
    }
    for (let i = 0; i < 7; i++) {
      //adding doubled up arrays with key tones and diatonic scales list to make it easy for iterating past 7
      const doubleScaleTones = notesInKeyArray.push(notesInKeyArray);
      const doubleDiatonicScales = diatonicScales.push(diatonicScales);
      const chordInfo = {
        id: 1 + i,
        note: notesInKeyArray[i],
        mode: doubleDiatonicScales[startingMode + i],
        chordTones: [
          doubleScaleTones[i],
          doubleScaleTones[i + 2],
          doubleScaleTones[i + 4],
          doubleScaleTones[i + 6],
        ],
      };
    }
  }

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

  function getNotesInKeyArray() {
    let keynotes = [];
    var startingNote = 0;
    // keynotes.append(tonic);
    keynotes.push(tonic);
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
        keynotes.push(allNotes[notePos]);
      } else {
        notePos = notePos - 12;
        keynotes.push(allNotes[notePos]);
      }
    }
    console.log(keynotes);
    setNotesInKeyArray(keynotes);
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
        <button onClick={getNotesInKeyArray}>see notes in key array</button>
        <h3>notes in key array {notesInKeyArray}</h3>
        <div className="notes-in-key">
          {notesInKeyArray.map((note, i) => {
            return (
              <div className="note-card">
                <p>{note}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Scales;
