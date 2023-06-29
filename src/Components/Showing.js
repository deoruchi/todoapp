import React, { useContext, useEffect, useState } from "react";
import global from "../Context/Appfunction";
import { NavLink } from "react-router-dom";
import "./Styles/Tasks.css";

export const Showing = () => {
  const my = useContext(global);

  const [check, setCheck] = useState(false);

  if (my.tasks === undefined) return <></>;
  else
    return (
      <article className={`whole2 ${my.theme ? "whole2-light" : ""}`}>
        <section className="tasks">
          {my.tasks.map((e) => {
            return (
              <>
                <div
                  className={`whole-tasks ${
                    my.theme ? "whole-taskslight" : ""
                  }`}
                >
                  <div key={e.id} className="taskstag">
                    <input
                      type="checkbox"
                      onChange={() => {
                        my.edit(e.id);
                        setCheck(!check);
                      }}
                      checked={e.statusw.complete}
                      className={
                        e.statusw.complete ? "check-color check" : "check"
                      }
                    ></input>
                    <p className={e.statusw.complete ? "crossed" : ""}>
                      {e.data}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      my.handleDelete(e.id);
                    }}
                    className={`buttondelete ${my.theme ? "light" : ""}`}
                  >
                    X
                  </button>
                </div>
              </>
            );
          })}
        </section>

        {my.screenSize.width < 800 ? (
          <nav className={`navigate ${my.theme ? "navigatelight" : ""}`}>
            <p>{my.number} items left</p>

            <button onClick={my.deletewhole} className="deletewhole">
              Clear Complete
            </button>
          </nav>
        ) : (
          ""
        )}
      </article>
    );
};
