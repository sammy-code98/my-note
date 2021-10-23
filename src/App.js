import "./App.css";
import { useState } from "react";
import Note from "./components/Notes.jsx";

function App() {
  const initialData = [{ text: "hello" }, { text: "emma" }];
  const [data, setData] = useState(initialData)
  return (
    <div>
      <Note data={data} />
    </div>
  );
}

export default App;
