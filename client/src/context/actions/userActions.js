// actions.js
export const setUserInfo = (user) => {
    return {
      type: 'SET_USER_INFO',
      payload: user
    };
  };

 export const getUserInfo = () => {
    return {
      type: 'GET_USER_INFO',
    };
  };

  export const clearUserInfo = () => {
    return {
      type: 'CLEAR_ USER_INFO',
    }
  }