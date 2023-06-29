import { useContext } from "react";
import global from "../Context/Appfunction";
import { NavLink, Outlet } from "react-router-dom";
import "./Styles/TaskAssigner.css";
export default function Navbar() {
  const my = useContext(global);
  return (
    <>
      <Outlet />

      <nav className={`navigate ${my.theme ? "navigatelight" : ""}`}>
        <p>{my.number} items left</p>

        {my.screenSize.width > 810 ? (
          <nav
            className={`navigation-pannel ${
              my.theme ? "navigation-pannel-light" : ""
            }`}
          >
            <NavLink to="showing" className="color">
              All
            </NavLink>
            <NavLink to="complete">Complete</NavLink>
            <NavLink to="active">Active</NavLink>
          </nav>
        ) : (
          ""
        )}

        <button onClick={my.deletewhole} className="deletewhole">
          Clear Complete
        </button>
      </nav>
    </>
  );
}
