import React, { useContext, useRef, useState } from "react";
import UserContext from "./UserContext";

function LoginPage({chidren}) {

    const {setUser}=useContext(UserContext);
    
    const inputnameRef = useRef(null);
    const inputemailRef = useRef(null);
    const inputpassRef = useRef(null);
    const inputmobRef = useRef(null);

    // const [inputData , setInputdata] = useState({});
    const [displayMessage , setDisplayMessage] =useState("")

    


    
  function handleSubmit(e){
        e.preventDefault()

        if(inputnameRef.current.value && inputemailRef.current.value && inputmobRef.current.value && inputmobRef.current.value.length <=10){
            setDisplayMessage("Login Successfully");
            
            setUser({
                userName:inputnameRef.current.value,
                email:inputemailRef.current.value,
                mobile:inputpassRef.current.value
            });
          
          
          

        } else{
            setDisplayMessage(" Login Failed. please check your input");
        }

       

    }




    return (
        <>
        <div className="container">
         
        <div className="d-flex justify-content-center  align-items-center w-100 vh-50">
            <div className="p-5 border w-50 bg-light  align-items-center">
            <form onSubmit={handleSubmit}>
            <div className="">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" ref={inputnameRef} placeholder="Enter Your Name"></input>
                </div>
                <div className="">
                    <label htmlFor="name">Email:</label>
                    <input type="email" className="form-control" ref={inputemailRef} placeholder="Enter Your Valid Email"></input>
                </div>
                <div className="">
                    <label htmlFor="name">Password:</label>
                    <input type="password" className="form-control"  ref={inputpassRef} placeholder="Enter Your Password"></input>
                </div>
                <div className="">
                    <label htmlFor="name">Mobile:</label>
                    <input type="Phone" className="form-control" minLength={10} maxLength={10} ref={inputmobRef} placeholder="Enter your Mobile Number"></input>
                </div>
                <br></br>
                <button type="submit" className="btn btn-info mt-10" >Submit</button>
            </form>
                
            </div>

           

        </div>
       <div> {displayMessage}</div>
        </div>
       
        </>


    )
}

export default LoginPage