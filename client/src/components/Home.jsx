import React, { useState, useEffect } from 'react'
import { Delivery } from '../assets'
import {HeroBg} from "../assets"
import { rice3 } from '../assets'
import { home_1 } from "../assets/index" ;
import { IoFastFood } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { getallProduct, addTocartProduct, getallcartItems} from '../api/index';
import { setProductInfo } from '../context/actions/productActions';

const Home = () => {

   const arrayOfItems = ['Drinks', 'Deserts', 'Fruits', 'Rice', 'Curry' , 'Chinese', 'Fish'];
   console.log("arrayOfItems ", arrayOfItems);

   const [matchedProduct, setmatchedProduct] = useState([]);
   const [keyUpdate , setkeyUpdate] = useState(0);

   let arr = [];

   const allproducts = useSelector(state => state.product);
   const userID = 'jwjdjwendj61237'
  //  const userID = useSelector(state => state.user.uid);
   const userLogedIn = useSelector(state => state.user);

   console.log("userID" , userID);

   const dispatch = useDispatch();

   useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getallProduct(); // Fetch data from backend
          dispatch(setProductInfo(data)); // Dispatch action to update Redux store
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [dispatch]);

    useEffect(() => {
      const fetchCartItems = async () => {
         if(userLogedIn){
            try {
               const data = await getallcartItems(userID); // Fetch data from backend
               console.log("data", data);
              //  dispatch(setProductInfo(data)); // Dispatch action to update Redux store
             } catch (error) {
               console.error('Error fetching data:', error);
             }
         }
      };
  
      fetchCartItems();
    }, [dispatch]);

   function setParticularItemFunc(item){
      setkeyUpdate((prev) => prev + 1);
      console.log("item" , item);
      arr = allproducts?.filter((data) => item === data.product_category);
      setmatchedProduct(arr);
      console.log("arr" , matchedProduct);
   }

   function addToCartFunc(data){
      console.log("cart Item ", data, userID);
      addTocartProduct(userID, data);
      
   }

  return (
    <div>
      <div className= 'firstdivHomeClass' >
    <div className = ' seconddivClass '>
      <div className = 'freedeliverydiv' >
        <p className='freedeliverydivpara'>Free Delivery</p>
        <div className='delivyDivclass'>
           <img src={Delivery} alt='delivery man img'  className=' image_class1 ' />
        </div>

      </div>
      <p className='fastest'>The Fastest</p>
      <p className=' delivery_In'> Delivery in </p>
      <p className='your_City'> Your City</p>
      <p className='homepagepara extrastyleHomepara'>Lorem ipsum dolor sit amet consectetur adipisicing elit Quod ipsam doloribus.</p>
      <p  className='homepagepara'> et similique distinctio, rem deleniti ipsa, nesciunt vitae labore voluptates </p>
      <p  className='homepagepara'> sunt ducimus mollitia id libero! Nostrum expedita libero recusandae?</p>
      <button className='orderButton'> Order Now </button>
    </div>
  
    <div className=' positionrealtivedivClass '>
      {/* Hero Image */}
      <img src={HeroBg} alt='bg image' className='image_class2' />
  
      {/* Red and Blue Divs */}
      <div className=' positionabsolutedivClass ' >
        <div className='positionabsolutedivchild_1Class' >
          <img src={rice3}  className='positionabsoultechild_img'/>
           <p className='pcommonstyle firstp'> Iceream </p>
           <p  className='pcommonstyle secondp'> Chocolate & vanilla </p>
           <span className='pcommonstyle dollarspanclass ' > $ </span>
           <span className='pcommonstyle ' > 23.00 </span>
           {/* <p className='pcommonstyle' > $ 23</p> */}
           
        </div>
        <div  className='positionabsolutedivchild_2Class'>
        <img src={rice3}  className='positionabsoultechild_img'/>
           <p className='pcommonstyle firstp'> Iceream </p>
           <p  className='pcommonstyle secondp'> Chocolate & vanilla </p>
           <span className='pcommonstyle dollarspanclass ' > $ </span>
           <span className='pcommonstyle ' > 23.00 </span>
        </div>
      </div>
  
      <div className=' positionabsolutedivClass ' style={{ marginTop : '300px'}} >
        <div className='positionabsolutedivchild_1Class diffStyle_1Class'>
        <img src={rice3}  className='positionabsoultechild_img'/>
           <p className='pcommonstyle firstp'> Iceream </p>
           <p  className='pcommonstyle secondp'> Chocolate & vanilla </p>
           <span className='pcommonstyle dollarspanclass ' > $ </span>
           <span className='pcommonstyle ' > 23.00 </span>
        </div>
        <div  className='positionabsolutedivchild_2Class diffStyle_2Class'>
        <img src={rice3}  className='positionabsoultechild_img'/>
           <p className='pcommonstyle firstp'> Iceream </p>
           <p  className='pcommonstyle secondp'> Chocolate & vanilla </p>
           <span className='pcommonstyle dollarspanclass ' > $ </span>
           <span className='pcommonstyle ' > 23.00 </span>
        </div>
      </div>
  
      <div className=' positionabsolutedivClass ' style={{ marginTop : '500px'}} >
        <div className='positionabsolutedivchild_1Class diffStyle_1Class' >
        <img src={rice3}  className='positionabsoultechild_img'/>
           <p className='pcommonstyle firstp'> Iceream </p>
           <p  className='pcommonstyle secondp'> Chocolate & vanilla </p>
           <span className='pcommonstyle dollarspanclass ' > $ </span>
           <span className='pcommonstyle ' > 23.00 </span>
        </div>
        <div className='positionabsolutedivchild_2Class diffStyle_2Class'>
        <img src={rice3}  className='positionabsoultechild_img'/>
           <p className='pcommonstyle firstp'> Iceream </p>
           <p  className='pcommonstyle secondp'> Chocolate & vanilla </p>
           <span className='pcommonstyle dollarspanclass ' > $ </span>
           <span className='pcommonstyle ' > 23.00 </span>
        </div>
      </div>
    </div>
      </div>
      <div className='thirdDivHomeClass' style={{display: 'block' }}>
      <h2 className='Hot_Dishes' >Our Hot Dishes</h2>
      <div className='outerdiv' >

        { arrayOfItems?.map((item, index) => (
            <div className='innerdiv' key={index} onClick={() => setParticularItemFunc(item)}>
              <div className='foodIcon'>   <IoFastFood /></div>
              <p className='innerdiv_para'>{item}</p>
            </div>
        ))}
       </div>
        
      </div>

      <div key={keyUpdate} style={{height : 'auto'}}>
        {
          matchedProduct?.map((data, index) => (
            <div key={index} style={{height : 'auto'}}>
               <li style={{display: 'inline'}} >{data.product_name}</li>
               <button onClick={() => addToCartFunc(data)}>add to cart</button>
            </div>
          ))
        }
      </div>
   
    </div>
  )
}

export default Home