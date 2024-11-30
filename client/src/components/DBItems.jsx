import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {deleteSingleItem, getallProduct} from '../api/index';
import { setProductInfo } from '../context/actions/productActions';
import DBHeader from './DBHeader';


const DBItems = () => {
    const dispatch = useDispatch();
  
    // Selecting data from the Redux store
    const datatoDisplay = useSelector(state => state.product);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const data = await getallProduct(); // Fetch data from backend
    //       dispatch(setProductInfo(data)); // Dispatch action to update Redux store
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, [dispatch]);
  
    async function deleteItem(productId){
        console.log(" id " , productId);
        const res = await deleteSingleItem(productId);
        if(res.status == 200){
           console.log("helllllllllllllloooooooooooo")
           const data = await getallProduct(); // Fetch data from backend
           dispatch(setProductInfo(data)); // Dispatch action to update Redux store
        }
    }

    return (
      <div>
        <DBHeader/>
        <div style={{ display: 'flex', justifyContent: 'space-between', height : 'auto' }}>
          <p>Actions</p>
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
        </div>
  
        <div>
          {datatoDisplay.length > 0 ? (
            datatoDisplay.map((item, index) => (
              <div key={index} style={{ display: 'flex' , height : 'auto' }}>
                <li>Edit</li>
                <li onClick={() => deleteItem(item.productId)}>Delete</li>
                <li> <img src={item.imageURL} alt="product_image"  style={{ width : '100px' , height : '100px' }} /> </li>
                <li>{item.product_category}</li>
                <li>{item.product_name}</li>
                <li>{item.product_price}</li>
              </div>
            ))
          ) : (
            <p>Loading...</p> // Show a loading message until data is fetched
          )}
        </div>
      </div>
    );
  };
  
  
  export default DBItems;
  
// export default DBItems