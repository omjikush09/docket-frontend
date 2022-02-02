import React, { useState } from "react";
import "./SignUp.scss";
import { signup } from '../../api/auth';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"
const SignUp: React.FC = () => {
  interface stateType {
    name: string;
    email: string;
    password: string;
    error: string;
    success: string;
  }
  const [values, setValues] = useState<stateType>({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
  });

  const {name,email,password,error,success}=values  


  const handleChange=(event:React.ChangeEvent<HTMLInputElement>,name:string)=>{
    setValues({...values,[name]:event.target.value,error:"",success:""})
  }

  const navigate =useNavigate()

  const onSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
      signup({name,email,password}).then((res)=>{
        console.log(res)
          if(res.error){
            setValues({...values,error:res.error,success:""})
          }else{
            setValues({...values,error:"",success:res.success})
            setTimeout(() => {
              navigate("/login")
            }, 1000);
          }
      })  
  }

  


  return (
    <>
      <div className="container">
        {error}
        {success}
        <div className="container_form">
         <h3>SignUp</h3>
        <form onSubmit={onSubmit} className="form">
          <div className="form_group">
          <label htmlFor="name" className="form_label" >Name</label>
          <input className="form_input" type="text" value={name} onChange={(event)=>handleChange(event,"name")} placeholder="Enter your name" name="name" id="name" required />
          </div>
          <div className="form_group" >
          <label htmlFor="email" className="form_label">Email</label>
          <input type="text" className="form_input" value={email} onChange={(event)=>handleChange(event,"email")} placeholder="Enter your Email" id="email" required/>
          </div>
          <div className="form_group">
          <label htmlFor="password" className="form_label">Password</label>
          <input type="password" className="form_input" value={password} onChange={(event)=>handleChange(event,"password")}  placeholder="Enter your password" id="password" required/>
          </div>
          <button className="btn-link" >Signup</button>
        </form>
        <p>Already have a account? <Link to="/login" className="btn-text">Login</Link></p>
       <p>Or SignUp using </p>
        <i><FcGoogle/></i>
    
        
      </div>
      </div>
    </>
  );
};

export default SignUp;
