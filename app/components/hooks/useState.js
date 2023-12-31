import React from "react";
import style from "./style.css";
import { useState } from "react";

/**
 * hooks cannot return jsx normally, if so they need to be called as components
 * @returns
 */
const HomeRestro = () => {
  const [myNum, setMyNum] = useState(0);
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
      <div
        class="button2"
        onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR{" "}
      </div>
      {/* </div> */}
    </>
  );
};

export default HomeRestro;
