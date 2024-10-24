import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center bg-[#080c14] pt-44">
      <div className="bg-[#06042e] p-8 w-[550px] shadow-lg border-2 border-white">
        <form className="signup-form">
          <h2 className="text-2xl font-bold mb-4 text-white">Create Your Account</h2>
          <p className="text-sm mb-1 text-white">
            Hey there! Ready to join the party? We just need a few details from you to get started.
          </p>
          <p className="text-sm mb-5 text-white">Let’s do this!</p>

          <button type="button" className="flex items-center justify-center bg-white text-black border-none py-2 w-full text-sm rounded-lg mb-5 cursor-pointer">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2" />
            Continue with Google
          </button>

          <div className="text-center my-5 relative">
            <span className="relative z-10 text-[#0d1117] bg-white px-2">or</span>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#ddd]"></div>
          </div>

          <div className="mb-5 input-group">
            <label htmlFor="firstName" className="block mb-2 text-white">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="mt-2 w-full px-3 py-3 border border-[#ccc] rounded-[10px] bg-white text-sm placeholder-slate-500"
            />
          </div>

          <div className="mb-5 input-group">
            <label htmlFor="lastName" className="block mb-2 text-white">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="mt-2 w-full px-3 py-3 border border-[#ccc] rounded-[10px] bg-white text-sm placeholder-slate-500"
            />
          </div>

          <div className="mb-5 input-group">
            <label htmlFor="email" className="block mb-2 text-white">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="mt-2 w-full px-3 py-3 border border-[#ccc] rounded-[10px] bg-white text-sm placeholder-slate-500"
            />
          </div>

          <div className="mb-5 input-group">
            <label htmlFor="password" className="block mb-2 text-white">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-2 w-full px-3 py-3 border border-[#ccc] rounded-[10px] bg-white text-sm placeholder-slate-500"
            />
          </div>

          <div className="mb-5 input-group">
            <label htmlFor="confirmPassword" className="block mb-2 text-white">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="mt-2 w-full px-3 py-3 border border-[#ccc] rounded-[10px] bg-white text-sm placeholder-slate-500"
            />
          </div>

          <button type="submit" className="w-full bg-[#f39c12] text-black py-3 border-none rounded-full text-lg cursor-pointer flex justify-center items-center hover:translate-x-3 transition-all font-semibold">
            Sign Up <span className="ml-2">→</span>
          </button>

          <p className="text-center text-sm mt-5 text-white">
            Already have an account? <Link to="/login" className="text-[#58a6ff] hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
