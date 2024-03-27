import React from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from './Navbar';

const uniqueCategory = [
  ...new Set(Menu.map((currElem) => {
    return currElem.category;
  })),
  "All",
];
console.log(uniqueCategory)
const Resturant = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueCategory);
  const filterItem = (category) => {

    if(category === "All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElement) => {
      return curElement.category === category;
    })
    setMenuData(updatedList);
  };



  return (
    <>

      <Navbar filterItem={filterItem} menuList ={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant
