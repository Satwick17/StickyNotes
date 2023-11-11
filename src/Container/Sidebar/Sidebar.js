import React, { useState } from "react";
import plusIcon from "../../assests/plus-icon-23564.png";
import "./Sidebar.css";

const Sidebar = (props) => {
  const colors = ["#fe9b72", "pink", "gray", "yellow", "green"];
  const [listOpen, setList] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={()=>setList(!listOpen)}/>
      <ui className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_items"
            style={{ backgroundColor: item }}
            onClick={()=> props.addNote(item)}
          />
        ))}
        <li className="sidebar_list_items"></li>
      </ui>
    </div>
  );
};

export default Sidebar;
