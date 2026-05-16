import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = ({ setPage }) => {
  const { setUser } = useContext(AuthContext);
  const [form, setForm] = useState({});

  const submit = (e) => {
    e.preventDefault();
    setUser(form);
    setPage("home");
  };

  return (
    <form onSubmit={submit} className="p-10 flex flex-col gap-4">
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button className="bg-green-400 text-black p-2">Login</button>
    </form>
  );
};

export default Login;