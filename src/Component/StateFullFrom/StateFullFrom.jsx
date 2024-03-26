import { useState } from "react";



const StateFullFrom = () => { 
    const [name,setName]=useState()   
     const [email,setEmail]=useState()    
      const [error,setError]=useState();
     
     const hanndleSubmit=e=>{ 
            e.preventDefault();  
             if(name.length<7){ 
                setError('must be 7 cracter ')
             }  
              else{
                 setError('')
              }
             
             console.log(name) 
              console.log(email)
       }  
        const handleEmail=e=>{ 
               setEmail(e.target.value)
        }
        
          
          const handdleClick=(e)=>{  
            //  console.log(e.target.value) 
                setName(e.target.value)
              
          }
    return (
        <div>
    <form onSubmit={hanndleSubmit} > 
                 <input onChange={handdleClick} type="text" name="name"  required/>  <br />
                  <input onChange={handleEmail} type="email" name="email" id="" required />
                 <br /> 
                   <button > submit </button>
            </form> 
             { 
             error && <p>Please inter the 7 chracter  </p>
             }
        </div>
    );
};

export default StateFullFrom;