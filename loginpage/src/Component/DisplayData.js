
import React, { createContext, useContext } from "react";
import UserContext from "./UserContext";

// const DisplayContext =createContext();

 
// export const useData = ()=>{

//     return useContext(DisplayContext);
// }


function DisplayData(){

     const {user} = useContext(UserContext);

    // const Udata = useData() ;

    if(!user){
      return <h3>Please  Login </h3>
    }else{
      return <div>
          <p> Username: {user.userName}</p>
          <p>Email: {user.email}</p>
          <p>  Mobile: {user.mobile}</p>
      </div>
    }

}

export default DisplayData