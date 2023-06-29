import React, { useContext, useState } from "react";
import global from "../Context/Appfunction";
import "./Styles/Complete.css";
const Complete = () => {
  const getting = useContext(global);

  if (getting.tasks === undefined) return <>no data</>;
  return (
    <div className={`whole2 complete ${getting.theme ? "complete-light" : ""}`}>
      <strong>Completed Task</strong>

      {getting.tasks.map((e) => {
        if (e.statusw.complete === true) {
          return <p>{e.data}</p>;
        }
      })}
    </div>
  );
};
export default Complete;
