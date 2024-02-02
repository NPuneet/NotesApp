import Home from "./Components/Home/Home";
import React, { useEffect, useState } from "react";
import Context from "./Components/utils/Context";

function App() {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const [groupInstances, setGroupInstances] = useState(() => {
    const localStorageData = localStorage.getItem("Profile");
    const parsedData = JSON.parse(localStorageData) || [];
    if (parsedData.length > 0) {
      return parsedData.map((group) => ({ ...group }));
    } else {
      return [];
    }
  });
  const createGroupInstance = (newGroup) => {
    setGroupInstances((prevInstances) => {
      const newInstances = [...prevInstances, { ...newGroup, messages: [] }];
      localStorage.setItem("Profile", JSON.stringify(newInstances));
      return newInstances;
    });
  };
  const saveMessage = (groupName, message) => {
    setGroupInstances((prevInstances) => {
      const updatedInstances = prevInstances.map((group) => {
        if (group.name === groupName) {
          const updatedGroup = {
            ...group,
            messages: [...group.messages, message],
          };
          return updatedGroup;
        }
        return group;
      });
      localStorage.setItem("Profile", JSON.stringify(updatedInstances));
      return updatedInstances;
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
          saveMessage,
        }}
      >
        <Home />
      </Context.Provider>
    </>
  );
}

export default App;
