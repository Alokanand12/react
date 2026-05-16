import React, { useRef, useState } from "react";

const App = () => {
  console.log("app rendering..");
  let formRef = useRef({});
  console.log(formRef);

  let handleSubmit = (e) => {
    e.preventDefault();
    let { name, email, password } = formRef.current;
    let data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(data);
    setFormData(data);
  };

  return (
    <div>
      <h1>Form handling</h1>

      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            ref={(e) => (formRef.current.name = e)}
            id="name"
            type="text"
            placeholder="name"
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            ref={(e) => (formRef.current.email = e)}
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="pass">Password</label> <br />
          <input
            ref={(e) => (formRef.current.password = e)}
            id="pass"
            type="text"
            placeholder="Password"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
