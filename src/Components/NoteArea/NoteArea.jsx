import React, { useContext, useState } from "react";
import css from "../NoteArea/NoteArea.module.css";
import pointer from "../../assets/pointer.svg";
import dot from "../../assets/dot.svg";
import filledPointer from "../../assets/filledPointer.svg";
import Context from "../utils/Context";

const NoteArea = ({ data }) => {
  const { groupInstances } = useContext(Context);
  const [group, setGroup] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [displayTime, setDisplayTime] = useState("");
  const [displayDate, setDisplayDate] = useState("");
  const submit = () => {
    setDisplayText(group);
    setGroup("");
    date();
  };
  const date = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const a = new Date();

    const date =
      a.getDate() + " " + months[a.getMonth()] + " " + a.getFullYear();
    const hours = a.getHours();
    const minutes = a.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const time = `${formattedHours}:${minutes} ${amPm}`;

    setDisplayDate(date);
    setDisplayTime(time);
  };

  return (
    <div className={css.Notes}>
      <div className={css.header}>
        <div
          className={css.headerItems}
          style={{ backgroundColor: data.color }}
        >
          <span>{data.initials}</span>
        </div>
        <p>{data.name}</p>
      </div>
      <div className={css.main}>
        <div className={css.displayArea}>
          <p>nameValue</p>
          <p>time</p>
        </div>

        <div className={css.displayArea}>
          <p>{displayText}</p>
          <div className={css.date}>
            <p>{displayDate}</p>
            <img src={dot} alt="" />
            <p>{displayTime}</p>
          </div>
        </div>
      </div>
      <div className={css.footer}>
        <div className={css.WritingArea}>
          <textarea
            name=""
            id=""
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          ></textarea>

          <img
            className={css.pointer}
            src={group.length > 0 ? filledPointer : pointer}
            alt=""
            onClick={() => (group.length > 0 ? submit() : null)}
          />
        </div>
      </div>
    </div>
  );
};
export default NoteArea;
