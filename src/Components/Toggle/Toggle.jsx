import React, { useContext, useEffect, useRef, useState } from "react";
import css from "./Toggle.module.css";
import Context from "../utils/Context";

const Toggle = ({ handleClose }) => {
  const { createGroupInstance, groupInstances } = useContext(Context);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const refs = useRef(null);
  const onSubmit = () => {
    const existingGroup = groupInstances.find(
      (group) => group.color === selectedColor && group.name === selectedText
    );

    if (!existingGroup) {
      if (selectedColor && selectedText) {
      const newGroup = {
        name: selectedText,
        color: selectedColor,
      };
      createGroupInstance(newGroup);
      handleClose();
    }
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);
  const handleOutsideClick = (e) => {
    if (!refs.current.contains(e.target)) {
      handleClose();
    }
  };
  return (
    <div className={css.overlay}>
      <div className={css.selectionPage} ref={refs}>
        <span>Create new group</span>
        <div className={css.selection}>
          <label>Group Name</label>
          <input
            type="text"
            className={css.input}
            placeholder="Enter Group Name"
            value={selectedText}
            onChange={(e) => {
              setSelectedText(e.target.value);
            }}
          />
        </div>
        <div className={css.choiceDiv}>
          <span>Choose color</span>
          <div
            className={`${css.chooseColor1} ${
              selectedColor === "#b38bfa" ? css.active : ""
            }`}
            onClick={() => setSelectedColor("#b38bfa")}
          ></div>
          <div
            className={`${css.chooseColor2} ${
              selectedColor === "#ff79f2" ? css.active : ""
            }`}
            onClick={() => setSelectedColor("#ff79f2")}
          ></div>
          <div
            className={`${css.chooseColor3} ${
              selectedColor === "#43e6fc" ? css.active : ""
            }`}
            onClick={() => setSelectedColor("#43e6fc")}
          ></div>

          <div
            className={`${css.chooseColor4} ${
              selectedColor === "#f19576" ? css.active : ""
            }`}
            onClick={() => setSelectedColor("#f19576")}
          ></div>

          <div
            className={`${css.chooseColor5} ${
              selectedColor === "#0047ff" ? css.active : ""
            }`}
            onClick={() => setSelectedColor("#0047ff")}
          ></div>

          <div
            className={`${css.chooseColor6} ${
              selectedColor === "#6691ff" ? css.active : ""
            }`}
            onClick={() => setSelectedColor("#6691ff")}
          ></div>
        </div>
        <div>
          <button className={css.create} onClick={() => onSubmit()}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
