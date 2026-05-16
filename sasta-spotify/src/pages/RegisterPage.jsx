import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md text-white">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
            S
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Sign up to <br /> start listening
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm">Email address</label>
            <input
              type="email"
              placeholder="name@domain.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className="w-full mt-1 px-4 py-3 bg-black border border-gray-600 rounded-md focus:outline-none focus:border-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Next Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-full transition"
          >
            Next
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full border border-gray-600 py-3 rounded-full flex items-center justify-center gap-2 hover:border-white">
            📱 Sign up with phone number
          </button>

          <button className="w-full border border-gray-600 py-3 rounded-full flex items-center justify-center gap-2 hover:border-white">
            <span className="text-red-500 font-bold">G</span>
            Sign up with Google
          </button>

          <button className="w-full border border-gray-600 py-3 rounded-full flex items-center justify-center gap-2 hover:border-white">
            🍎 Sign up with Apple
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-white font-semibold cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
