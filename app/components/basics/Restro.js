"use client";
import React,{ useState} from 'react'
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import navbar from './navbar.js';

const newList = [...new Set(Menu.map((curElem)=>{
  return curElem.category
  


}))]


const Restro = () => {
 const[menuData, setMenuData] =useState(Menu);

 const filterItem =(category)=>{
  const updatedList =Menu.filter ((curElem)=>{
    return curElem.category===category;
  })
  setMenuData(updatedList)
 }
 
  return <> 




  <MenuCard menuData={menuData} />
    </>
  
};

export default Restro;