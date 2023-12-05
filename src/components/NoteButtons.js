import setTonic from "../pages/Scales.js";
import tonic from "../pages/Scales.js";
function noteButton(props) {
  return (
    <div>
      <button
        className="note-button"
        //   onClick={(event) => setTonic(event.target.note)
        onClick={setTonic(props.id)}
      >
        shit
      </button>
      <h2>{tonic}</h2>
      <h2>{tonic}</h2>
    </div>
  );
}

export default noteButton;
