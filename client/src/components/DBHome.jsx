import React,  { useEffect, useState } from 'react'
import DBHeader from './DBHeader';
import { CChartBar, CChartPie } from '@coreui/react-chartjs';
import { useSelector, useDispatch } from 'react-redux';
import { getallProduct} from '../api/index';
import { setProductInfo } from '../context/actions/productActions';

const DBHome = () => {
    console.log("Inside the home of dashboad");
    const allproducts = useSelector(state => state.product);

    // const dispatch = useDispatch();

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

    // Format data for the chart
    const labelsArray = allproducts?.map((product) => product.product_name); // Product names as labels
    const prices = allproducts?.map((product) => product.product_price); // Product prices as data points

    console.log("labels", labelsArray);
    console.log("price" , prices);

  return (
    <div>
      <DBHeader/>

<CChartBar
    data={{
      labels: labelsArray,
      datasets: [
        {
          label: 'Sales',
          backgroundColor: '#42A5F5',
          data: prices,
        },
      ],
    }}
    labels="months"
  />

       
   <CChartPie
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
          {
            data: [300, 50, 100, 80],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      }}
    />

    </div>
   
  )
}

export default DBHome