import React from "react";
import css from "./Toggle.module.css";

const CreateNew = () => {
  return (
    <div className={css.overlay}>
      <div className={css.selectionPage}>
        <span>Create new group</span>
        <div className={css.selection}>
          <label>Group Name</label>
          <input
            type="text"
            className={css.input}
            placeholder="Enter Group Name"
          />
        </div>
        <div className={css.choiceDiv}>
          <span>Choose color</span>
          <div className={css.chooseColor1}></div>
          <div className={css.chooseColor2}></div>
          <div className={css.chooseColor3}></div>
          <div className={css.chooseColor4}></div>
          <div className={css.chooseColor5}></div>
          <div className={css.chooseColor6}></div>
        </div>
        <div>
          <button className={css.create}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNew;
