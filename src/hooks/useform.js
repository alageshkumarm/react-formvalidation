import React, { useState } from 'react'

const Useform = (validate) => {
 const [values,setvalues] = useState({
   username:"",
   email:"",
   password:"",
   password2:"",
 });

 const [errors,setErrors]=useState({})


 const handlechange = (e) => {
    const {name,value} = e.target;

    setvalues((prevvalues)=>{
     return{   
    ...prevvalues,
    [name]:value,
    }
    })
    };
    const Handlesubmit = (e) =>{
     e.preventDefault();

     setErrors(validate(values))
    }
    return {handlechange,values,Handlesubmit,errors};
};

export default Useform;
