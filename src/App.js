import React, { useEffect, useState } from "react";
import Notecontainer from "./Container/NoteContainer/Notecontainer";
import "./App.css";
import Sidebar from "./Container/Sidebar/Sidebar";

function App() {
  const [notes, setNote] = useState(
    JSON.parse(localStorage.getItem("Notes_app")) || []
  );

  const addNote = (color) => {
    const tempNote = [...notes];
    tempNote.push({
      id: Date.now() + "" + Math.floor(Math.random() * 17),
      text: "",
      time: Date.now(),
      color,
    });
    setNote(tempNote);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNote(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNote(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("Notes_app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <Notecontainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
