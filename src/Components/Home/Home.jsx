import React from "react";
import css from "../Home/Home.module.css";
import cover from "../../assets/Cover.png";
import vector from "../../assets/Vector.svg";
import button from "../../assets/Add.svg";
import { useState } from "react";
import Toggle from "../Toggle/Toggle";
import ProfileIcons from "../ProfileIcons/Profile";
import NoteArea from "../NoteArea/NoteArea";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);

  const handleAddClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={css.container}>
      <div className={css.leftSide}>
        <div>
          <h3>Pocket Notes</h3>
        </div>
        <div className={css.body}>
          <ProfileIcons
            isActive={isActive}
            setIsActive={setIsActive}
            setData={setData}
          />
        </div>
        <div className={css.Button}>
          <img src={button} alt="Button Image" />
          <p onClick={handleAddClick} className={css.add}>
            +
          </p>
        </div>
      </div>
      {isActive ? (
        <NoteArea data={data} setIsActive={setIsActive} isActive={isActive} />
      ) : (
        <div className={css.rightSide}>
          <div>
            <img className={css.cover} src={cover} alt="Cover Image" />
          </div>
          <div className={css.content}>
            <h1>Pocket Notes</h1>
            <p>
              Send and receive messages without keeping your phone online.{" "}
              <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
              phone
            </p>
          </div>
          <div className={css.Encrypted}>
            <img src={vector} alt="Vector Image" />{" "}
            <span>end-to-end encrypted</span>
          </div>
        </div>
      )}
      {isPopupOpen ? <Toggle handleClose={handleClose} /> : <></>}
    </div>
  );
};

export default Home;
