import React from 'react'

const LoginInput = ({placeholder, icon, inputValue, onClickFunc}) => {

  const onchangeFunc = (e) => {
    onClickFunc(e.target.value);
  }
  
  return (
    <div>
       <div>
        {icon}
        <input placeholder={placeholder} onChange={onchangeFunc} />
       </div>
    </div>
  )
}

export default LoginInput