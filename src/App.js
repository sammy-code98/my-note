import "./App.css";
import { useState } from "react";
import Note from "./components/Notes.jsx";

function App() {
  const initialData = [{ text: "hello" }, { text: "emma" }];
  const [data, setData] = useState(initialData)
  return (
    <div className="container">
      <div className="inputform">
      <input className="note-input" type="text" placeholder="Enter new note" />
      <button className="btn">Add Note</button>
      </div>
      <Note data={data} />
    </div>
  );
}

export default App;
