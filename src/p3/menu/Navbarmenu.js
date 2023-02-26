import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from './logo2.png';

const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push("menuq2");
    } else {
        boxClass.push("");
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push("sub__menus__Active");
    } else {
        boxClassSubMenu.push("");
    }
    /////////////////////////////////


    // const [errorMessages, setErrorMessages] = useState({});
    // const errors = {
    //     uname: "invalid username",
    //     pass: "invalid password"
    //   };
    const handleSubmit = async(event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { prod_id, prod_price } = document.forms[0];

        
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    price: prod_price.value })                                
            };
            const response = await fetch(`http://localhost:5000/prod/${prod_id.value}`, requestOptions);
            const data = await response.json();
            // setPostId(data.id);
        

            document.forms[0].prod_id.value = "";
            document.forms[0].prod_price.value = "";
            
    }
        // console.log(uname.value)}
    // const renderErrorMessage = (name) =>
    // name === errorMessages.name && (
    //   <div className="error">{errorMessages.message}</div>
    // );
    
    
    
    const renderForm = (
       
        <div className="form">
          <form  onSubmit={handleSubmit}>
           
            <div className="input-container">
              <label>Enter product reference </label>
              <input type="text" name="prod_id" required />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Enter new price </label>
              <input type="number" name="prod_price" required />
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

    //   async function updateProduct(id) {
    //     const requestOptions = {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ id: prod_id.value, 
    //             price: prod_price.value })                                
    //     };
    //     const response = await fetch(`http://localhost:5000/prod/${id}`, requestOptions);
    //     const data = await response.json();
    //     // setPostId(data.id);
    // }

      ////////////////////////////////////////////////////

    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">
                    {/* Add Logo  */}
                    <div className="header__middle__logo">
                        <NavLink exact activeClassName="is-active" to="/">
                            <img src={logo} alt="logo" /> 
                         
                        </NavLink>
                        
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav ">
                            <h1 className="azer">Orders Home</h1>
                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? (
                                <>
                                    <span
                                        className="menubar__button"
                                        style={{ display: "none" }}
                                        onClick={toggleClass}
                                    >
                                        {" "}
                                        <FiXCircle />{" "}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span
                                        className="menubar__button"
                                        style={{ display: "none" }}
                                        onClick={toggleClass}
                                    >
                                        {" "}
                                        <FiAlignRight />{" "}
                                    </span>
                                </>
                            )}

                            <ul className={boxClass.join(" ")}>
                            


                              
                                {/* <li className="menu-item ">
                                    <NavLink
                                        onClick={toggleClass}
                                        activeClassName="is-active"
                                        to={`/Contact`}
                                    >
                                        {" "}
                                        ORDERS HOME{" "}
                                    </NavLink>{" "}
                                </li> */} 
                                <li><h1>Change product price  :</h1>{renderForm}</li>
                               
                            </ul>
                            {/* <h1 style="text-align:center;">Orders Home</h1> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Navbarmenu;
