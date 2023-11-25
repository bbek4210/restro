"use client";
import React,{ useState} from 'react'
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";

const Restro = () => {
 const[menuData, setMenuData] =useState(Menu);
 
  return <> 
  <MenuCard menuData={menuData} />
    </>
  
};

export default Restro;