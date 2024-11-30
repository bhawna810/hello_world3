import React, { useState } from 'react'
import DBHeader from './DBHeader';
import {createProduct} from '../api/index'

const DBNewItem = () => {
    console.log("Inside the add items  of dashboad");

    const [itemName , setItemName] = useState('');
    const [itemCategory , setItemCategory] = useState('');
    const [itemPrice , setItemPrice ] = useState();
    const [itemImage , setItemImage] = useState('');

    function changename(e){
      setItemName(e.target.value);
      console.log( 'setItemName '  + itemName);
    } 
    function changeprice(e){
      setItemPrice(e.target.value);
      console.log( 'itemPrice '  + itemPrice);
    } 

    function changecategory(val){
      setItemCategory(val);
      console.log( 'itemPrice '  + itemCategory);
    } 

    function saveButtonfunc(){

      console.log("hello inside save button ");

        const data = {
          product_category : itemCategory ,
          product_name : itemName,
          product_price : itemPrice,
          imageURL : itemImage
        }

        createProduct(data);
    }

    const handleClick = () => {
      document.getElementById('fileInput').click(); // Programmatically click the hidden file input
    };

    function handleImage(event){
        const file = event.target.files[0]; // Get the first file
        console.log(" file " , file);
        if (file) {
          const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
          setItemImage(imageUrl); // Set the image state
          console.log("image " , imageUrl);
          console.log(" itemPhoto " , itemImage);
        }
    }


  return (
    <div >
        <DBHeader/>
        <div>
            <input  style={{height : 'auto'}} placeholder='Item name here' value = {itemName} onChange={changename}/>
            <div  style={{height : 'auto' , display : 'flex'}}>
                <div style={{border: '2px solid black', padding : '10px', margin : '10px'}} onClick={() => changecategory('Drink')}>Drink</div>
                <div style={{border: '2px solid black', padding : '10px', margin : '10px'}} onClick={() => changecategory('Deserts')}>Deserts</div>
                <div style={{border: '2px solid black', padding : '10px', margin : '10px'}} onClick={() => changecategory('Fruits')}>Fruits</div>
                <div style={{border: '2px solid black', padding : '10px', margin : '10px'}} onClick={() => changecategory('Rice')}>Rice</div> 
                <div style={{border: '2px solid black', padding : '10px', margin : '10px'}} onClick={() => changecategory('Curry')}>Curry</div>
                <div style={{border: '2px solid black', padding : '10px', margin : '10px'}} onClick={() => changecategory('Chinese')}>Chinese</div>
                <div style={{border: '2px solid black', padding : '10px', margin : '10px'}} onClick={() => changecategory('Fish')}>Fish</div>
            </div>
            <input type="number" placeholder='Item price here'  style={{height : 'auto'}} value = {itemPrice} onChange={changeprice}/>
            <div
               onClick={() => document.getElementById('fileInput').click()} // Trigger file input click on div click
               style={{
                   width: '300px',
                   height: '200px',
                   border: '2px dashed #ccc',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   cursor: 'pointer',
                   position: 'relative',
                   overflow: 'hidden',
                }}
            >
            {itemImage ? (
            <img
               src={itemImage}
               alt="Uploaded"
               style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
               }}
             />
            ) : (
            <div style={{ textAlign: 'center' }}>
               <p>Click here to upload image</p>
            </div>
           )}
           <input
             type="file"
             id="fileInput"
             style={{ display: 'none' }} // Hide the file input
             accept="image/*" // Accept only image files
             onChange={handleImage}
           />
           </div>
            {/* </div> */}
            <button  style={{height : 'auto'}} onClick={saveButtonfunc}>Save</button>
           </div>
    </div>
  )
}

export default DBNewItem