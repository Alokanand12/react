import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const LoginPage = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-sm text-white">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.302 17.275a.91.91 0 01-1.252.302c-3.418-2.09-7.72-2.564-12.78-1.402a.91.91 0 01-.408-1.772c5.44-1.256 10.155-.71 13.978 1.63a.91.91 0 01.462 1.242zM18.84 14.1c-.26.425-.836.56-1.26.305-3.83-2.34-9.66-3.03-14.19-1.65-.5.15-1.02-.135-1.17-.635a.86.86 0 01.635-1.17c5.15-1.55 11.66-1.05 16.03 1.625.425.26.56.835.305 1.26zM19.98 10.74c-.31.5-1.005.65-1.505.345-4.46-2.73-11.23-2.98-16.14-1.63-.56.15-1.145-.17-1.3-.73a.93.93 0 01.73-1.3c5.36-1.45 12.82-1.16 17.9 1.95.5.31.65 1.005.345 1.505z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">Welcome back</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full bg-black border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1ed760] text-black font-bold py-3 rounded-full hover:scale-105 transition-transform"
          >
            Continue
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="px-4 text-sm">or</span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        <div className="space-y-3">
          {[
            "Continue with phone number",
            "Continue with Google",
            "Continue with Facebook",
            "Continue with Apple",
          ].map((text) => (
            <button
              key={text}
              className="w-full border border-gray-600 rounded-full py-3 hover:border-white transition-colors flex items-center justify-center font-bold"
            >
              {text}
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">Don't have an account?</p>
          <a
            onClick={() => navigate("/register")}
            href="#"
            className="underline font-bold hover:text-[#1ed760]"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
