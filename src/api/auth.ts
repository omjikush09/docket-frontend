import axios from "axios";
import API from "../backend";

interface SignUp{
    name:string,
    email:string,
    password:string
}

export const signup=({name,email,password}:SignUp)=>{

    const data={name,email,password}
    return axios.post(`${API}signup/password`,data)
        .then((res)=>{
            return res.data;
        })
        .catch((res)=>{
            console.log(res)
            if(res.data.error){
                return res.data;
            }else{
                return {error:"Something went wrong"}
            }
        })
}

