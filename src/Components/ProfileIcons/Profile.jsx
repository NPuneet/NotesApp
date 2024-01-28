import React, { useContext, useEffect, useState } from "react";
// import css from "../NoteText/NoteText.module.css";
import css from "../ProfileIcons/Profile.module.css";
import Context from "../utils/Context";

const ProfileIcons = ({ isActive, setIsActive }) => {
  const { groupInstances } = useContext(Context);
  const [group, setGroup] = useState([]);
  // console.log(nameValue, selectedColorValue);
  useEffect(() => {
    const localStorageData = localStorage.getItem("Profile");
    const parsedData = JSON.parse(localStorageData);
    console.log(parsedData);
    setGroup(parsedData || []);
  }, [groupInstances]);

  return (
    <>
      {group.length > 0 &&
        group.map((instance, i) => (
          <div
            key={i}
            className={`${css.profile} ${
              isActive === true ? css.activeProfile : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            <div
              className={css.initials}
              style={{ backgroundColor: instance.color }}
            >
              {/* <p></p> */}
            </div>
            <p className={css.name}>{instance.name}</p>
          </div>
        ))}
    </>
  );
};

export default ProfileIcons;
