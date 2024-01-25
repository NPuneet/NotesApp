import React from "react";
// import css from "../NoteText/NoteText.module.css";
import css from "../ProfileIcons/Profile.module.css";

const ProfileIcons = ({ isActive, setIsActive }) => {
  return (
    <div
      className={`${css.profile} ${isActive === true ? css.activeProfile : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={css.initials}></div>
      <p>Puneet</p>
    </div>
  );
};

export default ProfileIcons;
