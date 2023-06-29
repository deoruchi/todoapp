import React, { useEffect, useRef, useState } from "react";
import { Appfunction } from "./Appfunction"; //provider
import axios from "axios";

const AppFunction2 = ({ children }) => {
  const [id, setId] = useState();
  const [data, setData] = useState();
  const [number, setNumber] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [left, setLeft] = useState(0);
  const [data2, setData2] = useState([]);
  const [theme, setTheme] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  function edit(id) {
    axios
      .put(`https://64857928a795d24810b6fd6f.mockapi.io/todo/${id}`, {
        statusw: {
          complete: true,
        },
      })
      .then(() => {
        setLeft(number - 1);
        update();
      });
  }

  const handleDelete = (id) => {
    axios
      .delete(`https://64857928a795d24810b6fd6f.mockapi.io/todo/${id}`)
      .then((d) => {
        console.log("delete");
      })
      .then(() => {
        update();
      });
  };

  const deletewhole = () => {
    axios
      .delete(`https://64857928a795d24810b6fd6f.mockapi.io/todo`)
      .then(() => {
        update();
      })
      .catch((error) => {
        console.error("error");
      });
  };

  function update() {
    axios.get("https://64857928a795d24810b6fd6f.mockapi.io/todo").then((d) => {
      const data = d.data;
      setTasks(d.data);

      let c = 0;
      d.data.map((i) => {
        if (i.statusw.complete === true) c++;
      });
      setNumber(d.data.length - c);
    });
  }

  function addTask(e) {
    axios
      .post(`https://64857928a795d24810b6fd6f.mockapi.io/todo`, {
        id: id,
        data: data,
        statusw: {
          complete: false,
        },
      })
      .then(() => {
        update();
      })
      .catch((error) => console.log("error"));
  }

  return (
    <Appfunction
      value={{
        id,
        data,
        data2,
        number,
        tasks,
        left,
        screenSize,
        setId,
        setData,
        setNumber,
        setTasks,
        handleDelete,
        update,
        addTask,
        edit,
        deletewhole,
        setLeft,
        theme,
        setTheme,
      }}
    >
      {children}
    </Appfunction>
  );
};

export default AppFunction2;
