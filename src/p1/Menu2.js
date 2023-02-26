import React from "react";
import {useState,useEffect} from 'react';
import d from "./data"
const Menu2 = ({}) => {

//
const [category, setCategory] = useState([]);

// useEffect(() => {
//   const getcategory = async () => {
//     const res = await fetch("http://localhost/devopsdeveloper/category");
//     const getdata = await res.json();
//     setCategory(getdata);
//     // console.log(getdata);
//   };

//   getcategory();
// },[]);

//
// const [compteur, setCompteur] = useState(1);
   const [items, setItems] = useState([]);
//// add command
//     const addcommand = async (product_id) => {
//         alert(product_id);
//         const res=await fetch(`http://localhost:5000/order_c`,{
//             Method: 'POST',
//             Headers: {
//                 Accept: 'application.json',
//                 'Content-Type': 'application/json'
//               },
//               Body: {
//                 "product_id":product_id
//               },
//               Cache: 'default'
//         } )
// }
var compteur = 0;

const [items2, setItems2] = useState([]);

const addcommand = async (product_id,id_order_cmd) => {
  
    
    // setCompteur(compteur+1);
    // setCpt(cpt+1)
    // d[0].cm=d[0].cm+1;
    // compteur=compteur+1;
    
    const res = await fetch('http://localhost:5000/order_c', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_id: product_id
        }),
        cache: 'default'
    });  
    const data = await res.json();

  alert("commande passé : num de commande=>"+ data.insertId);
}

/// add command
    useEffect(() => {
        const getData = async () => {
            const res=await fetch(`http://localhost:5000/prod` )
            const data = await res.json();
            console.log(data)
            setItems(data)
        }
      
      getData()
  }, []);

    // const resetf = () => {
    //     // document.getElementById("e1").value = "";
    //     alert("Commande Envoyé");
    // };
    // function resetf() {
    //     alert("tgvhbj");
    // }
    return (
        <div className="section-center">
            
            {items.map(
                
                (item) => {
                    const { id_product, name, price, id_categorie,src,command_id, id_order_cmd } = item;
                    // const {  id_product,name,price,id_categorie,src} = item;
                    // if (category !== "Petit-déj") {
                    return (
                        <article key={id_product} className="menu-item">
                            {/* {id_product} */}
                            <img src={src} alt={name} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{name}</h4>
                                    <h4 className="price">DT{price}</h4>
                                </header>
                                <p className="item-text">
                                   
                                    
                                    <button onClick={() => addcommand(item.id_product)}>Commander</button>
                                
                                </p>

                            </div>
                        </article>
                    );
                }
               
            )}
        </div>
    );
};

export default Menu2;
