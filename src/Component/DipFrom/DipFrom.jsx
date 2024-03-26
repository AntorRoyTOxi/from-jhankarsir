import { useState } from "react";


const DipFrom = () => { 
      
 const [name,setName]=useState();  
  const [password,setPassword]=useState(); 
   const [error,setError]=useState();
      

    
    const hanndleName=e=>{ 
             setName(e.target.value)
    } 
     
    const hanndlePassword=e=>{ 
          setPassword(e.target.value)
    }
       const hanndleSubmit=e=>{   
         if(password.length<6){ 
               setError('must be ')
         } 
          else{ 
               setError('')
          }
           e.preventDefault()
           console.log(name)
           console.log(password)
           
       }
    return (
        <div>
            <form onSubmit={hanndleSubmit} >
                <input  onChange={hanndleName} name="name" type="text" required /> <br />
                  <input onChange={hanndlePassword} name="password" type="password" required /> <br />
                   <input type="submit" value="Submit " />
            </form> 
              { 
              error && <p> Please 6 digit  password </p>
              }
        </div>
    );
};

export default DipFrom;