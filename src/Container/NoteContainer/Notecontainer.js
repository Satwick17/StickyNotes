import React from "react";
import Note from "../Note/Note";
import "./Notecontainer.css";

const Notecontainer = (props) => {
  const reverseNote = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; i--) array.push(arr[i]);
    return array;
  };

  const notes = reverseNote(props.notes);
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((item) => (
            <Note key={item.id} note={item} deleteNote={props.deleteNote} updateText = {props.updateText}/>
          ))
        ) : (
          <p>Click + to add new nodes</p>
        )}
      </div>
    </div>
  );
};

export default Notecontainer;
