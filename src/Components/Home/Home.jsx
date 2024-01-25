import React from "react";
import styles from "../Home/Home.module.css";
import cover from "../../assets/Cover.png";
import vector from "../../assets/Vector.svg";
import button from "../../assets/Add.svg";
import { useState } from "react";
import CreateNew from "../CreateNew/CreateNew";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleAddClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h3>Pocket Notes</h3>
        <div className={styles.Button}>
          <img src={button} alt="Button Image" />
          <p onClick={handleAddClick} className={styles.add}>
            +
          </p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div>
          <img className={styles.cover} src={cover} alt="Cover Image" />
        </div>
        <div className={styles.content}>
          <h1>Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online. <br />{" "}
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
        <div className={styles.Encrypted}>
          <img src={vector} alt="Vector Image" />{" "}
          <span>end-to-end encrypted</span>
        </div>
      </div>
      {isPopupOpen ? <CreateNew /> : <></>}
    </div>
  );
};

export default Home;
