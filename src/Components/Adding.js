import React, { useContext, useState } from "react";
import "./Styles/Front.css";
import { Adding2 } from "./Adding2";
import Sun from "../images/icon-sun.svg";
import Moon from "../images/icon-moon.svg";
import Img1 from "../images/bg-mobile-dark.jpg";
import Img2 from "../images/bg-desktop-dark.jpg";

import { Link, NavLink } from "react-router-dom";
import Imgb1 from "../images/bg-mobile-light.jpg";
import Imgb2 from "../images/bg-desktop-light.jpg";
import global from "../Context/Appfunction";
import Navbar from "./Navbar";

function Adding() {
  const sd = useContext(global);

  return (
    <article className={`big-body ${sd.theme ? "big-bodylight" : ""}`}>
      <section>
        <picture>
          <source srcSet={sd.theme ? Imgb2 : Img2} media="(min-width: 420px)" />
          <img src={sd.theme ? Imgb1 : Img1} className="image-size"></img>
        </picture>
      </section>

      <section className="tasksassigner">
        <div className="logo">
          <h1 className="">TODO</h1>
          <img
            src={sd.theme ? Moon : Sun}
            className="image-icons"
            onClick={() => {
              sd.setTheme(!sd.theme);
            }}
          ></img>
        </div>
        <Adding2 />
        {sd.screenSize.width > 810 ? <Navbar /> : ""}
        <p className={`drag ${sd.theme ? "drag-light" : ""}`}>
          Drag and drop to reorder list
        </p>
      </section>
    </article>
  );
}
export default Adding;
