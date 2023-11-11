import React from "react";
import "./Note.css";
import deleteIcon from "../../assests/Delete-Icon-Transparent-PNG.png";

let timer = 500,
  timeout;
const Note = (props) => {
  const formatTime = (value) => {
    if (!value) return;
    const date = new Date(value);
    const getMon = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let AmPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? 12 - (24 - hrs) : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    const month = getMon[date.getMonth()];
    return `${hrs}:${min} ${AmPm}, ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };
  const updateText = (text, id) => {
    debounce(() => props.updateText(text,id));
  };
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      ></textarea>
      <div className="note_footer">
        <p>{formatTime(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="Delete"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Note;
