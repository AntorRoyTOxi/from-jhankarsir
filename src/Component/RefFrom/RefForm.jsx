import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


const RefForm = () => {  
     const nameRef=useRef() 
      const passwordRed=useRef();  
       const textRef=useRef(); 
        const [error,setError]=useState()

       
     const hanndleSubmit=e=>{ 
           e.preventDefault(); 
            if(passwordRed.length <6){ 
                setError('vlo') 
            } 
             else{ 
                 setError('')
             }
            console.log(nameRef.current.value) 
             console.log(passwordRed.current.value) 
              console.log(textRef.current.value)
     } 
      useEffect(()=>{ 
           nameRef.current.focus()
      },[])
    return (
        <div>
            <form onSubmit={hanndleSubmit} >
                <input ref={nameRef} name="name" type="text" required /> <br />
                  <input ref={passwordRed}  name="password" type="password" required /> <br /> 
                   <input ref={textRef} type="text" /><br />
                   <input type="submit" value="Submit " />
            </form>  
            {
             error && <p> not ok </p> 
             }
        </div>
    );
};

export default RefForm;