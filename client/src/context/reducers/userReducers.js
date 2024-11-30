
  // Reducer to handle user-related actions
  const userReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_USER_INFO':
        return action.payload
        
      case 'GET_USER_INFO':
          return state;

      case 'CLEAR_ USER_INFO':
         return null;
         
      default:
        return state;
    }
  };
  
  export default userReducer;
  