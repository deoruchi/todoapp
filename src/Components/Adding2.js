import React, { useContext, useEffect, useState } from "react";
import "./Styles/TaskAssigner.css";
import { Showing } from "./Showing";
import global from "../Context/Appfunction";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
export const Adding2 = () => {
  const getting = useContext(global);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getting.addTask();
      getting.setData("");
    }
  };

  useEffect(() => {
    getting.update();
  }, [getting.number]);

  return (
    <section className="taskscontainer">
      <div className={`wrapper ${getting.theme ? "wrapper-light" : ""}`}>
        <input type="checkbox" className="checkbox dummy" disabled></input>
        <input
          type="text"
          placeholder="Enter a Task "
          value={getting.data}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            getting.setData(e.target.value);
          }}
          className={`input-task ${getting.theme ? "input-tasklight" : ""}`}
        ></input>
      </div>

      {getting.screenSize.width < 800 ? <Outlet /> : ""}

      {getting.screenSize.width < 800 ? (
        <nav
          className={`navigation-pannel ${
            getting.theme ? "navigation-pannel-light" : ""
          }`}
        >
          <NavLink to="showing" className="color">
            All
          </NavLink>
          <NavLink to="complete">Complete</NavLink>
          <NavLink to="active">Active</NavLink>
        </nav>
      ) : (
        " "
      )}
    </section>
  );
};
