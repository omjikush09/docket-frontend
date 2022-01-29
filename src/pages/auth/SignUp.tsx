import React from 'react';
import './SignUp.scss'
const SignUp = () => {
  return(
  <>
    <div className="container">
      <form className="form">
        <label >Name</label>
        <input type="text" placeholder='Enter your name' />
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Enter your Email' />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter your password'/>
      </form>
    </div>


  </>
  );
};

export default SignUp;
