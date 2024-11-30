export const setProductInfo = (product) => {
    return {
      type: 'SET_PRODUCT_INFO',
      payload: product
    };
  };

 export const getProductInfo = () => {
    return {
      type: 'GET_PRODUCT_INFO',
    };
 };

// export const updateProductInfo = () => {
//   return {
//     type: 'UPDATE_PRODUCT_INFO'
//   }
// }