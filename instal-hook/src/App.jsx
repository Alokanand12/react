import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  let { register, handleSubmit, reset ,formState:{errors}} = useForm();

  return (
    <div>
      <h1>App</h1>

      <form onSubmit={handleSubmit((data) =>{
       console.log(data),
       
       reset()}
      )}>
        <input {...register("name",{required:"Name is required"})} type="text" placeholder="Name" />
        <br></br>
        {errors.name && <p>{errors.name.message}</p>}
        <input {...register("email",{required:"email is required"})} type="text" placeholder="Email" />

               <br></br>
                {errors.email && <p>{errors.email.message}</p>}
        <input {...register("pass",{required:"password is required"})} type="text" placeholder="Password" />
               <br></br>
                {errors.pass && <p>{errors.pass.message}</p>}
        <input {...register("mob" ,{required:"mobile is required", 
        minLength:{value:10,
          message:"minimun 10 digit are reguired",
        }
          ,
          maxLength:{value:10,
            message:"maximun 10 digit are required",
          }

        })} type="text" placeholder="Mobile" />
              <br></br>
               {errors.mob && <p>{errors.mob.message}</p>}
        <button>Submit</button>
        
      </form>
    </div>
  );
};

export default App;