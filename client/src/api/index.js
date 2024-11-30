// import { useDispatch } from "react-redux";

const url = 'http://127.0.0.1:5001/foodapp-fullstack3/us-central1/app'
// const dispatch = useDispatch();

export async function validateTokenFunc(idToken){

    return await fetch(`${url}/api/users/jwtVerfication`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}` // Include the token in the Authorization header
      },
    })
    .then(response => response.json())
    .then(res => {
      console.log('Response from backend:', res.data);
      return res.data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


export function createProduct(data){
  // console.log("data.productId " , data.productId);
    fetch(`${url}/api/products/createproduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log('Response from backend:', res);
      return res;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export async function getallProduct(){
  return await fetch(`${url}/api/products/getproduct`, {
    method : 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
    .then(res => {
      console.log('Response from backend products are:', res);
    
      return res
    })
    .catch(error => {
      console.error('Error:', error);
      return error;
    });
}


export async function deleteSingleItem(id){
  return await fetch(`${url}/api/products/deleteproduct/${id}`, {
    method : 'DELETE', 
    headers : {
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    console.log("response" , response)
    return response;
  })
  .catch(error => {
    console.log(error)
    return error;
  });
}

export function addTocartProduct(id, data){

   console.log(" id " , id)
     fetch(`${url}/api/products/addtocart/${id}`, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
       },
       body : JSON.stringify(data)
     })
     .then(response => {
      console.log("response" , response)
      return response;
    })
    .catch(error => {
      console.log(error)
      return error;
    });
}

export function getallcartItems(id){
  fetch(`${url}/api/products/getcartitem/${id}`, {
    method : 'GET', 
    headers : {
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    console.log("response" , response)
    return response;
  })
  .catch(error => {
    console.log(error)
    return error;
  });
}