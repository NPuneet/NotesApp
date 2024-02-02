import React, { useContext, useState, useEffect } from "react";
import css from "../NoteArea/NoteArea.module.css";
import pointer from "../../assets/pointer.svg";
import dot from "../../assets/dot.svg";
import filledPointer from "../../assets/filledPointer.svg";
import arrow from "../../assets/arrow.svg";
import Context from "../utils/Context";

const NoteArea = ({ data , setIsActive, isActive }) => {
  console.log(isActive)
  const { saveMessage, groupInstances } = useContext(Context);
  const [group, setGroup] = useState("");

  const [displayMessages, setDisplayMessages] = useState([]);

  useEffect(() => {
    const currentGroup = groupInstances.find(
      (group) => group.name === data.name
    );
    if (currentGroup) {
      setDisplayMessages(currentGroup.messages);
    }
  }, [groupInstances, data.name]);

  const submit = () => {
    const newMessage = {
      text: group,
      date: formatDate(),
      time: formatTime(),
    };
    saveMessage(data.name, newMessage);
    setDisplayMessages((prevMessages) => [...prevMessages, newMessage]);
    setGroup("");
  };

  const formatDate = () => {
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

    return a.getDate() + " " + months[a.getMonth()] + " " + a.getFullYear();
  };

  const formatTime = () => {
    const a = new Date();

    const hours = a.getHours();
    const minutes = a.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${minutes} ${amPm}`;
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
        <img src={arrow} alt="" className={css.arrow} onClick={() => setIsActive(!true)} />
      </div>
      <div className={css.main}>
        {displayMessages.map((message, index) => (
          <div className={css.displayArea} key={index}>
            <p className={css.message}>{message.text}</p>
            <div className={css.date}>
              <p>{message.date}</p>
              <img src={dot} alt="" />
              <p>{message.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={css.footer}>
        <div className={css.WritingArea}>
          <textarea
            name="textarea"
            id="text"
            placeholder="Enter your text here....."
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
