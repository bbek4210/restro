"use client";
import React, { useState } from "react";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from "./navbar.js";

const newList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Restro = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(newList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <div className="flex flex-column ">
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </div>
  );
};

export default Restro;
