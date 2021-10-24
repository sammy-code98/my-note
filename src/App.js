import "./App.css";
import { useState, useEffect } from "react";
import Note from "./components/Notes.jsx";
import produce from "immer";

function App() {
  const initialData = [{ text: "Loading Notes....." }];
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

      // push input values to local storage
      if (typeof window !== "undefined") {
        localStorage.setItem("data", JSON.stringify(nextState));
      }
      // now call the setData function here
      setData(nextState);
    }
  };
  useEffect(() => {
    // check if data exist in local storage
    if (typeof window !== "undefined") {
      const getData = localStorage.getItem("data");
      if (getData !== "" && getData !== null) {
        return setData(JSON.parse(getData));
      }
      return setData([]);
    }
  }, 0);
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
