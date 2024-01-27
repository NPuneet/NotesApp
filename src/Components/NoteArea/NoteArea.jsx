import React from "react";
import css from "../NoteArea/NoteArea.module.css";
import pointer from "../../assets/pointer.svg";

const NoteArea = () => {
  return (
    <div className={css.Notes}>
      <div className={css.header}>
        <div></div>
        <p>Puneet</p>
      </div>
      <div className={css.main}>
        <div className={css.displayArea}>
          <p>
            Another productive way to use this tool to begin a daily writing
          </p>
          <p>time</p>
        </div>
        <div className={css.displayArea}>
          <p>
            Another productive way to use this tool to begin a daily writing
          </p>
          <p>time</p>
        </div>
        <div className={css.displayArea}>
          <p>
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day's writing projects, words are
            already flowing from their fingers.
          </p>
          <p>time</p>
        </div>
        <div className={css.displayArea}>
          <p>
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day's writing projects, words are
            already flowing from their fingers.
          </p>
          <p>time</p>
        </div>
        <div className={css.displayArea}>
          <p>
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day's writing projects, words are
            already flowing from their fingers.
          </p>
          <p>time</p>
        </div>
      </div>
      <div className={css.footer}>
        <div className={css.WritingArea}>
          <textarea name="" id=""></textarea>
          <img className={css.pointer} src={pointer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NoteArea;
