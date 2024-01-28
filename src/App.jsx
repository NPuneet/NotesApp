import Home from "./Components/Home/Home";
import React, { useState, useEffect } from "react";
import Context from "./Components/utils/Context";

function App() {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");

  const [groupInstances, setGroupInstances] = useState(() => {
    const localStorageData = localStorage.getItem("Profile");
    const parsedData = JSON.parse(localStorageData);
    return parsedData || [];
  });

  const createGroupInstance = (newGroup) => {
    setGroupInstances((prevInstances) => {
      const newInstances = [...prevInstances, newGroup];
      localStorage.setItem("Profile", JSON.stringify(newInstances));
      return newInstances;
    });
  };


  return (
    <>
      <Context.Provider
        value={{
          nameValue: value,
          setValue,
          selectedColorValue: color,
          setColor,
          groupInstances,
          createGroupInstance,
        }}
      >
        <Home />
      </Context.Provider>
    </>
  );
}

export default App;
