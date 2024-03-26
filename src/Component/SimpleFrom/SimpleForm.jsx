

const SimpleForm = () => { 
     
    const hanndleClick=e=>{   
         e.preventDefault()
         console.log(e.target.name.value) 
          console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={hanndleClick}> 
                 <input type="text" name="name" />  <br />
                  <input type="email" name="email" id="" />
                 <br /> 
                   <button> submit </button>
            </form>
        </div>
    );
};

export default SimpleForm;