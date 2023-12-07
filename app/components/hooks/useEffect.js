import React, { useState, Effect } from "react";
import style from "./style.css";

/**
 * hooks cannot return jsx normally, if so they need to be called as components
 * @returns
 */
const useEffect = () => {
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Chats (${myNum})`;
  });

  return (
    <>
      {/* <div className="center_div"> */}
      <p> {myNum}</p>
      <div
        class="button2"
        onClick={() => {
          setMyNum(myNum + 1);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </div>
    </>
  );
};

export default useEffect;
