import React, { useContext, useState } from "react";
import global from "../Context/Appfunction";
import "./Styles/Active.css";
const Active = () => {
  const getting = useContext(global);

  if (getting.tasks === undefined) return <>no data</>;
  return (
    <div className={`whole2 active2 ${getting.theme ? "active2-light" : ""}`}>
      <h5>Active Tasks （￣︶￣）↗　</h5>
      {getting.tasks.map((e) => {
        if (e.statusw.complete === false) return <li key={e.id}>{e.data}</li>;
      })}
    </div>
  );
};
export default Active;
