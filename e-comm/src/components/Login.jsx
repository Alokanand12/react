import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = ({ setToggle }) => {
  let { registerUsers, setLoggedInUSer } = useContext(Auth);
  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  let handleFormSubmit = (data) => {
    let user = registerUsers.find(
      (elem) => elem.email === data.email && elem.password === data.password
    );

    if (!user) return alert("User not found");

    localStorage.setItem("log user", JSON.stringify(user));

    alert("user loggedin");
    setLoggedInUSer(user);
    navigate("/");
  };

  return (
    <div className=" bg-gray-400 w-full flex flex-col items-center justify-center">
      <h1>Login</h1>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex bg-white w-[40%] p-10 rounded-xl border-2 border-gray-400  flex-col gap-4"
        action=""
      >
        <input
          {...register("email", {
            required: "Email is required",
          })}
          className="outline-0 px-4 py-2 rounded border border-black/50"
          type="email"
          placeholder="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "At least 6 characters are required",
            },
          })}
          className="outline-0 px-4 py-2 rounded border border-black/50"
          type="password"
          placeholder="password"
        />

        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button
          disabled={!isValid}
          className="py-4 bg-blue-500 text-white rounded-xl"
        >
          Create
        </button>
        <div>
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setToggle(true)}
              className="cursor-pointer text-blue-600"
            >
              Register here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
