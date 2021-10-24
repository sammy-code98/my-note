import "./App.css";
import { useState } from "react";
import Note from "./components/Notes.jsx";
import produce from "immer";

function App() {
  const initialData = [{ text: "hello" }, { text: "emma" }];
  const [data, setData] = useState(initialData);

  // method
  const handleClick = () => {
    // select the value of the input and trim whitespace
    const text = document.querySelector("#noteInput").value.trim();
    if (text) {
      // using immer to mutate state
      const nextState = produce(data, (draftState) => {
        draftState.push({ text });
      });
      // reset input value to null
      document.querySelector("#noteInput").value = "";
      // now call the setData function here
      setData(nextState);
    }

    console.log(text);
  };
  return (
    <div className="container">
      <div className="inputform">
        <input
          id="noteInput"
          className="note-input"
          type="text"
          placeholder="Enter new note"
        />
        <button className="btn" onClick={() => handleClick()}>
          Add Note
        </button>
      </div>
      <Note data={data} />
    </div>
  );
}

export default App;
