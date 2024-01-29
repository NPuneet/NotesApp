import React, { useContext, useEffect, useState } from "react";
import css from "../ProfileIcons/Profile.module.css";
import Context from "../utils/Context";

const ProfileIcons = ({ isActive, setIsActive, setData }) => {
  const { groupInstances } = useContext(Context);
  const [group, setGroup] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  useEffect(() => {
    const localStorageData = localStorage.getItem("Profile");
    const parsedData = JSON.parse(localStorageData);
    setGroup(parsedData || []);
  }, [groupInstances]);

  const saveData = (instance) => {
    const obj = {
      name: instance.name,
      color: instance.color,
      initials: extractInitials(instance.name),
    };
    setData(obj);
  };
  const extractInitials = (name) => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0)).join("");
    return initials.toUpperCase();
  };

  return (
    <>
      {group.length > 0 &&
        group.map((instance, i) => (
          <div
            key={i}
            className={`${css.profile} ${
              isActive && selectedProfile === instance ? css.activeProfile : ""
            }`}
            onClick={() => {
              setIsActive(true);
              saveData(instance);
              setSelectedProfile(instance);
            }}
          >
            <div
              className={css.initials}
              style={{ backgroundColor: instance.color }}
            >
              <span>{extractInitials(instance.name)}</span>
            </div>
            <p className={css.name}>{instance.name}</p>
          </div>
        ))}
    </>
  );
};

export default ProfileIcons;
