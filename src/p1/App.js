import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { navbar } from "./navbar";
import logo from "./logo.JPG";
import { Login } from "./component/Login";
import ReactDOM from "react-dom";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
    //
    const [menu, setmenu] = useState(false);
    //
    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);

    // const resetFileds = () => {
    //     // document.getElementById("e1").value = "";
    //     alert("Commande Envoyé");
    // };
    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
  if(menu==false){

  
    return (
      

<main>
            <section className="menu section">
             
                <div className="title">
                    <img src={logo} alt="logo" className="logo" />
                    <h2>Menu List</h2>
                    <div className="underline"></div>
                </div>
                <Categories
                    categories={categories}
                    activeCategory={activeCategory}
                    filterItems={filterItems}
                />
                <Menu items={menuItems} />
               
            </section>
        </main>
    );}
    else{
        return(
            <Login /> 
        )
    }
};

export default App;
