
const productReducer = (state = [] , action) => {

    switch(action.type){
       case 'SET_PRODUCT_INFO':
         return action.payload;

       case 'GET_PRODUCT_INFO':
         return state;
        
       default:
         return state;

    }
}

export default productReducer ;


